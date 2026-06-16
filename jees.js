document.addEventListener("DOMContentLoaded", function () {

    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    document.body.classList.add("lock-scroll");

    const viewBtn = document.getElementById("viewBtn");

    viewBtn.addEventListener("click", function () {

        document.body.classList.remove("lock-scroll");

        document.getElementById("About").scrollIntoView({
            behavior: "smooth"
        });
    });

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

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