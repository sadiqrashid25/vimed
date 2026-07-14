// Configuration and Initial Dataset
const initialDrugs = [
    { id: 1, name: "Metformin 500mg", brand: "Glucoxit", generic: "Metformin Hydrochloride", dosage: "500mg", defaultPage: null, localImage: "images/custom_drug_1_0.png" },
    { id: 2, name: "Metformin XR 500mg", brand: "Diabetmin XR", generic: "Metformin Hydrochloride (Extended Release)", dosage: "500mg", defaultPage: null, localImage: "images/custom_drug_2_0.png" },
    { id: 3, name: "Gliclazide 80mg", brand: "Diamitex", generic: "Gliclazide", dosage: "80mg", defaultPage: null, localImage: "images/custom_drug_3_0.png" },
    { id: 4, name: "Gliclazide MR 30mg", brand: "Remicron MR", generic: "Gliclazide", dosage: "30mg", defaultPage: null, localImage: "images/custom_drug_4_0.png" },
    { id: 5, name: "Vildagliptin 50mg", brand: "Galvus", generic: "Vildagliptin", dosage: "50mg", defaultPage: null, localImage: "images/custom_drug_5_0.png" },
    { id: 6, name: "Empagliflozin 25mg", brand: "Jardiance", generic: "Empagliflozin", dosage: "25mg", defaultPage: null, localImage: "images/custom_drug_6_0.png" },
    { id: 7, name: "Amlodipine 5mg", brand: "Hovasc", generic: "Amlodipine Besylate", dosage: "5mg", defaultPage: null, localImage: "images/custom_drug_7_0.png" },
    { id: 8, name: "Amlodipine 10mg", brand: "Hovasc", generic: "Amlodipine Besylate", dosage: "10mg", defaultPage: null, localImage: "images/custom_drug_8_0.png" },
    { id: 9, name: "Bisoprolol 2.5mg", brand: "Bisocor", generic: "Bisoprolol Fumarate", dosage: "2.5mg", defaultPage: null, localImage: "images/custom_drug_9_0.png" },
    { id: 10, name: "Bisoprolol 5mg", brand: "Bisocor", generic: "Bisoprolol Fumarate", dosage: "5mg", defaultPage: null, localImage: "images/custom_drug_10_0.png" },
    { id: 11, name: "Losartan 50mg", brand: "Zylovaa", generic: "Losartan Potassium", dosage: "50mg", defaultPage: null, localImage: "images/custom_drug_11_0.png" },
    { id: 12, name: "Losartan 100mg", brand: "Zylovaa", generic: "Losartan Potassium", dosage: "100mg", defaultPage: null, localImage: "images/custom_drug_12_0.png" },
    { id: 13, name: "Aspirin 100mg + Glycine 45mg", brand: "Wincardia", generic: "Aspirin + Glycine", dosage: "100mg + 45mg", defaultPage: null, localImage: "images/custom_drug_13_0.jpeg" },
    { id: 15, name: "Enalapril 10mg", brand: "Encardil", generic: "Enalapril Maleate", dosage: "10mg", defaultPage: null, localImage: "images/custom_drug_15_0.png" },
    { id: 16, name: "Hydrochlorothiazide 25mg", brand: "Hydrochlorothiazide", generic: "Hydrochlorothiazide", dosage: "25mg", defaultPage: null, localImage: "images/custom_drug_16_0.png" },
    { id: 17, name: "Frusemide 40mg", brand: "Frusemide", generic: "Frusemide", dosage: "40mg", defaultPage: null, localImage: "images/custom_drug_17_0.png" },
    { id: 18, name: "Spironolactone 25mg", brand: "Spironolactone", generic: "Spironolactone", dosage: "25mg", defaultPage: null, localImage: "images/custom_drug_18_0.png" },
    { id: 19, name: "Labetalol 100mg", brand: "Labetalol", generic: "Labetalol Hydrochloride", dosage: "100mg", defaultPage: null, localImage: "images/custom_drug_19_0.png" },
    { id: 20, name: "Propranolol 40mg", brand: "Propranolol", generic: "Propranolol Hydrochloride", dosage: "40mg", defaultPage: null, localImage: "images/custom_drug_20_0.png" },
    { id: 21, name: "Atenolol 100mg", brand: "Atenolol", generic: "Atenolol", dosage: "100mg", defaultPage: null, localImage: "images/custom_drug_21_0.png" },
    { id: 22, name: "Metoprolol 100mg", brand: "Metoprolol", generic: "Metoprolol Tartrate", dosage: "100mg", defaultPage: null, localImage: "images/custom_drug_22_0.png" },
    { id: 23, name: "Felodipine 5mg", brand: "Felodipine", generic: "Felodipine", dosage: "5mg", defaultPage: null, localImage: "images/custom_drug_23_0.png" },
    { id: 24, name: "Felodipine 10mg", brand: "Felodipine", generic: "Felodipine", dosage: "10mg", defaultPage: null, localImage: "images/custom_drug_24_0.png" },
    { id: 25, name: "Nifedipine 10mg", brand: "Nifedipine", generic: "Nifedipine", dosage: "10mg", defaultPage: null, localImage: "images/custom_drug_25_0.png" },
    { id: 26, name: "Diltiazem 30mg", brand: "Diltiazem", generic: "Diltiazem Hydrochloride", dosage: "30mg", defaultPage: null, localImage: "images/custom_drug_26_0.png" },
    { id: 27, name: "Perindopril 4mg", brand: "Perindopril", generic: "Perindopril Erbumine", dosage: "4mg", defaultPage: null, localImage: "images/custom_drug_27_0.png" },
    { id: 28, name: "Captopril 25mg", brand: "Captopril", generic: "Captopril", dosage: "25mg", defaultPage: null, localImage: "images/custom_drug_28_0.png" },
    { id: 29, name: "Enalapril 5mg", brand: "Enalapril", generic: "Enalapril Maleate", dosage: "5mg", defaultPage: null, localImage: "images/custom_drug_29_0.jpeg" },
    { id: 30, name: "Enalapril 20mg", brand: "Enalapril", generic: "Enalapril Maleate", dosage: "20mg", defaultPage: null, localImage: "images/custom_drug_30_0.png" },
    { id: 31, name: "Perindopril 4mg + Indapamide 1.25mg", brand: "Perindopril + Indapamide", generic: "Perindopril + Indapamide", dosage: "4mg + 1.25mg", defaultPage: null, localImage: "images/custom_drug_31_0.png" },
    { id: 32, name: "Telmisartan 80mg", brand: "Telmisartan", generic: "Telmisartan", dosage: "80mg", defaultPage: null, localImage: "images/custom_drug_32_0.png" },
    { id: 33, name: "Valsartan 80mg", brand: "Valsartan", generic: "Valsartan", dosage: "80mg", defaultPage: null, localImage: "images/custom_drug_33_0.png" },
    { id: 34, name: "Prazosin 1mg", brand: "Prazosin", generic: "Prazosin Hydrochloride", dosage: "1mg", defaultPage: null, localImage: "images/custom_drug_34_0.png" },
    { id: 35, name: "Prazosin 2mg", brand: "Prazosin", generic: "Prazosin Hydrochloride", dosage: "2mg", defaultPage: null, localImage: "images/custom_drug_35_0.png" },
    { id: 36, name: "Prazosin 5mg", brand: "Prazosin", generic: "Prazosin Hydrochloride", dosage: "5mg", defaultPage: null, localImage: "images/custom_drug_36_0.png" },
    { id: 37, name: "Methyldopa 250mg", brand: "Methyldopa", generic: "Methyldopa", dosage: "250mg", defaultPage: null, localImage: "images/custom_drug_37_0.png" },
    { id: 38, name: "Acetylsalicylic Acid 300mg", brand: "Aspirin", generic: "Acetylsalicylic Acid", dosage: "300mg", defaultPage: null, localImage: "images/custom_drug_38_0.png" },
    { id: 39, name: "Ticlodipine 250mg", brand: "Ticlodipine", generic: "Ticlodipine Hydrochloride", dosage: "250mg", defaultPage: null, localImage: "images/custom_drug_39_0.png" },
    { id: 41, name: "Simvastatin 40mg", brand: "Simvastatin", generic: "Simvastatin", dosage: "40mg", defaultPage: null, localImage: "images/custom_drug_41_0.png" },
    { id: 42, name: "Atorvastatin 20mg", brand: "Atorvastatin", generic: "Atorvastatin Calcium", dosage: "20mg", defaultPage: null, localImage: "images/custom_drug_42_0.jpeg" },
    { id: 43, name: "Atorvastatin 40mg", brand: "Atorvastatin", generic: "Atorvastatin Calcium", dosage: "40mg", defaultPage: null, localImage: "images/custom_drug_43_0.jpeg" },
    { id: 44, name: "Gemfibrozil 300mg", brand: "Gemfibrozil", generic: "Gemfibrozil", dosage: "300mg", defaultPage: null, localImage: "images/custom_drug_44_0.png" },
    { id: 45, name: "Fenofibrate 145mg", brand: "Fenofibrate", generic: "Fenofibrate (Nanocrystallized)", dosage: "145mg", defaultPage: null, localImage: "images/custom_drug_45_0.png" },
    { id: 46, name: "Isosorbide Dinitrate 10mg", brand: "Isosorbide Dinitrate", generic: "Isosorbide Dinitrate", dosage: "10mg", defaultPage: null, localImage: "images/custom_drug_46_0.png" },
    { id: 47, name: "Trimetazidine 20mg", brand: "Trimetazidine", generic: "Trimetazidine Dihydrochloride", dosage: "20mg", defaultPage: null, localImage: "images/custom_drug_47_0.png" },
    { id: 48, name: "Ubat Tambahan A", brand: "Ubat Tambahan A", generic: "Bahan Aktif A", dosage: "Dos A", defaultPage: null, localImage: "images/custom_drug_48_0.png" },
    { id: 50, name: "Ubat Tambahan C", brand: "Ubat Tambahan C", generic: "Bahan Aktif C", dosage: "Dos C", defaultPage: null, localImage: "images/custom_drug_50_0.png" },
    { id: 1783437086419, name: "PERINDOPRIL 8MG", brand: "PERINACE", generic: "PERINDOPRIL ERBUMINE", dosage: "8MG", defaultPage: null, localImage: "images/custom_drug_1783437086419_0.png" },
    { id: 1783958167307, name: "perindopril/indapamine/amlodipine", brand: "TRIPLIXAM 10/2.5/10", generic: "AMLODIPINE", dosage: "10/2.5/10", defaultPage: null, localImage: "images/custom_drug_1783958167307_0.png" },
    { id: 1783958189881, name: "TELMISARTAN", brand: "MICARDIS PLUS", generic: "TELMISARTAN", dosage: "80MG", defaultPage: null, localImage: "images/custom_drug_1783958189881_0.png" },
    { id: 1783958234231, name: "AMLODIPINE 10/VALSARTAN 160MG", brand: "EXFORGE 10/160", generic: "AMLODIPINE 10/VALSARTAN 160MG", dosage: "AMLODIPINE 10/VALSARTAN 160MG", defaultPage: null, localImage: "images/custom_drug_1783958234231_0.png" }
];

let customDrugs = [];
try {
    const storedCustom = localStorage.getItem('custom_drugs');
    if (storedCustom) {
        customDrugs = JSON.parse(storedCustom);
    }
} catch (e) {
    console.error("Failed to load custom drugs:", e);
}

let deletedInitialDrugs = [];
try {
    const storedDeleted = localStorage.getItem('deleted_initial_drugs');
    if (storedDeleted) {
        deletedInitialDrugs = JSON.parse(storedDeleted);
    }
} catch (e) {
    console.error("Failed to load deleted initial drugs:", e);
}

let modifiedDrugs = {};
try {
    const storedModified = localStorage.getItem('modified_drugs');
    if (storedModified) {
        modifiedDrugs = JSON.parse(storedModified);
    }
} catch (e) {
    console.error("Failed to load modified drugs:", e);
}

