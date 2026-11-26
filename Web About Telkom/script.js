// 1. Menandai menu navbar yang aktif sesuai posisi scroll halaman
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item:not(.btn-keluar)");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 160) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }
    });
});

// 2. Placeholder tombol DASHBOARD (tidak mengalihkan halaman sebelum kamu pasang link)
function klikDashboard(event) {
    // Jika href masih "#", tahan agar layar tidak melompat ke atas
    if (event.currentTarget.getAttribute("href") === "#") {
        event.preventDefault();
    }
}

// 3. Simulasi tombol Keluar di navbar
function konfirmasiKeluar(event) {
    event.preventDefault();
    alert("Tombol Keluar diklik. Nanti bisa dihubungkan ke halaman Login.");
}