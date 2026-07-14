# PowerShell Script to extract text page-by-page from the PDF
# Resolves Page -> Contents references and decompresses text streams

$pdfPath = "c:\Users\USER\Desktop\Catalogue with Picture.pdf"

$source = @"
using System;
using System.IO;
using System.IO.Compression;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections.Generic;

public class PdfPageExtractor {
    public static void Extract(string pdfPath) {
        byte[] fileBytes = File.ReadAllBytes(pdfPath);
        string fileStr = Encoding.ASCII.GetString(fileBytes);
        
        // Dictionary to hold objects: Key = "ID Gen", Value = byte offset of obj
        Dictionary<string, int> objectOffsets = new Dictionary<string, int>();
        
        // Scan for object definitions: "X Y obj"
        Regex objRegex = new Regex(@"(\d+)\s+(\d+)\s+obj", RegexOptions.Compiled);
        MatchCollection matches = objRegex.Matches(fileStr);
        foreach (Match m in matches) {
            string objId = m.Groups[1].Value + " " + m.Groups[2].Value + " R";
            if (!objectOffsets.ContainsKey(objId)) {
                objectOffsets.Add(objId, m.Index);
            }
        }
        
        // Find all page objects (objects containing /Type /Page)
        List<string> pageObjectIds = new List<string>();
        foreach (var kvp in objectOffsets) {
            string objHeader = GetObjectHeader(fileBytes, kvp.Value);
            if (objHeader.Contains("/Type /Page") || objHeader.Contains("/Type/Page")) {
                pageObjectIds.Add(kvp.Key);
            }
        }
        
        Console.WriteLine("Found " + pageObjectIds.Count + " page objects.");
        
        // For each page, extract contents
        int pageNum = 1;
        foreach (string pageId in pageObjectIds) {
            int offset = objectOffsets[pageId];
            string dict = GetObjectHeader(fileBytes, offset);
            
            // Extract /Contents ID(s)
            List<string> contentIds = new List<string>();
            Match contentsMatch = Regex.Match(dict, @"/Contents\s*(\[.*?\]|[\d+\s+\d+\s+R]+)");
            if (contentsMatch.Success) {
                string contentsVal = contentsMatch.Groups[1].Value;
                if (contentsVal.StartsWith("[")) {
                    // Array of references
                    MatchCollection refMatches = Regex.Matches(contentsVal, @"\d+\s+\d+\s+R");
                    foreach (Match rm in refMatches) {
                        contentIds.Add(rm.Value);
                    }
                } else {
                    // Single reference
                    Match rm = Regex.Match(contentsVal, @"\d+\s+\d+\s+R");
                    if (rm.Success) {
                        contentIds.Add(rm.Value);
                    }
                }
            }
            
            // Extract text from content streams
            StringBuilder pageText = new StringBuilder();
            foreach (string contentId in contentIds) {
                if (objectOffsets.ContainsKey(contentId)) {
                    int contentOffset = objectOffsets[contentId];
                    byte[] streamBytes = ExtractStreamBytes(fileBytes, contentOffset);
                    if (streamBytes != null) {
                        string decoded = DecodeTextStream(streamBytes);
                        pageText.Append(decoded);
                    }
                }
            }
            
            string fullText = pageText.ToString();
            
            // Search for drug keywords
            string[] searchWords = new string[] { 
                "Metformin", "Glucoxit", "Diabetmin", 
                "Gliclazide", "Diamitex", "Remicron", 
                "Vildagliptin", "Galvus", 
                "Empagliflozin", "Jardiance", 
                "Amlodipine", "Hovasc", 
                "Bisoprolol", "Bisocor", 
                "Losartan", "Zylovaa", 
                "Aspirin", "Wincardia", 
                "Clopidogrel", "Vitraq", 
                "Enalapril", "Encardil",
                "Labetalol"
            };
            
            List<string> matchesFound = new List<string>();
            foreach (var word in searchWords) {
                if (fullText.IndexOf(word, StringComparison.OrdinalIgnoreCase) != -1) {
                    matchesFound.Add(word);
                }
            }
            
            if (matchesFound.Count > 0) {
                Console.WriteLine("Halaman " + pageNum + " (Obj ID: " + pageId + ") mengandungi kata kunci: " + string.Join(", ", matchesFound));
                // Print small snippet
                string snippetText = CleanPdfText(fullText);
                if (snippetText.Length > 150) snippetText = snippetText.Substring(0, 150) + "...";
                Console.WriteLine("  Teks: " + snippetText);
            }
            
            pageNum++;
        }
    }
    
    private static string GetObjectHeader(byte[] fileBytes, int offset) {
        // Find "stream" or "endobj"
        int end = offset;
        while (end < fileBytes.Length - 6) {
            if (fileBytes[end] == 's' && fileBytes[end+1] == 't' && fileBytes[end+2] == 'r' && fileBytes[end+3] == 'e' && fileBytes[end+4] == 'a' && fileBytes[end+5] == 'm') {
                break;
            }
            if (fileBytes[end] == 'e' && fileBytes[end+1] == 'n' && fileBytes[end+2] == 'd' && fileBytes[end+3] == 'o' && fileBytes[end+4] == 'b' && fileBytes[end+5] == 'j') {
                break;
            }
            end++;
        }
        return Encoding.ASCII.GetString(fileBytes, offset, end - offset);
    }
    