let deletedLocalImages = [];
try {
    const storedDeletedLocal = localStorage.getItem('deleted_local_images');
    if (storedDeletedLocal) {
        deletedLocalImages = JSON.parse(storedDeletedLocal);
    }
} catch (e) {
    console.error("Failed to load deleted local images:", e);
}

let lastUpdatedTimes = {
    "1": "2026-07-14 00:00",
    "2": "2026-07-14 00:00",
    "3": "2026-07-14 00:00",
    "4": "2026-07-14 00:00",
    "5": "2026-07-14 00:00",
    "6": "2026-07-14 00:00",
    "7": "2026-07-14 00:00",
    "8": "2026-07-14 00:00",
    "9": "2026-07-14 00:11",
    "10": "2026-07-14 00:00",
    "11": "2026-07-14 00:00",
    "12": "2026-07-14 00:00",
    "13": "2026-07-14 00:00",
    "15": "2026-07-14 00:00",
    "16": "2026-07-14 00:00",
    "17": "2026-07-14 00:00",
    "18": "2026-07-14 00:00",
    "19": "2026-07-14 00:00",
    "20": "2026-07-14 00:00",
    "21": "2026-07-14 00:00",
    "22": "2026-07-14 00:00",
    "23": "2026-07-14 00:00",
    "24": "2026-07-14 00:00",
    "25": "2026-07-14 00:00",
    "26": "2026-07-14 00:00",
    "27": "2026-07-14 00:00",
    "28": "2026-07-14 00:00",
    "29": "2026-07-14 00:00",
    "30": "2026-07-14 00:00",
    "31": "2026-07-14 00:00",
    "32": "2026-07-14 00:00",
    "33": "2026-07-14 00:00",
    "34": "2026-07-14 00:00",
    "35": "2026-07-14 00:00",
    "36": "2026-07-14 00:00",
    "37": "2026-07-14 00:00",
    "38": "2026-07-14 00:00",
    "39": "2026-07-14 00:00",
    "41": "2026-07-14 00:00",
    "42": "2026-07-14 00:00",
    "43": "2026-07-14 00:00",
    "44": "2026-07-14 00:00",
    "45": "2026-07-14 00:00",
    "46": "2026-07-14 00:00",
    "47": "2026-07-14 00:00",
    "48": "2026-07-14 00:00",
    "50": "2026-07-14 00:00",
    "1783437086419": "2026-07-14 00:00",
    "1783958167307": "2026-07-14 00:00",
    "1783958189881": "2026-07-14 21:30",
    "1783958234231": "2026-07-14 21:30"
};
try {
    const storedTimes = localStorage.getItem('last_updated_times');
    if (storedTimes) {
        lastUpdatedTimes = JSON.parse(storedTimes);
    }
} catch (e) {
    console.error("Failed to load last updated times:", e);
}

function markDrugUpdated(drugId) {
    const now = new Date();
    const dateStr = now.getFullYear() + '-' + 
                    String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                    String(now.getDate()).padStart(2, '0') + ' ' + 
                    String(now.getHours()).padStart(2, '0') + ':' + 
                    String(now.getMinutes()).padStart(2, '0');
    lastUpdatedTimes[drugId] = dateStr;
    localStorage.setItem('last_updated_times', JSON.stringify(lastUpdatedTimes));
}

function getActiveDrugs() {
    const active = [...initialDrugs, ...customDrugs];
    return active.filter(d => !deletedInitialDrugs.includes(d.id)).map(d => {
        if (modifiedDrugs[d.id]) {
            return { ...d, ...modifiedDrugs[d.id] };
        }
        return d;
    });
}


let pdfjsAvailable = false;
try {
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsAvailable = true;
        // Do NOT set workerSrc to avoid cross-origin and sandbox limitations in file:// origin.
        // PDF.js will fall back to the built-in fake worker on the main thread automatically,
        // which runs perfectly locally and offline.
        console.log("PDF.js loaded. Using main-thread fake worker for local file compatibility.");
    } else {
        console.warn("PDF.js is not defined. Please check internet connection.");
    }
} catch (e) {
    console.error("Error checking PDF.js:", e);
}

// Application State
let db = null;
let pdfDoc = null;
let pdfBytes = null;
let drugMappings = {}; // format: { drugId: pageNumber }
let pdfOffset = 0; // global offset shift for PDF pages
let drugsWithCustomImages = new Set(); // Stores drug IDs that have custom images in IndexedDB
let activeFilter = 'all';
let currentSearchQuery = '';

// Auth State
let loggedInUser = null;
const ADMIN_USER = "fkkg";
const ADMIN_PASS = "123";

// Viewer State (Zoom & Pan)
let currentRenderTask = null;
let activeDrug = null;
let activePageNum = 1;
let zoomScale = 1.8; // default crisp rendering scale
let transformState = { x: 0, y: 0, scale: 1 };
let isDragging = false;
let startDragCoords = { x: 0, y: 0 };

// Database Configuration
const DB_NAME = 'DrugRefAppDB';
const DB_VERSION = 1;
const STORE_NAME = 'pdfStore';
const PDF_KEY = 'cataloguePdf';

// --- Auth UI Management & Server Logging ---

function updateAuthUI() {
    const guestArea = document.getElementById('guestUserArea');
    const adminArea = document.getElementById('adminUserArea');
    const adminUsernameVal = document.getElementById('adminUsernameVal');
    const logsSection = document.getElementById('logsSection');
    const toggleSettingsBtn = document.getElementById('toggleSettingsBtn');
    const loadPdfBtn = document.getElementById('loadPdfBtn');
    const clearPdfBtn = document.getElementById('clearPdfBtn');
    const exportAllImagesBtn = document.getElementById('exportAllImagesBtn');
    const uploadImageBtn = document.getElementById('uploadImageBtn');
    const deleteImageBtn = document.getElementById('deleteImageBtn');
    const emptyStateUploadBtn = document.getElementById('emptyStateUploadBtn');

    if (loggedInUser) {
        if (guestArea) guestArea.style.display = 'none';
        if (adminArea) adminArea.style.display = 'block';
        if (adminUsernameVal) adminUsernameVal.textContent = loggedInUser;
        if (logsSection) logsSection.style.display = 'flex';
        if (toggleSettingsBtn) toggleSettingsBtn.style.display = 'inline-flex';
        
        if (loadPdfBtn) loadPdfBtn.style.display = 'inline-flex';
        if (clearPdfBtn && pdfBytes) clearPdfBtn.style.display = 'inline-flex';
        if (exportAllImagesBtn && pdfDoc) exportAllImagesBtn.style.display = 'inline-flex';
        if (uploadImageBtn) uploadImageBtn.style.display = 'inline-flex';
        if (emptyStateUploadBtn) emptyStateUploadBtn.style.display = 'inline-flex';
        
        const welcomeBanner = document.getElementById('guestWelcomeBanner');
        if (welcomeBanner) welcomeBanner.style.display = 'none';
        
        fetchLogs();
    } else {
        if (guestArea) guestArea.style.display = 'block';
        if (adminArea) adminArea.style.display = 'none';
        if (logsSection) logsSection.style.display = 'none';
        if (toggleSettingsBtn) toggleSettingsBtn.style.display = 'none';
        
        if (loadPdfBtn) loadPdfBtn.style.display = 'none';
        if (clearPdfBtn) clearPdfBtn.style.display = 'none';
        if (exportAllImagesBtn) exportAllImagesBtn.style.display = 'none';
        if (uploadImageBtn) uploadImageBtn.style.display = 'none';
        if (deleteImageBtn) deleteImageBtn.style.display = 'none';
        if (emptyStateUploadBtn) emptyStateUploadBtn.style.display = 'none';
        
        const welcomeBanner = document.getElementById('guestWelcomeBanner');
        if (welcomeBanner) welcomeBanner.style.display = 'flex';
        
        closeSettingsDrawer();
    }
    renderDrugGrid();
}

async function logAction(action) {
    if (!loggedInUser) return;
    try {
        await fetch('/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: loggedInUser,
                action: action
            })
        });
    } catch (e) {
        console.error("Failed to save action log:", e);
    }
}

