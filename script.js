// ================= MENU MOBILE =================

const menuButton =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    const isOpen =
        navLinks.classList.toggle("active");


    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );


    menuButton.textContent =
        isOpen ? "✕" : "☰";

});


// ================= FECHAR MENU =================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        });

    });


// ================= LINK ATIVO =================

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".nav-links a");


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");


        const target =
            link.getAttribute("href");


        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


updateActiveLink();


// ================= HEADER =================

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background =
            "rgba(31, 54, 61, 0.96)";

    } else {

        header.style.background =
            "rgba(31, 54, 61, 0.88)";

    }

});


// ================= ANIMAÇÃO =================

const animatedElements =
    document.querySelectorAll(
        ".project-card, .tech-card, .education-card, .timeline-item, .info-item"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});