document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".picture-style-sub");
    const mainImage = document.getElementById("mainImage");

    if (!mainImage || thumbnails.length === 0) {
        console.error("Не знайдено головне зображення або малі картинки!");
        return;
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            if (thumbnail.src) {
                // Додаємо клас fade-out для плавного переходу
                mainImage.classList.add("fade-out");

                // Плавно чекаємо і замінюємо джерело зображення
                setTimeout(() => {
                    // Змінюємо джерело зображення
                    mainImage.src = thumbnail.src;

                    // Після зміни зображення відновлюємо стилі для головного зображення
                    mainImage.style.width = '100%';  // Гарантуємо, що ширина залишається 100%
                    mainImage.style.height = '100%'; // Гарантуємо, що висота залишається 100%

                    // Відновлюємо плавний перехід
                    mainImage.classList.remove("fade-out");
                }, 300); // Час, що збігається з transition
            }
        });
    });
});