async function fetchLogs() {
    if (!loggedInUser) return;
    try {
        const res = await fetch('/logs');
        if (!res.ok) throw new Error("Failed to fetch logs");
        const logs = await res.json();
        
        const container = document.getElementById('logsContainer');
        if (!container) return;
        container.innerHTML = '';
        
        if (logs.length === 0) {
            container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 10px;">Tiada log aktiviti.</div>';
            return;
        }
        
        // Calculate stats
        const totalActions = logs.length;
        
        // Unique usernames (excluding guest, count Admin logins too)
        const usernames = logs
            .map(log => log.username.trim().toLowerCase())
            .filter(u => u !== '' && u !== 'guest');
        const uniqueUsers = new Set(usernames).size;
        
        // Unique IPs
        const ips = logs.map(log => log.ip.trim()).filter(ip => ip !== '');
        const uniqueIPs = new Set(ips).size;
        
        // Most recent activity (index 0 is the newest since serve.ps1 reverses them)
        const lastLog = logs[0];
        const lastActionTime = lastLog ? lastLog.timestamp : '';
        const lastActionUser = lastLog ? lastLog.username : '';
        const lastActionDesc = lastLog ? lastLog.action : '';
        
        // Render summary UI
        container.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 8px;">
                <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255,255,255,0.06); padding: 8px; border-radius: var(--radius-sm); text-align: center;">
                    <div style="font-size: 9px; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 2px;">Kekerapan Guna</div>
                    <div style="font-size: 16px; font-weight: 700; color: var(--primary-light); font-family: 'Outfit', sans-serif;">${totalActions} <span style="font-size: 10px; font-weight: 400; color: var(--text-muted);">kali</span></div>
                </div>
                <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255,255,255,0.06); padding: 8px; border-radius: var(--radius-sm); text-align: center;">
                    <div style="font-size: 9px; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 2px;">Pengguna Unik</div>
                    <div style="font-size: 16px; font-weight: 700; color: var(--success); font-family: 'Outfit', sans-serif;">${uniqueUsers} <span style="font-size: 10px; font-weight: 400; color: var(--text-muted);">orang</span></div>
                </div>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255,255,255,0.06); padding: 6px 10px; border-radius: var(--radius-sm); text-align: center; display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 8px;">
                <span style="font-size: 9px; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Peranti / IP Unik</span>
                <span style="font-size: 12px; font-weight: 700; color: var(--warning);">${uniqueIPs} <span style="font-size: 9px; font-weight: 400; color: var(--text-muted);">IP</span></span>
            </div>
            
            <div style="padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.06); text-align: left;">
                <div style="font-size: 8px; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 2px; display: flex; justify-content: space-between;">
                    <span>Aktiviti Terakhir</span>
                    <span>${lastActionTime}</span>
                </div>
                <div style="font-size: 10px; color: var(--text-primary); line-height: 1.3;">
                    <strong style="color: var(--primary-light);">${lastActionUser}</strong>: ${lastActionDesc}
                </div>
            </div>
        `;
    } catch (e) {
        console.error("Failed to fetch logs:", e);
    }
}

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    initIndexedDB();
    loadMappings();
    setupEventListeners();
    
    // Set all initial/custom drugs update timestamp to today if not already set
    const today = new Date();
    const dateStr = today.getFullYear() + '-' + 
                    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                    String(today.getDate()).padStart(2, '0') + ' 00:00';
                    
    let changed = false;
    getActiveDrugs().forEach(drug => {
        if (!lastUpdatedTimes[drug.id]) {
            lastUpdatedTimes[drug.id] = dateStr;
            changed = true;
        }
    });
    if (changed) {
        localStorage.setItem('last_updated_times', JSON.stringify(lastUpdatedTimes));
    }
    
    renderDrugGrid();
    
    // Auth Initialization
    loggedInUser = sessionStorage.getItem('logged_in_user');
    updateAuthUI();
    
    // Initialize Supabase if config exists
    initSupabase();
});

// Initialize IndexedDB to store the PDF file locally
function initIndexedDB() {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onupgradeneeded = (e) => {
        const dbInstance = e.target.result;
        if (!dbInstance.objectStoreNames.contains(STORE_NAME)) {
            dbInstance.createObjectStore(STORE_NAME);
        }
    };
    
    request.onsuccess = (e) => {
        db = e.target.result;
        checkStoredPDF();
        loadCustomImagesList();
    };
    
    request.onerror = (e) => {
        console.error("IndexedDB initialization error:", e.target.error);
        showToast("Gagal memulakan storan pangkalan data tempatan.", "error");
    };
}

// Check if PDF is already stored in the browser database
function checkStoredPDF() {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(PDF_KEY);
    
    request.onsuccess = (e) => {
        if (e.target.result) {
            pdfBytes = e.target.result;
            loadPDFDocument(pdfBytes);
        } else {
            autoFetchLocalPDF();
        }
    };
    
    request.onerror = () => {
        autoFetchLocalPDF();
    };
}

async function autoFetchLocalPDF() {
    updatePDFStatus(true, "loading");
    try {
        const response = await fetch('Catalogue with Picture.pdf');
        if (!response.ok) {
            throw new Error("Local PDF file not found");
        }
        const arrayBuffer = await response.arrayBuffer();
        pdfBytes = arrayBuffer;
        savePDFToDB(arrayBuffer);
        await loadPDFDocument(arrayBuffer);
        
        // Automatically run auto indexing on first load
        setTimeout(() => {
            runAutoIndexing();
        }, 1500);
    } catch (err) {
        console.log("Automatic local PDF load not available:", err);
        updatePDFStatus(false);
    }
}

// Save PDF bytes to IndexedDB
async function savePDFToDB(arrayBuffer) {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(arrayBuffer, PDF_KEY);
    
    request.onsuccess = async () => {
        showToast("Fail PDF disimpan dalam storan pelayar dengan selamat.", "success");
        await logAction("Memuat naik/menyimpan fail PDF ke storan");
    };
    
    request.onerror = (e) => {
        console.error("Error saving PDF:", e.target.error);
        showToast("Gagal menyimpan PDF ke storan pelayar.", "warning");
    };
}

// Delete PDF from IndexedDB
async function deletePDFFromDB() {
    if (!confirm("Adakah anda pasti mahu memadam fail PDF rujukan dari storan pelayar?")) return;
    
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(PDF_KEY);
    
    request.onsuccess = async () => {
        pdfDoc = null;
        pdfBytes = null;
        updatePDFStatus(false);
        showToast("Fail PDF rujukan telah dipadam.", "success");
        await logAction("Memadam fail PDF dari storan");
        renderDrugGrid();
    };
}

// Load mappings from LocalStorage, fallback to defaultPage values
function loadMappings() {
    const stored = localStorage.getItem('drug_page_mappings');
    if (stored) {
        try {
            drugMappings = JSON.parse(stored);
            // Migrate legacy numeric mappings to object mappings
            for (let id in drugMappings) {
                if (typeof drugMappings[id] === 'number' || drugMappings[id] === null) {
                    drugMappings[id] = { page: drugMappings[id], crop: 'all' };
                } else if (drugMappings[id] && typeof drugMappings[id] === 'object' && !drugMappings[id].crop) {
                    drugMappings[id].crop = 'all';
                }
            }
        } catch (e) {
            console.error("Error parsing stored mappings:", e);
            setDefaultMappings();
        }
    } else {
        setDefaultMappings();
    }
    
    // Load offset
    const storedOffset = localStorage.getItem('pdf_offset');
    if (storedOffset) {
        pdfOffset = parseInt(storedOffset) || 0;
    }
    document.getElementById('globalPdfOffset').value = pdfOffset;
}

function setDefaultMappings() {
    drugMappings = {};
    getActiveDrugs().forEach(drug => {
        drugMappings[drug.id] = { page: drug.defaultPage, crop: 'all' };
    });
}

function saveMappings() {
    localStorage.setItem('drug_page_mappings', JSON.stringify(drugMappings));
    showToast("Pemetaan halaman berjaya disimpan.", "success");
    renderDrugGrid();
    updateHeaderStats();
    pushSupabaseState();
}

// --- PDF Document Handling ---

async function loadPDFDocument(arrayBuffer) {
    updatePDFStatus(true, "loading");
    
    try {
        if (!pdfjsAvailable) {
            throw new Error("Perpustakaan PDF.js tidak tersedia. Sila pastikan anda disambung ke internet atau muatkan semula halaman.");
        }
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        pdfDoc = await loadingTask.promise;
        
        updatePDFStatus(true, "success");
        updateHeaderStats();
        
        // Enable auto index button now that PDF is loaded
        document.getElementById('autoIndexBtn').disabled = false;
        
        // Hide upload zone
        document.getElementById('uploadZone').style.display = 'none';
        
        showToast(`PDF berjaya dimuatkan: ${pdfDoc.numPages} halaman.`, "success");
        renderDrugGrid();
    } catch (error) {
        console.error("PDF loading error:", error);
        updatePDFStatus(false);
        showToast("Gagal memproses fail PDF. Pastikan fail tidak rosak.", "error");
    }
}

function updatePDFStatus(hasPdf, state = "error") {
    const indicator = document.getElementById('pdfStatusIndicator');
    const text = indicator.querySelector('.status-text');
    const desc = document.getElementById('pdfStatusDesc');
    const clearBtn = document.getElementById('clearPdfBtn');
    const statsPanel = document.getElementById('statsPanel');
    const uploadZone = document.getElementById('uploadZone');
    const exportBtn = document.getElementById('exportAllImagesBtn');
    
    if (hasPdf) {
        if (state === "loading") {
            indicator.className = "status-indicator warning";
            text.textContent = "Sedang Membaca PDF...";
            desc.textContent = "Memproses halaman dan gambar...";
            clearBtn.style.display = 'none';
            if (exportBtn) exportBtn.style.display = 'none';
        } else {
            indicator.className = "status-indicator success";
            text.textContent = "PDF Rujukan Sedia";
            desc.textContent = "Visual dari 'Catalogue with Picture.pdf' aktif.";
            clearBtn.style.display = loggedInUser ? 'inline-flex' : 'none';
            statsPanel.style.display = 'grid';
            uploadZone.style.display = 'none';
            if (exportBtn) exportBtn.style.display = loggedInUser ? 'inline-flex' : 'none';
        }
    } else {
        indicator.className = "status-indicator error";
        text.textContent = "PDF Belum Dimuat Naik";
        desc.textContent = "Sila muat naik 'Catalogue with Picture.pdf' untuk visual.";
        clearBtn.style.display = 'none';
        statsPanel.style.display = 'none';
        uploadZone.style.display = loggedInUser ? 'block' : 'none';
        document.getElementById('autoIndexBtn').disabled = true;
        if (exportBtn) exportBtn.style.display = 'none';
    }
}

function updateHeaderStats() {
    const totalPages = pdfDoc ? pdfDoc.numPages : 0;
    document.getElementById('totalPagesVal').textContent = totalPages;
    
    const totalMapped = getActiveDrugs().filter(drug => {
        const mapping = drugMappings[drug.id];
        const pg = mapping ? mapping.page : null;
        const hasPdf = pdfDoc && pg && pg > 0 && pg <= pdfDoc.numPages;
        const hasImg = drugsWithCustomImages.has(drug.id);
        const hasLocalImg = !!drug.localImage;
        return hasPdf || hasImg || hasLocalImg;
    }).length;
    
    document.getElementById('mappedDrugsVal').textContent = `${totalMapped}/${getActiveDrugs().length}`;
}

// --- UI Rendering ---

function renderDrugGrid() {
    const grid = document.getElementById('drugGrid');
    grid.innerHTML = '';
    
    const query = currentSearchQuery.trim().toUpperCase();
    
    let filtered = getActiveDrugs().filter(drug => {
        const mapping = drugMappings[drug.id] || { page: null, crop: 'all' };
        const page = mapping.page;
        const hasCustomImg = drugsWithCustomImages.has(drug.id);
        const hasPdfPage = pdfDoc && page && page > 0 && page <= pdfDoc.numPages;
        const hasLocalImg = !!drug.localImage && !deletedLocalImages.includes(drug.id);
        const isMapped = hasCustomImg || hasPdfPage || hasLocalImg;
        
        // Tab filter match
        if (activeFilter === 'mapped') {
            if (!isMapped) return false;
        } else if (activeFilter === 'unmapped') {
            if (isMapped) return false;
        }
        
        // Text search match (Brand, Name, Generic, dosage, or page number)
        if (query.length > 0) {
            const textMatch = drug.name.toUpperCase().includes(query) ||
                              drug.brand.toUpperCase().includes(query) ||
                              drug.generic.toUpperCase().includes(query) ||
                              drug.dosage.toUpperCase().includes(query) ||
                              (page && String(page).includes(query));
            if (!textMatch) return false;
        }
        
        return true;
    });
    
    // Sort alphabetically by brand name (A-Z)
    filtered.sort((a, b) => a.brand.localeCompare(b.brand, 'ms', { sensitivity: 'base' }));
    
    document.getElementById('drugCountBadge').textContent = filtered.length;
    
    if (filtered.length === 0) {
        document.getElementById('noResultsState').style.display = 'block';
        return;
    }
    
    document.getElementById('noResultsState').style.display = 'none';
    
    filtered.forEach(drug => {
        const mapping = drugMappings[drug.id] || { page: null, crop: 'all' };
        const page = mapping.page;
        const hasCustomImg = drugsWithCustomImages.has(drug.id);
        const hasPdfPage = pdfDoc && page && page > 0 && page <= pdfDoc.numPages;
        const hasLocalImg = !!drug.localImage && !deletedLocalImages.includes(drug.id);
        const isMapped = hasCustomImg || hasPdfPage || hasLocalImg;
        
        const showControls = !!loggedInUser;
        
        const card = document.createElement('div');
        card.className = `drug-card ${isMapped ? 'mapped' : 'unmapped'}`;
        
        let controlsHtml = '';
        if (showControls) {
            controlsHtml = `
                <button class="card-edit-btn" title="Edit Ubat" style="position: absolute; top: 12px; right: 44px; background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); color: var(--primary); border-radius: var(--radius-sm); width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: var(--transition-fast); z-index: 5;">
                    <i class="fa-solid fa-pen-to-square" style="font-size: 11px;"></i>
                </button>
                <button class="card-delete-btn" title="Padam Ubat" style="position: absolute; top: 12px; right: 12px; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: var(--error); border-radius: var(--radius-sm); width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: var(--transition-fast); z-index: 5;">
                    <i class="fa-solid fa-trash-can" style="font-size: 11px;"></i>
                </button>
            `;
        }

        const lastUpdated = lastUpdatedTimes[drug.id];
        const lastUpdatedHtml = lastUpdated ? `
            <div class="card-last-update" style="font-size: 9px; color: var(--text-muted); margin-top: 6px; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 4px; display: flex; align-items: center; gap: 4px; justify-content: flex-end;">
                <i class="fa-regular fa-clock" style="font-size: 8px;"></i> Kemaskini: ${lastUpdated}
            </div>
        ` : '';

        card.innerHTML = `
            ${controlsHtml}
            <div class="card-top">
                <span class="card-dosage">${drug.dosage}</span>
                <h3 class="card-title">${drug.name}</h3>
                <p class="card-generic" style="font-style: normal; font-weight: 600; color: var(--primary-light); margin-top: 4px;">Jenama: ${drug.brand}</p>
            </div>
            <div class="card-bottom">
                <span class="card-page">
                    <i class="fa-regular fa-file-image"></i> 
                    ${hasCustomImg ? 'Foto Gambar JPG/PNG' : (hasLocalImg ? 'Visual Tempatan (Word)' : (hasPdfPage ? `Halaman ${page}` : 'Tiada Halaman'))}
                </span>
                <span class="card-action-hint">
                    ${isMapped ? 'Lihat Visual <i class="fa-solid fa-chevron-right"></i>' : 'Tambah Imej/Peta <i class="fa-solid fa-plus"></i>'}
                </span>
            </div>
            ${lastUpdatedHtml}
        `;
        
        if (showControls) {
            card.querySelector('.card-delete-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteDrug(drug);
            });
            card.querySelector('.card-edit-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openEditDrugModal(drug);
            });
        }
        
        card.addEventListener('click', () => handleDrugCardClick(drug));
        grid.appendChild(card);
    });
}

function handleDrugCardClick(drug) {
    const pageNum = drugMappings[drug.id];
    openDrugModal(drug, pageNum);
}

// --- Modal PDF Renderer & Interactivity ---

function openDrugModal(drug, pageNum) {
    activeDrug = drug;
    const mapping = drugMappings[drug.id] || { page: 1, crop: 'all' };
    activePageNum = mapping.page ? parseInt(mapping.page) : 1;
    
    document.getElementById('modalTitle').textContent = drug.name;
    document.getElementById('modalGenericName').textContent = `Jenama: ${drug.brand}`;
    document.getElementById('modalDrugDosage').textContent = drug.dosage;
    document.getElementById('totalPageCountVal').textContent = pdfDoc ? pdfDoc.numPages : 1;
    
    // Show modal delete button only if logged in and drug is custom
    const isCustom = customDrugs.some(d => d.id === drug.id);
    const modalDeleteBtn = document.getElementById('modalDeleteDrugBtn');
    if (modalDeleteBtn) {
        modalDeleteBtn.style.display = loggedInUser ? 'inline-flex' : 'none';
    }
    const modalEditBtn = document.getElementById('modalEditDrugBtn');
    if (modalEditBtn) {
        modalEditBtn.style.display = loggedInUser ? 'inline-flex' : 'none';
    }
    
    // Show modal
    document.getElementById('drugModal').classList.add('open');
    document.body.style.overflow = 'hidden'; // prevent scrolling body
    
    // Reset Zoom / Pan transform state
    resetViewportTransform();
    
    // Show last updated timestamp in modal footer
    const lastUpdated = lastUpdatedTimes[drug.id];
    const lastUpdatedEl = document.getElementById('modalLastUpdatedInfo');
    if (lastUpdatedEl) {
        if (lastUpdated) {
            lastUpdatedEl.innerHTML = `<i class="fa-regular fa-clock" style="font-size: 11px;"></i> Kemaskini: ${lastUpdated}`;
            lastUpdatedEl.style.display = 'flex';
        } else {
            lastUpdatedEl.innerHTML = '';
            lastUpdatedEl.style.display = 'none';
        }
    }
    
    // Render the page or image content
    renderDrugContent();
}

function closeModal() {
    const modal = document.getElementById('drugModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
    activeDrug = null;
    
    // Clear displays safely
    const canvas = document.getElementById('pdfCanvas');
    if (canvas) canvas.style.display = 'none';
    
    const img = document.getElementById('drugImage');
    if (img) img.style.display = 'none';
    
    const emptyState = document.getElementById('viewerEmptyState');
    if (emptyState) emptyState.style.display = 'none';
    
    // Cancel any ongoing render task to prevent performance issues
    if (currentRenderTask) {
        currentRenderTask.cancel();
        currentRenderTask = null;
    }
}

async function renderPDFPage(pageNum) {
    if (!pdfDoc) return;
    
    const loader = document.getElementById('canvasLoader');
    loader.style.display = 'flex';
    
    // Calculate shifted page number
    const actualPdfPage = pageNum + pdfOffset;
    const targetPage = Math.max(1, Math.min(actualPdfPage, pdfDoc.numPages));
    
    // Update display page number
    if (pdfOffset !== 0) {
        document.getElementById('currentPageVal').innerHTML = `${pageNum} <span style="font-size: 11px; color: var(--text-muted); font-weight: normal;">(Fail PDF: hal. ${targetPage})</span>`;
    } else {
        document.getElementById('currentPageVal').textContent = pageNum;
    }
    
    try {
        if (currentRenderTask) {
            currentRenderTask.cancel();
        }
        
        const page = await pdfDoc.getPage(targetPage);
        const canvas = document.getElementById('pdfCanvas');
        const context = canvas.getContext('2d');
        
        // Calculate viewport at default crisp rendering scale
        const viewport = page.getViewport({ scale: zoomScale });
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        
        currentRenderTask = page.render(renderContext);
        await currentRenderTask.promise;
        currentRenderTask = null;
        
        loader.style.display = 'none';
    } catch (err) {
        if (err.name === 'RenderingCancelledException') {
            console.log('Rendering task was cancelled for new page.');
        } else {
            console.error('Error rendering PDF page:', err);
            loader.style.display = 'none';
            showToast('Gagal merender halaman PDF.', 'error');
        }
    }
}

// --- Zoom and Pan System ---

function resetViewportTransform() {
    transformState = { x: 0, y: 0, scale: 1.0 };
    applyTransform();
    updateZoomLabel();
}

function applyTransform() {
    const wrapper = document.getElementById('canvasWrapper');
    wrapper.style.transform = `translate(${transformState.x}px, ${transformState.y}px) scale(${transformState.scale})`;
}

function updateZoomLabel() {
    const pct = Math.round(transformState.scale * 100);
    document.getElementById('zoomLevelVal').textContent = `${pct}%`;
}

function handleZoom(amount) {
    const oldScale = transformState.scale;
    let newScale = oldScale + amount;
    
    // Keep zoom within limits (50% to 400%)
    newScale = Math.max(0.5, Math.min(newScale, 4.0));
    
    transformState.scale = newScale;
    
    // Adjust translations so we zoom roughly to the center of the viewport
    transformState.x = transformState.x * (newScale / oldScale);
    transformState.y = transformState.y * (newScale / oldScale);
    
    applyTransform();
    updateZoomLabel();
}

function setupViewerInteractions() {
    const container = document.getElementById('viewerContainer');
    
    // Prevent default browser dragging of images/canvas so custom panning works on IMG elements
    container.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
    
    // Drag & Drop Image Files directly to upload for the active drug
    container.addEventListener('dragover', (e) => {
        if (!activeDrug) return;
        e.preventDefault();
        if (loggedInUser) {
            container.classList.add('drag-active');
            const dragOverlay = document.getElementById('dragUploadOverlay');
            if (dragOverlay) dragOverlay.style.display = 'flex';
        }
    });
    
    container.addEventListener('dragleave', () => {
        container.classList.remove('drag-active');
        const dragOverlay = document.getElementById('dragUploadOverlay');
        if (dragOverlay) dragOverlay.style.display = 'none';
    });
    
    container.addEventListener('drop', (e) => {
        if (!activeDrug) return;
        e.preventDefault();
        container.classList.remove('drag-active');
        const dragOverlay = document.getElementById('dragUploadOverlay');
        if (dragOverlay) dragOverlay.style.display = 'none';
        
        if (!loggedInUser) {
            showToast("Sila log masuk sebagai Admin untuk memuat naik gambar.", "warning");
            return;
        }
        
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files.length > 0) {
            const file = dt.files[0];
            handleUploadedImage(file, activeDrug.id);
        }
    });
    
    // MOUSE DRAG TO PAN
    container.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return; // Only left click
        isDragging = true;
        container.style.cursor = 'grabbing';
        startDragCoords = { x: e.clientX - transformState.x, y: e.clientY - transformState.y };
        e.preventDefault();
    });
    
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        transformState.x = e.clientX - startDragCoords.x;
        transformState.y = e.clientY - startDragCoords.y;
        applyTransform();
    });
    
    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            container.style.cursor = 'grab';
        }
    });
    
    // WHEEL SCROLL TO ZOOM
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomDelta = e.deltaY < 0 ? 0.15 : -0.15;
        
        // Custom zoom logic centering on the mouse pointer
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        
        const oldScale = transformState.scale;
        let newScale = oldScale + zoomDelta;
        newScale = Math.max(0.5, Math.min(newScale, 4.0));
        
        if (newScale !== oldScale) {
            // Adjust coordinates to zoom towards mouse position
            transformState.x = mouseX - (mouseX - transformState.x) * (newScale / oldScale);
            transformState.y = mouseY - (mouseY - transformState.y) * (newScale / oldScale);
            transformState.scale = newScale;
            applyTransform();
            updateZoomLabel();
        }
    }, { passive: false });
    
    // TOUCH GESTURES SUPPORT (Mobile)
    let touchStartDist = 0;
    let touchStartScale = 1;
    
    container.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            startDragCoords = { 
                x: e.touches[0].clientX - transformState.x, 
                y: e.touches[0].clientY - transformState.y 
            };
        } else if (e.touches.length === 2) {
            isDragging = false;
            // Pinch-to-zoom init
            touchStartDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            touchStartScale = transformState.scale;
        }
    });
    
    container.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length === 1) {
            transformState.x = e.touches[0].clientX - startDragCoords.x;
            transformState.y = e.touches[0].clientY - startDragCoords.y;
            applyTransform();
            e.preventDefault();
        } else if (e.touches.length === 2) {
            const dist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            
            let factor = dist / touchStartDist;
            let newScale = touchStartScale * factor;
            newScale = Math.max(0.5, Math.min(newScale, 4.0));
            
            transformState.scale = newScale;
            applyTransform();
            updateZoomLabel();
            e.preventDefault();
        }
    });
    
    container.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// --- Settings Drawer & Mapping Management ---

function openSettingsDrawer() {
    document.getElementById('settingsDrawer').classList.add('open');
    renderMappingList();
}

function closeSettingsDrawer() {
    document.getElementById('settingsDrawer').classList.remove('open');
}

function renderMappingList() {
    const listContainer = document.getElementById('mappingList');
    listContainer.innerHTML = '';
    
    getActiveDrugs().forEach(drug => {
        const mapping = drugMappings[drug.id] || { page: '', crop: 'all' };
        const currentPg = mapping.page || '';
        
        const item = document.createElement('div');
        item.className = 'mapping-item';
        item.innerHTML = `
            <div class="mapping-item-info">
                <div class="mapping-item-name">${drug.brand}</div>
                <div class="mapping-item-generic">${drug.name} (${drug.dosage})</div>
            </div>
            <div class="mapping-input-wrapper" style="display: flex; gap: 8px; align-items: center;">
                <div style="display: flex; align-items: center; gap: 4px;">
                    <label for="map_input_${drug.id}">Hal.</label>
                    <input type="number" 
                           id="map_input_${drug.id}" 
                           class="mapping-page-input" 
                           min="1" 
                           max="${pdfDoc ? pdfDoc.numPages : 999}" 
                           value="${currentPg}"
                           placeholder="—"
                           style="width: 50px;">
                </div>
            </div>
        `;
        
        listContainer.appendChild(item);
    });
}

async function saveDrawerMappings() {
    let hasInvalid = false;
    let anyChanges = false;
    const newMappings = { ...drugMappings };
    
    // Read and save page offset
    const offsetInput = document.getElementById('globalPdfOffset');
    if (offsetInput) {
        pdfOffset = parseInt(offsetInput.value) || 0;
        localStorage.setItem('pdf_offset', pdfOffset);
        await logAction("Mengemas kini offset halaman kepada " + pdfOffset);
    }
    
    getActiveDrugs().forEach(drug => {
        const input = document.getElementById(`map_input_${drug.id}`);
        if (input) {
            const val = input.value.trim();
            const pg = val === '' ? null : parseInt(val);
            const oldPg = drugMappings[drug.id] ? drugMappings[drug.id].page : null;
            
            if (val === '') {
                newMappings[drug.id] = { page: null, crop: 'all' };
            } else {
                if (pdfDoc && (pg <= 0 || pg > pdfDoc.numPages)) {
                    hasInvalid = true;
                } else {
                    newMappings[drug.id] = { page: pg, crop: 'all' };
                }
            }
            if (pg !== oldPg) {
                markDrugUpdated(drug.id);
            }
            anyChanges = true;
        }
    });
    
    if (hasInvalid) {
        showToast(`Sila masukkan nombor halaman yang sah (1 - ${pdfDoc.numPages}).`, "error");
        return;
    }
    
    drugMappings = newMappings;
    saveMappings();
    await logAction("Mengemas kini pemetaan ubat");
    closeSettingsDrawer();
}

// Smart Automated Indexing (extract text content from PDF to map page numbers)
async function runAutoIndexing() {
    if (!pdfDoc) return;
    
    const autoBtn = document.getElementById('autoIndexBtn');
    const prevText = autoBtn.innerHTML;
    autoBtn.disabled = true;
    autoBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sedang Mengimbas...';
    
    showToast("Mengimbas kandungan teks fail PDF... Sila tunggu.", "info");
    
    try {
        let matchedCount = 0;
        const scanMappings = { ...drugMappings };
        
        // Scan each page
        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            const page = await pdfDoc.getPage(pageNum);
            const textContent = await page.getTextContent();
            
            // Join all text items into one string
            const pageText = textContent.items.map(item => item.str).join(" ").toUpperCase();
            
            // Search for drugs brand/name matching terms
            getActiveDrugs().forEach(drug => {
                const brandKeyword = drug.brand.split(/[+/ \s]/)[0].toUpperCase(); // take first word (e.g. Hovasc, Glucoxit)
                const nameKeyword = drug.name.split(" ")[0].toUpperCase(); // e.g. Metformin
                
                // If page text contains brand keyword and dosage/generic term, map it
                const containsBrand = brandKeyword.length > 2 && pageText.includes(brandKeyword);
                const containsGeneric = nameKeyword.length > 2 && pageText.includes(nameKeyword);
                
                if (containsBrand || containsGeneric) {
                    // We map to first matched page unless already mapped
                    if (!scanMappings[drug.id] || scanMappings[drug.id] === drug.defaultPage) {
                        scanMappings[drug.id] = pageNum;
                        matchedCount++;
                    }
                }
            });
        }
        
        drugMappings = scanMappings;
        saveMappings();
        showToast(`Imbasan selesai! ${matchedCount} pemetaan dikemas kini secara automatik.`, "success");
        renderMappingList();
    } catch (err) {
        console.error("Auto indexing error:", err);
        showToast("Imbasan teks gagal. PDF mungkin berbentuk imej sahaja.", "error");
    } finally {
        autoBtn.innerHTML = prevText;
        autoBtn.disabled = false;
    }
}

// --- Event Listeners and Sub-systems ---

function setupEventListeners() {
    // Prevent default drag behaviors globally to avoid browser navigating to the PDF
    ['dragover', 'drop'].forEach(eventName => {
        window.addEventListener(eventName, (e) => {
            e.preventDefault();
        }, false);
    });

    // --- File Input & Drag/Drop Events ---
    const fileInput = document.getElementById('pdfFileInput');
    const loadPdfBtn = document.getElementById('loadPdfBtn');
    const dropArea = document.getElementById('dropArea');
    const clearPdfBtn = document.getElementById('clearPdfBtn');
    
    loadPdfBtn.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) handleSelectedFile(file);
    });
    
    // Drag and drop logic
    dropArea.addEventListener('click', () => fileInput.click());
    
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropArea.classList.add('dragover');
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropArea.classList.remove('dragover');
        }, false);
    });
    
    dropArea.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const file = dt.files[0];
        if (file) {
            const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith('.pdf');
            if (isPdf) {
                handleSelectedFile(file);
            } else {
                showToast("Sila drop fail PDF sahaja.", "error");
            }
        }
    });
    clearPdfBtn.addEventListener('click', deletePDFFromDB);
    
    const exportAllImagesBtn = document.getElementById('exportAllImagesBtn');
    if (exportAllImagesBtn) {
        exportAllImagesBtn.addEventListener('click', exportAllPdfImages);
    }
    
    // --- Search & Filter Events ---
    const searchBar = document.getElementById('searchBar');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    
    searchBar.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value;
        if (currentSearchQuery.length > 0) {
            clearSearchBtn.style.display = 'block';
        } else {
            clearSearchBtn.style.display = 'none';
        }
        renderDrugGrid();
    });
    
    clearSearchBtn.addEventListener('click', () => {
        searchBar.value = '';
        currentSearchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderDrugGrid();
    });
    
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = tab.getAttribute('data-filter');
            renderDrugGrid();
        });
    });
    
    // --- Modal Events & Zoom Controls ---
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    document.getElementById('closeModalFooterBtn').addEventListener('click', closeModal);
    document.getElementById('modalBackdrop').addEventListener('click', closeModal);
    document.getElementById('modalPrintBtn').addEventListener('click', printActiveDrugImage);
    document.getElementById('printAllCatalogBtn').addEventListener('click', printAllCatalog);
    
    document.getElementById('zoomInBtn').addEventListener('click', () => handleZoom(0.2));
    document.getElementById('zoomOutBtn').addEventListener('click', () => handleZoom(-0.2));
    document.getElementById('zoomResetBtn').addEventListener('click', resetViewportTransform);
    document.getElementById('zoomFitBtn').addEventListener('click', () => {
        const container = document.getElementById('viewerContainer');
        const canvas = document.getElementById('pdfCanvas');
        const img = document.getElementById('drugImage');
        
        let width, height;
        if (img && img.style.display !== 'none') {
            width = img.naturalWidth || img.clientWidth || 300;
            height = img.naturalHeight || img.clientHeight || 300;
        } else {
            width = canvas ? canvas.width : 300;
            height = canvas ? canvas.height : 300;
        }
        
        const scaleX = (container.clientWidth - 40) / width;
        const scaleY = (container.clientHeight - 40) / height;
        const scale = Math.min(scaleX, scaleY, 1.5);
        
        transformState = { x: 0, y: 0, scale: scale };
        applyTransform();
        updateZoomLabel();
    });
    
    // Previous / Next Page Nav in Modal
    document.getElementById('prevPageBtn').addEventListener('click', () => {
        if (activePageNum > 1) {
            activePageNum--;
            renderPDFPage(activePageNum);
        } else {
            showToast("Ini adalah halaman pertama.", "info");
        }
    });
    
    document.getElementById('nextPageBtn').addEventListener('click', () => {
        if (pdfDoc && activePageNum < pdfDoc.numPages) {
            activePageNum++;
            renderPDFPage(activePageNum);
        } else {
            showToast("Ini adalah halaman terakhir.", "info");
        }
    });
    
    // Setup Canvas Dragging & Wheel Zooming
    setupViewerInteractions();
    
    // --- Drawer / Settings Panel Events ---
    document.getElementById('toggleSettingsBtn').addEventListener('click', openSettingsDrawer);
    document.getElementById('closeDrawerBtn').addEventListener('click', closeSettingsDrawer);
    document.getElementById('saveMappingBtn').addEventListener('click', saveDrawerMappings);
    document.getElementById('resetMappingBtn').addEventListener('click', async () => {
        if (confirm("Set semula semua pemetaan halaman ubat ke tetapan asal?")) {
            setDefaultMappings();
            saveMappings();
            renderMappingList();
            await logAction("Mengeset semula semua pemetaan ubat ke tetapan asal");
        }
    });
    document.getElementById('autoIndexBtn').addEventListener('click', runAutoIndexing);
    
    // --- Backup & Sync Events ---
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('importDataBtn').addEventListener('click', () => {
        document.getElementById('importDataFileInput').click();
    });
    document.getElementById('importDataFileInput').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) handleImportDataFile(file);
    });

    // --- Supabase Config Events ---
    document.getElementById('saveSupabaseConfigBtn').addEventListener('click', saveSupabaseConfig);
    
    // --- Image Upload & Delete Events ---
    const imageFileInput = document.getElementById('imageFileInput');
    const uploadImageBtn = document.getElementById('uploadImageBtn');
    const emptyStateUploadBtn = document.getElementById('emptyStateUploadBtn');
    const deleteImageBtn = document.getElementById('deleteImageBtn');
    
    const triggerImageUpload = () => {
        if (!activeDrug) return;
        imageFileInput.click();
    };
    
    uploadImageBtn.addEventListener('click', triggerImageUpload);
    emptyStateUploadBtn.addEventListener('click', triggerImageUpload);
    
    imageFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && activeDrug) {
            handleUploadedImage(file, activeDrug.id);
        }
    });
    
    deleteImageBtn.addEventListener('click', () => {
        if (!activeDrug) return;
        
        const hasCustom = drugsWithCustomImages.has(activeDrug.id);
        const hasLocal = !!activeDrug.localImage && !deletedLocalImages.includes(activeDrug.id);
        
        if (hasCustom) {
            deleteCustomImage(activeDrug.id);
        } else if (hasLocal) {
            if (confirm("Adakah anda pasti mahu memadam/menyembunyikan gambar visual bagi ubat ini?")) {
                deletedLocalImages.push(activeDrug.id);
                localStorage.setItem('deleted_local_images', JSON.stringify(deletedLocalImages));
                showToast("Gambar visual telah dipadam.", "success");
                renderDrugGrid();
                closeModal();
                updateHeaderStats();
            }
        }
    });

    // --- Auth & Login Events ---
    document.getElementById('openLoginModalBtn').addEventListener('click', () => {
        document.getElementById('loginModal').classList.add('open');
    });
    
    document.getElementById('closeLoginModalBtn').addEventListener('click', () => {
        document.getElementById('loginModal').classList.remove('open');
    });
    
    document.getElementById('loginModalBackdrop').addEventListener('click', () => {
        document.getElementById('loginModal').classList.remove('open');
    });
    
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const user = document.getElementById('usernameInput').value.trim();
        const pass = document.getElementById('passwordInput').value;
        
        if (user.toLowerCase() === ADMIN_USER && pass === ADMIN_PASS) {
            loggedInUser = user;
            sessionStorage.setItem('logged_in_user', loggedInUser);
            document.getElementById('loginModal').classList.remove('open');
            document.getElementById('usernameInput').value = '';
            document.getElementById('passwordInput').value = '';
            showToast("Log masuk berjaya!", "success");
            updateAuthUI();
            await logAction("Masuk ke sistem");
        } else {
            showToast("Username atau kata laluan salah!", "error");
        }
    });
    
    document.getElementById('logoutBtn').addEventListener('click', async () => {
        await logAction("Keluar dari sistem");
        loggedInUser = null;
        sessionStorage.removeItem('logged_in_user');
        showToast("Log keluar berjaya.", "info");
        updateAuthUI();
    });

    // --- Add New Drug Events ---
    const openAddDrugModalBtn = document.getElementById('openAddDrugModalBtn');
    const closeAddDrugModalBtn = document.getElementById('closeAddDrugModalBtn');
    const addDrugModalBackdrop = document.getElementById('addDrugModalBackdrop');
    const addDrugForm = document.getElementById('addDrugForm');
    
    if (openAddDrugModalBtn) {
        openAddDrugModalBtn.addEventListener('click', () => {
            document.getElementById('addDrugModal').classList.add('open');
        });
    }
    
    if (closeAddDrugModalBtn) {
        closeAddDrugModalBtn.addEventListener('click', () => {
            document.getElementById('addDrugModal').classList.remove('open');
        });
    }
    
    if (addDrugModalBackdrop) {
        addDrugModalBackdrop.addEventListener('click', () => {
            document.getElementById('addDrugModal').classList.remove('open');
        });
    }
    
    if (addDrugForm) {
        addDrugForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const brand = document.getElementById('drugBrandInput').value.trim();
            const name = document.getElementById('drugNameInput').value.trim();
            const generic = document.getElementById('drugGenericInput').value.trim();
            const dosage = document.getElementById('drugDosageInput').value.trim();
            const pageVal = document.getElementById('drugPageInput').value.trim();
            const imageFileInput = document.getElementById('drugImageInput');
            
            if (!brand || !name || !generic || !dosage) {
                showToast("Sila isi semua ruangan wajib.", "error");
                return;
            }
            
            const newId = Date.now();
            const pageNum = pageVal ? parseInt(pageVal) : null;
            
            const newDrug = {
                id: newId,
                name: name,
                brand: brand,
                generic: generic,
                dosage: dosage,
                defaultPage: pageNum
            };
            
            if (imageFileInput && imageFileInput.files.length > 0) {
                const file = imageFileInput.files[0];
                if (!file.type.startsWith('image/')) {
                    showToast("Fail terpilih mestilah gambar sahaja.", "error");
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = async function(event) {
                    const base64String = event.target.result;
                    
                    const transaction = db.transaction([STORE_NAME], 'readwrite');
                    const store = transaction.objectStore(STORE_NAME);
                    const request = store.put(base64String, `image_${newId}`);
                    
                    request.onsuccess = async () => {
                        drugsWithCustomImages.add(newId);
                        saveCustomDrugData(newDrug, pageNum);
                    };
                    request.onerror = (err) => {
                        console.error("Save custom image error:", err);
                        showToast("Gagal menyimpan gambar visual.", "error");
                    };
                };
                reader.readAsDataURL(file);
            } else {
                saveCustomDrugData(newDrug, pageNum);
            }
        });
    }

    // --- Modal Delete Drug Event ---
    const modalDeleteDrugBtn = document.getElementById('modalDeleteDrugBtn');
    if (modalDeleteDrugBtn) {
        modalDeleteDrugBtn.addEventListener('click', () => {
            if (activeDrug) {
                deleteDrug(activeDrug);
            }
        });
    }

    // --- Modal Edit Drug Event ---
    const modalEditDrugBtn = document.getElementById('modalEditDrugBtn');
    if (modalEditDrugBtn) {
        modalEditDrugBtn.addEventListener('click', () => {
            if (activeDrug) {
                const drugToEdit = activeDrug;
                closeModal();
                openEditDrugModal(drugToEdit);
            }
        });
    }

    // --- Edit Drug Events ---
    const closeEditDrugModalBtn = document.getElementById('closeEditDrugModalBtn');
    const editDrugModalBackdrop = document.getElementById('editDrugModalBackdrop');
    const editDrugForm = document.getElementById('editDrugForm');
    
    if (closeEditDrugModalBtn) {
        closeEditDrugModalBtn.addEventListener('click', () => {
            document.getElementById('editDrugModal').classList.remove('open');
        });
    }
    
    if (editDrugModalBackdrop) {
        editDrugModalBackdrop.addEventListener('click', () => {
            document.getElementById('editDrugModal').classList.remove('open');
        });
    }
    
    if (editDrugForm) {
        editDrugForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const drugId = parseInt(document.getElementById('editDrugIdInput').value);
            const brand = document.getElementById('editDrugBrandInput').value.trim();
            const name = document.getElementById('editDrugNameInput').value.trim();
            const generic = document.getElementById('editDrugGenericInput').value.trim();
            const dosage = document.getElementById('editDrugDosageInput').value.trim();
            const pageVal = document.getElementById('editDrugPageInput').value.trim();
            const imageFileInput = document.getElementById('editDrugImageInput');
            
            if (!brand || !name || !generic || !dosage) {
                showToast("Sila isi semua ruangan wajib.", "error");
                return;
            }
            
            const pageNum = pageVal ? parseInt(pageVal) : null;
            
            const updatedInfo = {
                brand: brand,
                name: name,
                generic: generic,
                dosage: dosage
            };
            
            const isCustom = customDrugs.some(d => d.id === drugId);
            
            if (isCustom) {
                customDrugs = customDrugs.map(d => {
                    if (d.id === drugId) {
                        return { ...d, ...updatedInfo, defaultPage: pageNum };
                    }
                    return d;
                });
                localStorage.setItem('custom_drugs', JSON.stringify(customDrugs));
            } else {
                modifiedDrugs[drugId] = { ...updatedInfo, defaultPage: pageNum };
                localStorage.setItem('modified_drugs', JSON.stringify(modifiedDrugs));
            }
            
            // Update mapping
            drugMappings[drugId] = { page: pageNum, crop: 'all' };
            localStorage.setItem('drug_page_mappings', JSON.stringify(drugMappings));
            
            if (imageFileInput && imageFileInput.files.length > 0) {
                const file = imageFileInput.files[0];
                if (!file.type.startsWith('image/')) {
                    showToast("Fail terpilih mestilah gambar sahaja.", "error");
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = async function(event) {
                    const base64String = event.target.result;
                    
                    const transaction = db.transaction([STORE_NAME], 'readwrite');
                    const store = transaction.objectStore(STORE_NAME);
                    const request = store.put(base64String, `image_${drugId}`);
                    
                    request.onsuccess = async () => {
                        drugsWithCustomImages.add(drugId);
                        finishDrugEdit(brand);
                    };
                    request.onerror = (err) => {
                        console.error("Save custom image error:", err);
                        showToast("Gagal menyimpan gambar visual.", "error");
                    };
                };
                reader.readAsDataURL(file);
            } else {
                finishDrugEdit(brand);
            }
        });
    }
}

function openEditDrugModal(drug) {
    try {
        console.log("Opening edit modal for drug:", drug);
        const modal = document.getElementById('editDrugModal');
        if (!modal) {
            console.error("editDrugModal element not found!");
            showToast("Ralat: Elemen editDrugModal tidak ditemui.", "error");
            return;
        }
        
        document.getElementById('editDrugIdInput').value = drug.id || "";
        document.getElementById('editDrugBrandInput').value = drug.brand || "";
        document.getElementById('editDrugNameInput').value = drug.name || "";
        document.getElementById('editDrugGenericInput').value = drug.generic || "";
        document.getElementById('editDrugDosageInput').value = drug.dosage || "";
        
        const mapping = drugMappings[drug.id] || {};
        document.getElementById('editDrugPageInput').value = (mapping.page !== undefined && mapping.page !== null) ? mapping.page : (drug.defaultPage || '');
        
        const imgInput = document.getElementById('editDrugImageInput');
        if (imgInput) imgInput.value = '';
        
        modal.classList.add('open');
        console.log("Edit modal opened successfully.");
    } catch (err) {
        console.error("Error in openEditDrugModal:", err);
        showToast("Ralat membuka borang suntingan: " + err.message, "error");
    }
}

async function finishDrugEdit(brandName) {
    document.getElementById('editDrugForm').reset();
    document.getElementById('editDrugModal').classList.remove('open');
    showToast(`Maklumat ubat '${brandName}' telah dikemaskini.`, "success");
    await logAction(`Mengemaskini ubat: ${brandName}`);
    renderDrugGrid();
    updateHeaderStats();
    pushSupabaseState();
}

async function saveCustomDrugData(newDrug, pageNum) {
    customDrugs.push(newDrug);
    localStorage.setItem('custom_drugs', JSON.stringify(customDrugs));
    
    drugMappings[newDrug.id] = { page: pageNum, crop: 'all' };
    
    // Save to localStorage directly without toast trigger from saveMappings() to avoid double toast
    localStorage.setItem('drug_page_mappings', JSON.stringify(drugMappings));
    
    // Reset Form
    document.getElementById('addDrugForm').reset();
    document.getElementById('addDrugModal').classList.remove('open');
    
    showToast(`Ubat ${newDrug.brand} berjaya ditambah!`, "success");
    await logAction(`Menambah ubat baru: ${newDrug.brand} (${newDrug.dosage})`);
    
    // Refresh search query and grid to show the new drug
    currentSearchQuery = newDrug.brand;
    document.getElementById('searchBar').value = newDrug.brand;
    renderDrugGrid();
    updateHeaderStats();
    pushSupabaseState();
}

async function deleteDrug(drug) {
    if (!confirm(`Adakah anda pasti mahu memadam ubat '${drug.brand}' dari katalog?`)) return;
    
    const drugId = drug.id;
    const brandName = drug.brand;
    
    // Remove from customDrugs
    customDrugs = customDrugs.filter(d => d.id !== drugId);
    localStorage.setItem('custom_drugs', JSON.stringify(customDrugs));
    
    // If it is an initial hardcoded drug, track it as deleted
    if (initialDrugs.some(d => d.id === drugId)) {
        if (!deletedInitialDrugs.includes(drugId)) {
            deletedInitialDrugs.push(drugId);
            localStorage.setItem('deleted_initial_drugs', JSON.stringify(deletedInitialDrugs));
        }
    }
    
    // Remove from modifiedDrugs
    if (modifiedDrugs[drugId]) {
        delete modifiedDrugs[drugId];
        localStorage.setItem('modified_drugs', JSON.stringify(modifiedDrugs));
    }
    
    // Remove mappings
    delete drugMappings[drugId];
    localStorage.setItem('drug_page_mappings', JSON.stringify(drugMappings));
    
    // Remove image from IndexedDB
    try {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        store.delete(`image_${drugId}`);
        drugsWithCustomImages.delete(drugId);
    } catch (err) {
        console.error("Failed to delete image from IndexedDB:", err);
    }
    
    // Close modal if the active drug was the one deleted
    if (activeDrug && activeDrug.id === drugId) {
        closeModal();
    }
    
    showToast(`Ubat '${brandName}' telah dipadam.`, "success");
    await logAction(`Memadam ubat: ${brandName}`);
    
    // Refresh grid & stats
    renderDrugGrid();
    updateHeaderStats();
    pushSupabaseState();
}

function handleSelectedFile(file) {
    const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith('.pdf');
    if (!isPdf) {
        showToast("Fail terpilih mestilah dalam format PDF.", "error");
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const arrayBuffer = e.target.result;
        pdfBytes = arrayBuffer;
        savePDFToDB(arrayBuffer);
        loadPDFDocument(arrayBuffer);
    };
    reader.onerror = function() {
        showToast("Gagal membaca fail.", "error");
    };
    reader.readAsArrayBuffer(file);
}

// --- Toast Alerts system ---

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-exclamation';
    if (type === 'warning') icon = 'fa-triangle-exclamation';
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <div class="toast-content">${message}</div>
    `;
    
    container.appendChild(toast);
    
    // Auto-remove toast after 4.5 seconds
    setTimeout(() => {
        toast.style.animation = 'toast-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse';
        setTimeout(() => toast.remove(), 300);
    }, 4500);
}

