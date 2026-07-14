# PowerShell Static Web Server using TcpListener (No Admin Privileges Required)
# Serves content from the script directory on http://<IP>:8080/

$port = 8080
$currentDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (!$currentDir) { $currentDir = Get-Location }

# Set Location to the script directory
Set-Location $currentDir

# Get local IP addresses for display
$localIPs = @("localhost", "127.0.0.1")
try {
    $ips = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" } | Select-Object -ExpandProperty IPAddress
    foreach ($ip in $ips) {
        $localIPs += $ip
    }
} catch {
    $ipconfig = ipconfig
    foreach ($line in $ipconfig) {
        if ($line -match "IPv4 Address.*:\s*([0-9\.]+)") {
            $localIPs += $Matches[1]
        }
    }
}
$localIPs = $localIPs | Select-Object -Unique

# Bind TcpListener to Any (0.0.0.0) - this listens on all interfaces and does NOT require admin
$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Any, $port)

try {
    $listener.Start()
    Write-Output "=== SERVER RUJUKAN UBAT DIJALANKAN (TCP SOKET) ==="
    Write-Output "Sila buka alamat berikut di pelayar web anda:"
    Write-Output "http://localhost:$port/  (Di PC ini)"
    foreach ($ip in $localIPs) {
        if ($ip -ne "localhost" -and $ip -ne "127.0.0.1") {
            Write-Output "http://$($ip):$port/  (Di PC lain dalam rangkaian yang sama)"
        }
    }
    Write-Output "======================================="
    Write-Output "Tekan Ctrl+C di terminal ini atau matikan tugasan untuk menghentikan server."

    while ($true) {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        
        # Read request header block
        $buffer = New-Object Byte[] 8192
        $bytesRead = $stream.Read($buffer, 0, $buffer.Length)
        if ($bytesRead -eq 0) {
            $client.Close()
            continue
        }
        
        $rawRequest = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $bytesRead)
        $requestLines = $rawRequest -split "`r`n"
        $requestLine = $requestLines[0]
        
        $parts = $requestLine -split " "
        if ($parts.Length -lt 2) {
            $client.Close()
            continue
        }
        $method = $parts[0]
        $urlPath = $parts[1]
        
        # Parse headers
        $headerEndIndex = $rawRequest.IndexOf("`r`n`r`n")
        $body = ""
        $headers = @{}
        if ($headerEndIndex -ne -1) {
            $headersPart = $rawRequest.Substring(0, $headerEndIndex)
            $bodyPart = $rawRequest.Substring($headerEndIndex + 4)
            
            $headerLines = $headersPart -split "`r`n"
            for ($i = 1; $i -lt $headerLines.Length; $i++) {
                $hParts = $headerLines[$i] -split ":", 2
                if ($hParts.Length -eq 2) {
                    $headers[$hParts[0].Trim()] = $hParts[1].Trim()
                }
            }
            
            # Read complete body for POST request
            if ($method -eq "POST" -and $headers.ContainsKey("Content-Length")) {
                $contentLength = [int]$headers["Content-Length"]
                $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($bodyPart)
                $alreadyRead = $bodyBytes.Length
                
                $fullBodyBytes = New-Object Byte[] $contentLength
                if ($alreadyRead -gt 0) {
                    [Array]::Copy($bodyBytes, 0, $fullBodyBytes, 0, [Math]::Min($alreadyRead, $contentLength))
                }
                
                $remaining = $contentLength - $alreadyRead
                $writeOffset = $alreadyRead
                while ($remaining -gt 0) {
                    $chunk = $stream.Read($fullBodyBytes, $writeOffset, $remaining)
                    if ($chunk -le 0) { break }
                    $remaining -= $chunk
                    $writeOffset += $chunk
                }
                $body = [System.Text.Encoding]::UTF8.GetString($fullBodyBytes)
            }
        }
        
        # Clean urlPath parameters
        if ($urlPath.Contains("?")) {
            $urlPath = $urlPath.Split("?")[0]
        }
        
        # Route handler
        if ($method -eq "POST" -and $urlPath -eq "/save_image") {
            # Extract name and base64Data
            $fileName = ""
            $base64Data = ""
            if ($body -match '"name"\s*:\s*"([^"]+)"') {
                $fileName = $Matches[1]
            }
            if ($body -match '"data"\s*:\s*"data:image/png;base64,([^"]+)"') {
                $base64Data = $Matches[1]
            }
            
            if ($fileName -ne "" -and $base64Data -ne "") {
                $bytes = [System.Convert]::FromBase64String($base64Data)
                $destDir = "C:\Users\USER\Desktop"
                $destPath = Join-Path $destDir $fileName
                [System.IO.File]::WriteAllBytes($destPath, $bytes)
                
                $resBytes = [System.Text.Encoding]::UTF8.GetBytes("Saved successfully")
                $resHeaders = "HTTP/1.1 200 OK`r`nContent-Type: text/plain`r`nContent-Length: $($resBytes.Length)`r`nConnection: close`r`n`r`n"
                $resHeaderBytes = [System.Text.Encoding]::UTF8.GetBytes($resHeaders)
                $stream.Write($resHeaderBytes, 0, $resHeaderBytes.Length)
                $stream.Write($resBytes, 0, $resBytes.Length)
            } else {
                $resBytes = [System.Text.Encoding]::UTF8.GetBytes("Invalid payload")
                $resHeaders = "HTTP/1.1 400 Bad Request`r`nContent-Type: text/plain`r`nContent-Length: $($resBytes.Length)`r`nConnection: close`r`n`r`n"
                $resHeaderBytes = [System.Text.Encoding]::UTF8.GetBytes($resHeaders)
                $stream.Write($resHeaderBytes, 0, $resHeaderBytes.Length)
                $stream.Write($resBytes, 0, $resBytes.Length)
            }
            $client.Close()
            continue
        }
        
        if ($method -eq "POST" -and $urlPath -eq "/log") {
            try {
                # Simple parsing of json keys (username and action)
                $username = ""
                $action = ""
                if ($body -match '"username"\s*:\s*"([^"]+)"') { $username = $Matches[1] }
                if ($body -match '"action"\s*:\s*"([^"]+)"') { $action = $Matches[1] }
                
                if ($username -ne "" -and $action -ne "") {
                    $logPath = Join-Path $currentDir "activity_log.txt"
                    $timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
                    $ip = $client.Client.RemoteEndPoint.Address.ToString()
                    $logLine = "$timestamp | $ip | $username | $action"
                    Add-Content -Path $logPath -Value $logLine
                    
                    $resBytes = [System.Text.Encoding]::UTF8.GetBytes("Log saved")
                    $resHeaders = "HTTP/1.1 200 OK`r`nContent-Type: text/plain`r`nContent-Length: $($resBytes.Length)`r`nConnection: close`r`n`r`n"
                } else {
                    $resBytes = [System.Text.Encoding]::UTF8.GetBytes("Missing username or action")
                    $resHeaders = "HTTP/1.1 400 Bad Request`r`nContent-Type: text/plain`r`nContent-Length: $($resBytes.Length)`r`nConnection: close`r`n`r`n"
                }
            } catch {
                $resBytes = [System.Text.Encoding]::UTF8.GetBytes("Error: $_")
                $resHeaders = "HTTP/1.1 500 Internal Server Error`r`nContent-Type: text/plain`r`nContent-Length: $($resBytes.Length)`r`nConnection: close`r`n`r`n"
            }
            $resHeaderBytes = [System.Text.Encoding]::UTF8.GetBytes($resHeaders)
            $stream.Write($resHeaderBytes, 0, $resHeaderBytes.Length)
            $stream.Write($resBytes, 0, $resBytes.Length)
            $client.Close()
            continue
        }
        
        if ($method -eq "GET" -and $urlPath -eq "/logs") {
            $logPath = Join-Path $currentDir "activity_log.txt"
            $logs = @()
            if (Test-Path $logPath) {
                $lines = Get-Content $logPath
                foreach ($line in $lines) {
                    if ($line -match "(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+)") {
                        $logs += [PSCustomObject]@{
                            timestamp = $Matches[1]
                            ip = $Matches[2]
                            username = $Matches[3]
                            action = $Matches[4]
                        }
                    }
                }
            }
            
            if ($logs.Count -gt 1) {
                [array]::Reverse($logs)
            }
            
            # Simple conversion to json string
            $jsonLines = @()
            foreach ($log in $logs) {
                $jsonLines += "  {`n    `"timestamp`": `"$($log.timestamp)`",`n    `"ip`": `"$($log.ip)`",`n    `"username`": `"$($log.username)`",`n    `"action`": `"$($log.action)`"`n  }"
            }
            $json = "[" + ($jsonLines -join ",") + "]"
            
            $resBytes = [System.Text.Encoding]::UTF8.GetBytes($json)
            $resHeaders = "HTTP/1.1 200 OK`r`nContent-Type: application/json; charset=utf-8`r`nContent-Length: $($resBytes.Length)`r`nConnection: close`r`n`r`n"
            $resHeaderBytes = [System.Text.Encoding]::UTF8.GetBytes($resHeaders)
            $stream.Write($resHeaderBytes, 0, $resHeaderBytes.Length)
            $stream.Write($resBytes, 0, $resBytes.Length)
            $client.Close()
            continue
        }
        
        # Static file routing
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }
        
        $cleanPath = $urlPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar).TrimStart([System.IO.Path]::DirectorySeparatorChar)
        $filePath = Join-Path $currentDir $cleanPath
        
        # Security check: Ensure file is inside the script directory (prevent directory traversal)
        $resolvedPath = [System.IO.Path]::GetFullPath($filePath)
        $parentFullPath = [System.IO.Path]::GetFullPath($currentDir)
        
        if ($resolvedPath.StartsWith($parentFullPath) -and (Test-Path $resolvedPath -PathType Leaf)) {
            $bytes = [System.IO.File]::ReadAllBytes($resolvedPath)
            
            # Determine Content-Type
            $ext = [System.IO.Path]::GetExtension($resolvedPath).ToLower()
            $contentType = "text/plain"
            if ($ext -eq ".html") { $contentType = "text/html; charset=utf-8" }
            elseif ($ext -eq ".css") { $contentType = "text/css; charset=utf-8" }
            elseif ($ext -eq ".js") { $contentType = "application/javascript; charset=utf-8" }
            elseif ($ext -eq ".png") { $contentType = "image/png" }
            elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $contentType = "image/jpeg" }
            elseif ($ext -eq ".svg") { $contentType = "image/svg+xml" }
            elseif ($ext -eq ".pdf") { $contentType = "application/pdf" }
            
            $resHeaders = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
            $resHeaderBytes = [System.Text.Encoding]::UTF8.GetBytes($resHeaders)
            $stream.Write($resHeaderBytes, 0, $resHeaderBytes.Length)
            $stream.Write($bytes, 0, $bytes.Length)
        } else {
            $resBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Fail Tidak Ditemui")
            $resHeaders = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($resBytes.Length)`r`nConnection: close`r`n`r`n"
            $resHeaderBytes = [System.Text.Encoding]::UTF8.GetBytes($resHeaders)
            $stream.Write($resHeaderBytes, 0, $resHeaderBytes.Length)
            $stream.Write($resBytes, 0, $resBytes.Length)
        }
        $client.Close()
    }
} catch {
    Write-Error "Ralat semasa menjalankan server: $_"
} finally {
    $listener.Stop()
}
