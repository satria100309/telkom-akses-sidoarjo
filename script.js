
// ===============================
// 1. NAVBAR ACTIVE MENU
// ===============================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(
    ".nav-item:not(.btn-keluar)"
);

function updateActiveMenu() {

    let current = "home";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 160) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((item) => {

        item.classList.remove("active");

        if (item.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveMenu);

window.addEventListener("load", updateActiveMenu);


// ===============================
// 2. TOMBOL DASHBOARD
// ===============================

function klikDashboard(event) {

    const link = event.currentTarget.getAttribute("href");

    if (link === "#") {

        event.preventDefault();

        alert(
            "Halaman Dashboard belum dihubungkan. " +
            "Silakan pasang alamat halaman Dashboard terlebih dahulu."
        );

    }

}


// ===============================
// 3. TOMBOL KELUAR
// ===============================

function konfirmasiKeluar(event) {

    event.preventDefault();

    const konfirmasi = confirm(
        "Apakah kamu yakin ingin keluar dari halaman ini?"
    );

    if (konfirmasi) {

        alert(
            "Tombol Keluar berhasil dijalankan. " +
            "Silakan hubungkan dengan halaman Login."
        );

    }

}


// ===============================
// 4. SMOOTH SCROLL NAVIGASI
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