// --- New Helper Functions for Image Mode & IndexedDB Caching ---

function loadCustomImagesList() {
    if (!db) return;
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAllKeys();
    
    request.onsuccess = (e) => {
        const keys = e.target.result;
        drugsWithCustomImages.clear();
        keys.forEach(key => {
            if (typeof key === 'string' && key.startsWith('image_')) {
                const drugId = parseInt(key.split('_')[1]);
                drugsWithCustomImages.add(drugId);
            }
        });
        renderDrugGrid();
        updateHeaderStats();
    };
}

function getCustomImageData(drugId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(`image_${drugId}`);
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

async function renderDrugContent() {
    if (!activeDrug) return;
    
    const wrapper = document.getElementById('canvasWrapper');
    wrapper.innerHTML = '';
    
    const loader = document.getElementById('canvasLoader');
    const emptyState = document.getElementById('viewerEmptyState');
    const pdfNav = document.getElementById('pdfNavControls');
    const deleteImgBtn = document.getElementById('deleteImageBtn');
    
    loader.style.display = 'none';
    emptyState.style.display = 'none';
    pdfNav.style.display = 'none';
    deleteImgBtn.style.display = 'none';
    
    // 1. Fetch custom images from IndexedDB
    let customImages = [];
    if (drugsWithCustomImages.has(activeDrug.id)) {
        loader.querySelector('#loaderText').textContent = "Memuatkan gambar...";
        loader.style.display = 'flex';
        
        try {
            const dataUrl = await getCustomImageData(activeDrug.id);
            if (dataUrl) {
                if (Array.isArray(dataUrl)) {
                    customImages = dataUrl;
                } else if (typeof dataUrl === 'string') {
                    customImages = [dataUrl];
                }
            }
        } catch (err) {
            console.error("Failed to load custom images:", err);
        }
        loader.style.display = 'none';
    }
    
    // 2. Determine if anything is mapped/available
    const mapping = drugMappings[activeDrug.id] || { page: null, crop: 'all' };
    const pageVal = mapping.page;
    const isMapped = pdfDoc && pageVal && pageVal > 0 && pageVal <= pdfDoc.numPages;
    const hasLocalImg = !!activeDrug.localImage && !deletedLocalImages.includes(activeDrug.id);
    const hasCustomImg = customImages.length > 0;
    
    // Toggle delete button display based on image availability
    deleteImgBtn.style.display = (hasLocalImg || hasCustomImg) ? 'inline-flex' : 'none';
    
    if (!isMapped && !hasLocalImg && !hasCustomImg) {
        // Nothing to render, show empty state
        const emptyStateUploadBtn = document.getElementById('emptyStateUploadBtn');
        if (emptyStateUploadBtn) {
            emptyStateUploadBtn.style.display = loggedInUser ? 'inline-flex' : 'none';
        }
        emptyState.style.display = 'flex';
        return;
    }
    
    // Prevent 0x0 size collapse by adjusting wrapper layout for images vs PDF
    if (isMapped) {
        wrapper.style.position = 'absolute';
        wrapper.style.display = 'block';
        wrapper.style.width = '';
        wrapper.style.height = '';
        wrapper.style.justifyContent = '';
        wrapper.style.alignItems = '';
    } else {
        wrapper.style.position = 'absolute'; // Use absolute to allow height 100% resolution inside flex parent
        wrapper.style.display = 'flex';
        wrapper.style.justifyContent = 'center';
        wrapper.style.alignItems = 'center';
        wrapper.style.width = '100%';
        wrapper.style.height = '100%';
    }
    
    // 3. Render PDF page (if mapped)
    if (isMapped) {
        pdfNav.style.display = 'flex';
        const canvas = document.createElement('canvas');
        canvas.id = 'pdfCanvas';
        canvas.style.borderRadius = 'var(--radius-sm)';
        canvas.style.boxShadow = 'var(--shadow-sm)';
        
        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'viewer-item-wrapper pdf-wrapper';
        itemWrapper.appendChild(canvas);
        wrapper.appendChild(itemWrapper);
        
        loader.style.display = 'flex';
        await renderPDFPage(pageVal);
        loader.style.display = 'none';
    }
    
    // 4. Render Local Image
    if (hasLocalImg) {
        const img = document.createElement('img');
        img.id = 'drugImage'; // keep legacy id fallback
        img.src = activeDrug.localImage;
        img.style.display = 'block'; // Override style.css display: none
        img.style.maxWidth = '100%';
        img.style.maxHeight = '90vh';
        img.style.height = 'auto';
        img.style.borderRadius = 'var(--radius-sm)';
        img.style.boxShadow = 'var(--shadow-sm)';
        img.style.objectFit = 'contain';
        
        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'viewer-item-wrapper local-img-wrapper';
        itemWrapper.style.display = 'flex';
        itemWrapper.style.justifyContent = 'center';
        itemWrapper.style.alignItems = 'center';
        itemWrapper.style.width = '100%';
        itemWrapper.style.height = '100%';
        itemWrapper.appendChild(img);
        wrapper.appendChild(itemWrapper);
    }
    
    // 5. Render Custom Images
    if (hasCustomImg) {
        // Handled globally above
        // deleteImgBtn.style.display = loggedInUser ? 'inline-flex' : 'none';
        
        customImages.forEach((imgSrc, index) => {
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'viewer-item-wrapper custom-img-wrapper';
            imgWrapper.style.position = 'relative';
            imgWrapper.style.display = 'flex';
            imgWrapper.style.justifyContent = 'center';
            imgWrapper.style.alignItems = 'center';
            imgWrapper.style.width = '100%';
            imgWrapper.style.height = '100%';
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '90vh';
            img.style.height = 'auto';
            img.style.borderRadius = 'var(--radius-sm)';
            img.style.boxShadow = 'var(--shadow-sm)';
            img.style.objectFit = 'contain';
            
            imgWrapper.appendChild(img);
            
            // Add pangkah delete button on top right of each custom image (only for admin)
            if (loggedInUser) {
                const delBtn = document.createElement('button');
                delBtn.className = 'delete-single-img-btn';
                delBtn.title = "Padam Gambar Ini sahaja";
                delBtn.innerHTML = '&times;';
                delBtn.style.cssText = "position: absolute; top: -10px; right: -10px; background: var(--error); color: white; border: none; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: var(--shadow-sm); z-index: 10; transition: var(--transition-fast);";
                delBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    deleteSingleImage(activeDrug.id, index);
                });
                imgWrapper.appendChild(delBtn);
            }
            
            wrapper.appendChild(imgWrapper);
        });
    }
    
    // After inserting all elements, reset transform/scaling to fit them nicely
    setTimeout(resetCanvasScale, 50);
}

