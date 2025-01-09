document.addEventListener("DOMContentLoaded", function () {

    const readMoreBtn = document.querySelector(".read-more-btn");
    const fullText = document.getElementById("full-text");

    if (readMoreBtn && fullText) {
        readMoreBtn.addEventListener("click", function () {

            fullText.classList.toggle("expanded");

            if (fullText.classList.contains("expanded")) {
                readMoreBtn.textContent = "Згорнути";
            } else {
                readMoreBtn.textContent = "Читати більше";
            }
        });
    } else {
        console.error("Не знайдено елементи для кнопки або тексту!");
    }


    const thumbnails = document.querySelectorAll(".picture-style-sub");
    const mainImage = document.getElementById("mainImage");

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener("click", () => {
                if (thumbnail.src) {
                    mainImage.classList.add("fade-out");
                    setTimeout(() => {
                        mainImage.src = thumbnail.src;
                        mainImage.classList.remove("fade-out");
                    }, 300); 
                }
            });
        });
    } else {
        console.error("Не знайдено головне зображення або малі картинки!");
    }
});