// Firebase Config
export const firebaseConfig = {
    apiKey: "AIzaSyAsL7bSa9ztYVype-TrVN1RG921L668uUQ",
    authDomain: "pro-portfolio-71679.firebaseapp.com",
    databaseURL: "https://pro-portfolio-71679-default-rtdb.firebaseio.com",
    projectId: "pro-portfolio-71679",
    storageBucket: "pro-portfolio-71679.firebasestorage.app",
    messagingSenderId: "238356081205",
    appId: "1:238356081205:web:1a88fb9eff5661a1b75f7c"
};

// User Helper
export function setupUserInfo(userName, userEmail) {
    const nameEl = document.getElementById('userName');
    const emailEl = document.getElementById('userEmail');
    
    if (nameEl) nameEl.textContent = userName || 'المستخدم';
    if (emailEl) emailEl.textContent = userEmail || '-';
    
    sessionStorage.setItem('userName', userName);
    sessionStorage.setItem('userEmail', userEmail);
}

// Logout Helper
export function setupLogout(auth) {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                const { signOut } = await import("https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js");
                await signOut(auth);
                sessionStorage.clear();
                window.location.href = 'index.html';
            } catch (error) {
                console.error('Logout error:', error);
            }
        });
    }
}

// Message Helper
export function showMessage(elementId, message, type = 'success') {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = message;
        el.className = `message show ${type}`;
        setTimeout(() => el.classList.remove('show'), 3000);
    }
}

// Search/Filter Helper
export function setupSearchAndFilter(allStocks, renderCallback) {
    const searchInput = document.getElementById('searchInput');
    const filterCategory = document.getElementById('filterCategory');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const search = e.target.value.toLowerCase();
            const filtered = allStocks.filter(s => s.name.toLowerCase().includes(search));
            renderCallback(filtered);
        });
    }

    if (filterCategory) {
        filterCategory.addEventListener('change', (e) => {
            const category = e.target.value;
            const filtered = category ? allStocks.filter(s => s.category === category) : [...allStocks];
            renderCallback(filtered);
        });
    }
}

// Modal Helper
export function toggleModal(modalId, show = true) {
    const modal = document.getElementById(modalId);
    if (modal) {
        if (show) modal.classList.add('show');
        else modal.classList.remove('show');
    }
}

export function closeModal(modalId) {
    toggleModal(modalId, false);
}

export function openModal(modalId) {
    toggleModal(modalId, true);
}