async function handleUploadedImage(file, drugId) {
    if (!file.type.startsWith('image/')) {
        showToast("Sila pilih fail gambar sahaja (PNG, JPG, WEBP, dll.).", "error");
        return;
    }
    
    const reader = new FileReader();
    reader.onload = async function(e) {
        const base64String = e.target.result;
        
        try {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const getReq = store.get(`image_${drugId}`);
            
            getReq.onsuccess = async (event) => {
                let currentData = event.target.result;
                let imagesList = [];
                
                if (currentData) {
                    if (Array.isArray(currentData)) {
                        imagesList = currentData;
                    } else if (typeof currentData === 'string') {
                        imagesList = [currentData];
                    }
                }
                
                imagesList.push(base64String);
                
                const putReq = store.put(imagesList, `image_${drugId}`);
                putReq.onsuccess = async () => {
                    markDrugUpdated(drugId);
                    showToast("Gambar foto ubat berjaya disimpan.", "success");
                    drugsWithCustomImages.add(drugId);
                    renderDrugGrid();
                    renderDrugContent(); // Reload view
                    updateHeaderStats();
                    await logAction("Memuat naik gambar baru bagi ubat: " + activeDrug.brand);
                };
            };
        } catch (err) {
            console.error("Save image error:", err);
            showToast("Gagal menyimpan gambar.", "error");
        }
    };
    reader.readAsDataURL(file);
}

