function qs(sel, root = document) { return root.querySelector(sel); }

function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

const LS = {
    set(key, value) { localStorage.setItem(key, JSON.stringify(value)); },
    get(key, fallback = null) { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
};


function formatNum(n) { return Math.round(n * 100) / 100; }


function showMessage(msg, timeout = 2500) {
    let el = document.createElement('div');
    el.style = "position:fixed;right:18px;bottom:18px;background:#0b1320;color:white;padding:10px 14px;border-radius:8px;z-index:9999";
    el.innerText = msg;
    document.body.appendChild(el);
    setTimeout(() => {
        el.style.opacity = 0;
        setTimeout(() => el.remove(), 300)
    }, timeout);
}


document.addEventListener('click', e => {
    if (e.target.matches('.hamburger') || e.target.closest('.hamburger')) {
        document.querySelector('.nav-links').classList.toggle('open');
    }
});