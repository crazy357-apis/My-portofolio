document.addEventListener("DOMContentLoaded", function () {

    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const viewBtn = document.getElementById("viewBtn");

    if (viewBtn) {
        viewBtn.addEventListener("click", function () {
            document.getElementById("About")?.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();

                const target = document.querySelector(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove("light-mode");
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }

    toggleBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }

    });
}