async function deleteCustomImage(drugId) {
    if (!confirm("Adakah anda pasti mahu memadam kesemua gambar foto bagi ubat ini?")) return;
    
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(`image_${drugId}`);
    
    request.onsuccess = async () => {
        markDrugUpdated(drugId);
        showToast("Gambar foto telah dipadam.", "success");
        drugsWithCustomImages.delete(drugId);
        renderDrugGrid();
        renderDrugContent(); // Reload view
        updateHeaderStats();
        await logAction("Memadam semua gambar foto custom bagi ubat: " + activeDrug.brand);
    };
}

async function deleteSingleImage(drugId, index) {
    if (!confirm("Adakah anda pasti mahu memadam gambar visual ini sahaja?")) return;
    
    try {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const getReq = store.get(`image_${drugId}`);
        
        getReq.onsuccess = async (event) => {
            let currentData = event.target.result;
            let imagesList = [];
            
            if (currentData) {
                if (Array.isArray(currentData)) {
                    imagesList = currentData;
                } else if (typeof currentData === 'string') {
                    imagesList = [currentData];
                }
            }
            
            // Remove at index
            imagesList.splice(index, 1);
            
            let putReq;
            if (imagesList.length === 0) {
                putReq = store.delete(`image_${drugId}`);
                drugsWithCustomImages.delete(drugId);
            } else {
                putReq = store.put(imagesList, `image_${drugId}`);
            }
            
            putReq.onsuccess = async () => {
                markDrugUpdated(drugId);
                showToast("Gambar visual berjaya dipadam.", "success");
                renderDrugGrid();
                renderDrugContent(); // Reload view
                updateHeaderStats();
                await logAction("Memadam satu gambar visual bagi ubat: " + activeDrug.brand);
            };
        };
    } catch (err) {
        console.error("Failed to delete single image:", err);
        showToast("Ralat memadam gambar.", "error");
    }
}

