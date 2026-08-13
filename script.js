document.addEventListener("DOMContentLoaded", () => {

    // ================= LOADER =================

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);


    // ================= CONFIG =================

    if (typeof ALC_CONFIG !== "undefined") {

        document.title =
            `${ALC_CONFIG.company.name} — ${ALC_CONFIG.company.fullName}`;

        document.querySelectorAll("[data-stat]").forEach(element => {

            const type = element.dataset.stat;

            if (ALC_CONFIG.stats[type]) {
                element.textContent =
                    ALC_CONFIG.stats[type];
            }

        });

        const joinButtons =
            document.querySelectorAll(
                'a[href*="discord.gg"]'
            );

        joinButtons.forEach(button => {
            button.href =
                ALC_CONFIG.links.discord;
        });
    }


    // ================= MOBILE MENU =================

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    // ================= CLOSE MENU =================

    document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });


    // ================= SCROLL REVEAL =================

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: .12
            }
        );


    document
        .querySelectorAll(
            ".section, .fleet-card, .gallery-item, .event"
        )
        .forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

});