    private static byte[] ExtractStreamBytes(byte[] fileBytes, int objOffset) {
        string header = GetObjectHeader(fileBytes, objOffset);
        int streamWordIdx = header.IndexOf("stream");
        if (streamWordIdx == -1) return null;
        
        int startByte = objOffset + streamWordIdx + 6;
        if (fileBytes[startByte] == 13) startByte++; // \r
        if (fileBytes[startByte] == 10) startByte++; // \n
        
        // Find endstream
        int endstreamWordIdx = -1;
        for (int i = startByte; i < fileBytes.Length - 9; i++) {
            if (fileBytes[i] == 'e' && fileBytes[i+1] == 'n' && fileBytes[i+2] == 'd' && fileBytes[i+3] == 's' && fileBytes[i+4] == 't' && fileBytes[i+5] == 'r' && fileBytes[i+6] == 'e' && fileBytes[i+7] == 'a' && fileBytes[i+8] == 'm') {
                endstreamWordIdx = i;
                break;
            }
        }
        
        if (endstreamWordIdx == -1) return null;
        
        int endByte = endstreamWordIdx;
        if (fileBytes[endByte - 1] == 10) endByte--;
        if (fileBytes[endByte - 1] == 13) endByte--;
        
        int length = endByte - startByte;
        if (length <= 0) return null;
        
        byte[] streamData = new byte[length];
        Array.Copy(fileBytes, startByte, streamData, 0, length);
        
        // Check if stream is Flate compressed
        if (header.Contains("/FlateDecode")) {
            try {
                // Strip 2 zlib header bytes (0x78 0x9C, etc.)
                return Decompress(streamData, 2, length - 2);
            } catch {
                return null; // non-text/image streams will fail decompression
            }
        }
        return streamData;
    }
    
    private static byte[] Decompress(byte[] data, int offset, int length) {
        using (MemoryStream ms = new MemoryStream(data, offset, length)) {
            using (DeflateStream ds = new DeflateStream(ms, CompressionMode.Decompress)) {
                using (MemoryStream output = new MemoryStream()) {
                    ds.CopyTo(output);
                    return output.ToArray();
                }
            }
        }
    }
    
    private static string DecodeTextStream(byte[] decompressedBytes) {
        // PDF text stream operators: Tj, TJ, Td, etc.
        // We do a simple extraction of text inside parentheses (s)
        string text = Encoding.UTF8.GetString(decompressedBytes);
        StringBuilder sb = new StringBuilder();
        
        // Search for (TEXT) Tj or (TEXT) TJ
        // Tj operator is (string) Tj
        // TJ operator is [ (string) number (string) ] TJ
        int idx = 0;
        while (idx < text.Length) {
            int pStart = text.IndexOf('(', idx);
            if (pStart == -1) break;
            
            // Find matching closing parenthesis (handling escaped parentheses)
            int pEnd = -1;
            for (int i = pStart + 1; i < text.Length; i++) {
                if (text[i] == ')') {
                    // Check if escaped
                    int escapeCount = 0;
                    int j = i - 1;
                    while (j >= pStart && text[j] == '\\') {
                        escapeCount++;
                        j--;
                    }
                    if (escapeCount % 2 == 0) {
                        pEnd = i;
                        break;
                    }
                }
            }
            
            if (pEnd == -1) break;
            
            string chunk = text.Substring(pStart + 1, pEnd - pStart - 1);
            // Decode basic PDF octal escapes or standard escapes if any
            sb.Append(UnescapePdfString(chunk) + " ");
            idx = pEnd + 1;
        }
        
        return sb.ToString();
    }
    
    private static string UnescapePdfString(string s) {
        StringBuilder sb = new StringBuilder();
        int i = 0;
        while (i < s.Length) {
            if (s[i] == '\\' && i + 1 < s.Length) {
                char next = s[i + 1];
                if (next == 'n') { sb.Append('\n'); i += 2; }
                else if (next == 'r') { sb.Append('\r'); i += 2; }
                else if (next == 't') { sb.Append('\t'); i += 2; }
                else if (next == '(' || next == ')' || next == '\\') { sb.Append(next); i += 2; }
                else if (char.IsDigit(next) && i + 3 < s.Length && char.IsDigit(s[i+2]) && char.IsDigit(s[i+3])) {
                    // Octal escape
                    string octal = s.Substring(i + 1, 3);
                    try {
                        int code = Convert.ToInt32(octal, 8);
                        sb.Append((char)code);
                    } catch {
                        sb.Append(octal);
                    }
                    i += 4;
                } else {
                    sb.Append(next);
                    i += 2;
                }
            } else {
                sb.Append(s[i]);
                i++;
            }
        }
        return sb.ToString();
    }
    
    private static string CleanPdfText(string text) {
        // Replace multiple whitespaces and control characters
        return Regex.Replace(text, @"\s+", " ").Trim();
    }
}
"@

Add-Type -TypeDefinition $source
[PdfPageExtractor]::Extract($pdfPath)