function resetCanvasScale() {
    const container = document.getElementById('viewerContainer');
    const wrapper = document.getElementById('canvasWrapper');
    
    // Measure bounding box of all items at target height of 480px
    let totalWidth = 0;
    let maxItemHeight = 480;
    
    const items = wrapper.querySelectorAll('.viewer-item-wrapper img, .viewer-item-wrapper canvas');
    if (items.length === 0) {
        transformState = { x: 0, y: 0, scale: 1 };
        applyTransform();
        updateZoomLabel();
        return;
    }
    
    items.forEach(item => {
        let naturalW = 0, naturalH = 1;
        if (item.tagName.toLowerCase() === 'img') {
            naturalW = item.naturalWidth || 400;
            naturalH = item.naturalHeight || 400;
        } else {
            naturalW = item.width || 400;
            naturalH = item.height || 400;
        }
        // Scaled width based on fixed height of 480px
        const w = naturalW * (480 / naturalH);
        totalWidth += w;
    });
    
    // Add gap space in total width (e.g. 20px gap per item)
    totalWidth += 20 * (items.length - 1);
    
    // Base scale to fit container completely (leave some padding)
    const padding = 40;
    const scaleX = (container.clientWidth - padding) / totalWidth;
    const scaleY = (container.clientHeight - padding) / maxItemHeight;
    const baseScale = Math.min(scaleX, scaleY, 1.2); // cap scale at 1.2 so single images aren't too large
    
    transformState = { x: 0, y: 0, scale: baseScale };
    applyTransform();
    updateZoomLabel();
}

async function exportAllPdfImages() {
    if (!pdfDoc) {
        showToast("Fail PDF rujukan tidak dimuatkan.", "error");
        return;
    }
    const btn = document.getElementById('exportAllImagesBtn');
    const prevText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengekstrak...';
    
    showToast("Memulakan pengekstrakan semua halaman PDF... Sila tunggu.", "info");
    
    try {
        const total = pdfDoc.numPages;
        for (let i = 1; i <= total; i++) {
            const page = await pdfDoc.getPage(i);
            // Render at high resolution 2.0x scale
            const viewport = page.getViewport({ scale: 2.0 });
            
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = viewport.width;
            tempCanvas.height = viewport.height;
            const context = tempCanvas.getContext('2d');
            
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            
            await page.render(renderContext).promise;
            const dataUrl = tempCanvas.toDataURL('image/png');
            
            // POST to serve.ps1 to save locally
            const response = await fetch('/save_image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `Halaman_${i}.png`,
                    data: dataUrl
                })
            });
            
            if (!response.ok) {
                throw new Error(`Gagal menyimpan Halaman ${i}`);
            }
            
            // Periodically show progress toast
            if (i % 5 === 0 || i === total) {
                showToast(`Sedang memproses... (${i}/${total} halaman selesai)`, "info");
            }
        }
        showToast(`Pengekstrakan selesai! Semua ${total} halaman disimpan ke folder 'Katalog Ubat Terpisah' di Desktop.`, "success");
        await logAction("Mengekstrak semua halaman PDF ke Desktop");
    } catch (err) {
        console.error("Export error:", err);
        showToast("Ralat mengekstrak halaman: " + err.message, "error");
    } finally {
        btn.innerHTML = prevText;
        btn.disabled = false;
    }
}

function printActiveDrugImage() {
    if (!activeDrug) return;
    
    const wrapper = document.getElementById('canvasWrapper');
    if (!wrapper) return;
    
    const canvases = wrapper.querySelectorAll('canvas');
    const imgs = wrapper.querySelectorAll('img');
    
    let imagesToPrint = [];
    
    canvases.forEach(canvas => {
        try {
            imagesToPrint.push(canvas.toDataURL('image/png'));
        } catch (e) {
            console.error("Canvas toDataURL failed:", e);
        }
    });
    
    imgs.forEach(img => {
        if (img.src && !img.classList.contains('delete-single-img-btn')) {
            imagesToPrint.push(img.src);
        }
    });
    
    if (imagesToPrint.length === 0) {
        showToast("Tiada gambar visual ubat yang aktif untuk dicetak.", "warning");
        return;
    }
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        showToast("Sila benarkan pop-up untuk mencetak.", "error");
        return;
    }
    
    const imgTags = imagesToPrint.map(src => `<img src="${src}" alt="${activeDrug.name}">`).join('\n');
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cetak - ${activeDrug.name}</title>
            <style>
                body {
                    margin: 0;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    background-color: #ffffff;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    object-fit: contain;
                    page-break-inside: avoid;
                    page-break-after: always;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    border: 1px solid #eee;
                }
                @page {
                    size: auto;
                    margin: 10mm;
                }
                @media print {
                    body {
                        padding: 0;
                        gap: 0;
                    }
                    img {
                        box-shadow: none;
                        border: none;
                    }
                }
            </style>
        </head>
        <body>
            ${imgTags}
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(function() {
                        window.close();
                    }, 500);
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

async function printAllCatalog() {
    const mappedDrugs = getActiveDrugs().filter(drug => {
        const mapping = drugMappings[drug.id] || { page: null };
        const hasCustomImg = drugsWithCustomImages.has(drug.id);
        const hasLocalImg = !!drug.localImage;
        const hasPdfPage = pdfDoc && mapping.page && mapping.page > 0 && mapping.page <= pdfDoc.numPages;
        return hasCustomImg || hasLocalImg || hasPdfPage;
    });

    if (mappedDrugs.length === 0) {
        showToast("Tiada ubat dengan visual untuk dicetak dalam katalog.", "warning");
        return;
    }

    showToast("Sedang menjana katalog bergambar... Sila tunggu sebentar.", "info");

    const printItems = [];

    for (const drug of mappedDrugs) {
        const mapping = drugMappings[drug.id] || { page: null };
        const hasCustomImg = drugsWithCustomImages.has(drug.id);
        const hasLocalImg = !!drug.localImage;
        const hasPdfPage = pdfDoc && mapping.page && mapping.page > 0 && mapping.page <= pdfDoc.numPages;
        
        const item = {
            brand: drug.brand,
            name: drug.name,
            generic: drug.generic,
            dosage: drug.dosage,
            images: []
        };
        
        if (hasCustomImg) {
            try {
                const dataUrl = await getCustomImageData(drug.id);
                if (dataUrl) {
                    if (Array.isArray(dataUrl)) {
                        item.images = dataUrl;
                    } else if (typeof dataUrl === 'string') {
                        item.images = [dataUrl];
                    }
                }
            } catch (e) {
                console.error("Failed to load custom image during print-all:", e);
            }
        }
        
        if (hasLocalImg && item.images.length === 0) {
            item.images.push(drug.localImage);
        }
        
        if (hasPdfPage && item.images.length === 0) {
            try {
                const page = await pdfDoc.getPage(mapping.page + pdfOffset);
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const ctx = canvas.getContext('2d');
                
                await page.render({ canvasContext: ctx, viewport: viewport }).promise;
                const dataUrl = canvas.toDataURL('image/png');
                item.images.push(dataUrl);
            } catch (e) {
                console.error("Failed to render PDF page during print-all:", e);
            }
        }
        
        if (item.images.length > 0) {
            printItems.push(item);
        }
    }

    if (printItems.length === 0) {
        showToast("Gagal menjana visual ubat untuk dicetak.", "error");
        return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        showToast("Sila benarkan pop-up untuk mencetak.", "error");
        return;
    }

    let catalogHtml = '';
    printItems.forEach(item => {
        catalogHtml += `
            <div class="drug-print-page">
                <div class="drug-header">
                    <span class="drug-dosage">${item.dosage}</span>
                    <h2 class="drug-title">${item.name}</h2>
                    <p class="drug-brand">Jenama: ${item.brand}</p>
                </div>
                <div class="drug-images">
                    ${item.images.map(imgSrc => `<img src="${imgSrc}" alt="${item.name}">`).join('\n')}
                </div>
            </div>
        `;
    });

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>VIMED - Katalog Bergambar Penuh</title>
            <style>
                body {
                    margin: 0;
                    padding: 20px;
                    font-family: 'Inter', sans-serif;
                    background-color: #ffffff;
                    color: #0b0f19;
                }
                .drug-print-page {
                    page-break-after: always;
                    border-bottom: 2px solid #eee;
                    padding-bottom: 30px;
                    margin-bottom: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .drug-header {
                    width: 100%;
                    max-width: 800px;
                    border-bottom: 2px solid #3b82f6;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                    text-align: left;
                }
                .drug-title {
                    font-size: 24px;
                    font-weight: 700;
                    margin: 4px 0;
                    color: #0f172a;
                }
                .drug-brand {
                    font-size: 16px;
                    font-weight: 600;
                    color: #3b82f6;
                    margin: 0;
                }
                .drug-dosage {
                    font-size: 12px;
                    font-weight: 700;
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    padding: 4px 10px;
                    border-radius: 9999px;
                    text-transform: uppercase;
                }
                .drug-images {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    align-items: center;
                    width: 100%;
                }
                img {
                    max-width: 100%;
                    max-height: 80vh;
                    object-fit: contain;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
                }
                @media print {
                    body {
                        padding: 0;
                    }
                    .drug-print-page {
                        border-bottom: none;
                        padding-bottom: 0;
                        margin-bottom: 0;
                    }
                    img {
                        box-shadow: none;
                        border: none;
                        border-radius: 0;
                    }
                }
            </style>
        </head>
        <body>
            ${catalogHtml}
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(function() {
                        window.close();
                    }, 500);
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
    showToast("Katalog sedia untuk dicetak!", "success");
}

// --- Data Export & Import (Backup/Restore) ---

async function getIndexedDBImages() {
    const imageMap = {};
    const drugIds = Array.from(drugsWithCustomImages);
    for (const id of drugIds) {
        try {
            const data = await getCustomImageData(id);
            if (data) {
                imageMap[id] = data;
            }
        } catch (e) {
            console.error("Export error reading IDB image:", e);
        }
    }
    return imageMap;
}

async function exportData() {
    try {
        showToast("Menyediakan fail sandaran...", "info");
        const imageMap = await getIndexedDBImages();
        
        const backupData = {
            customDrugs: customDrugs,
            modifiedDrugs: modifiedDrugs,
            deletedInitialDrugs: deletedInitialDrugs,
            drugMappings: drugMappings,
            lastUpdatedTimes: lastUpdatedTimes,
            pdfOffset: pdfOffset,
            customImages: imageMap
        };
        
        const jsonString = JSON.stringify(backupData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `VIMED_Backup_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast("Data berjaya dieksport!", "success");
    } catch (err) {
        console.error("Export error:", err);
        showToast("Gagal mengeksport data.", "error");
    }
}

function handleImportDataFile(file) {
    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (confirm("Adakah anda pasti mahu mengimport data ini? Data sedia ada akan ditulis ganti.")) {
                await applySyncedState(data);
                showToast("Data berjaya diimport! Memuat semula halaman...", "success");
                await logAction("Mengimport data backup daripada fail");
                
                setTimeout(() => {
                    location.reload();
                }, 1200);
            }
        } catch (err) {
            console.error("Import error:", err);
            showToast("Gagal mengimport fail data. Format fail tidak sah.", "error");
        }
    };
    reader.readAsText(file);
}

// --- Supabase Cloud Sync Integration ---

let supabaseClient = null;

async function initSupabase() {
    const url = localStorage.getItem('supabase_url');
    const key = localStorage.getItem('supabase_key');
    
    if (document.getElementById('supabaseUrlInput')) {
        document.getElementById('supabaseUrlInput').value = url || '';
    }
    if (document.getElementById('supabaseKeyInput')) {
        document.getElementById('supabaseKeyInput').value = key || '';
    }
    
    if (!url || !key) return false;
    
    try {
        if (typeof supabase === 'undefined' || !supabase.createClient) {
            console.warn("Perpustakaan Supabase JS belum dimuatkan.");
            return false;
        }
        
        supabaseClient = supabase.createClient(url, key);
        
        // Test connection by fetching
        const { data, error } = await supabaseClient
            .from('vimed_state')
            .select('data')
            .eq('id', 'global')
            .maybeSingle();
            
        if (error) {
            console.error("Sambungan Supabase gagal diuji:", error);
            return false;
        }
        
        // Connected successfully!
        if (data && data.data) {
            await applySyncedState(data.data);
        } else {
            // First time setup, push local state to Supabase
            await pushSupabaseState();
        }
        
        setupSupabaseRealtime();
        return true;
    } catch (e) {
        console.error("Ralat memulakan Supabase:", e);
        return false;
    }
}

async function pushSupabaseState() {
    if (!supabaseClient) return;
    try {
        const imageMap = await getIndexedDBImages();
        
        const payload = {
            customDrugs,
            modifiedDrugs,
            deletedInitialDrugs,
            drugMappings,
            lastUpdatedTimes,
            pdfOffset,
            customImages: imageMap
        };
        
        const { error } = await supabaseClient
            .from('vimed_state')
            .upsert({ id: 'global', data: payload, updated_at: new Date() });
            
        if (error) {
            console.error("Supabase push state failed:", error);
        }
    } catch (e) {
        console.error("Failed to push to Supabase:", e);
    }
}

function setupSupabaseRealtime() {
    if (!supabaseClient) return;
    
    // Subscribe to updates on vimed_state table
    supabaseClient
        .channel('schema-db-changes')
        .on(
            'postgres_changes',
            { event: 'UPDATE', schema: 'public', table: 'vimed_state', filter: 'id=eq.global' },
            payload => {
                if (payload.new && payload.new.data) {
                    applySyncedState(payload.new.data);
                    showToast("Pangkalan data dikemas kini secara langsung dari Cloud!", "info");
                }
            }
        )
        .subscribe();
}

async function applySyncedState(state) {
    if (state.customDrugs) {
        customDrugs = state.customDrugs;
        localStorage.setItem('custom_drugs', JSON.stringify(customDrugs));
    }
    if (state.modifiedDrugs) {
        modifiedDrugs = state.modifiedDrugs;
        localStorage.setItem('modified_drugs', JSON.stringify(modifiedDrugs));
    }
    if (state.deletedInitialDrugs) {
        deletedInitialDrugs = state.deletedInitialDrugs;
        localStorage.setItem('deleted_initial_drugs', JSON.stringify(deletedInitialDrugs));
    }
    if (state.drugMappings) {
        drugMappings = state.drugMappings;
        localStorage.setItem('drug_page_mappings', JSON.stringify(drugMappings));
    }
    if (state.lastUpdatedTimes) {
        lastUpdatedTimes = state.lastUpdatedTimes;
        localStorage.setItem('last_updated_times', JSON.stringify(lastUpdatedTimes));
    }
    if (state.pdfOffset !== undefined) {
        pdfOffset = state.pdfOffset;
        localStorage.setItem('pdf_offset', pdfOffset);
        const offsetInput = document.getElementById('globalPdfOffset');
        if (offsetInput) offsetInput.value = pdfOffset;
    }
    
    if (state.customImages) {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        
        drugsWithCustomImages.clear();
        
        for (const drugId in state.customImages) {
            const base64Data = state.customImages[drugId];
            store.put(base64Data, `image_${drugId}`);
            drugsWithCustomImages.add(drugId);
        }
    }
    
    renderDrugGrid();
    updateHeaderStats();
}

async function saveSupabaseConfig() {
    const url = document.getElementById('supabaseUrlInput').value.trim();
    const key = document.getElementById('supabaseKeyInput').value.trim();
    
    if (!url || !key) {
        showToast("Sila masukkan URL dan Anon Key Supabase.", "warning");
        return;
    }
    
    localStorage.setItem('supabase_url', url);
    localStorage.setItem('supabase_key', key);
    
    showToast("Menghubungkan ke pangkalan data awan...", "info");
    
    const success = await initSupabase();
    if (success) {
        showToast("Sambungan Supabase berjaya! Data sedia diselaras.", "success");
        await logAction("Menyambung sistem ke Supabase Cloud");
    } else {
        showToast("Gagal menyambung. Sila pastikan jadual 'vimed_state' telah dicipta di Supabase.", "error");
    }
}
