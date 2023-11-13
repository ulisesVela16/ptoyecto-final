document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.querySelector('.rating-value');
    const percentageBar = document.querySelector('.percentage-bar');
    const percentageText = document.querySelector('.percentage-text');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-rating');
            ratingValue.value = rating;
            updatePercentage();
            updatePercentageText();
            stars.forEach(s => s.classList.remove('active'));
            star.classList.add('active');
        });

        star.addEventListener('mouseover', () => {
            stars.forEach(s => s.classList.remove('active'));
            star.classList.add('active');
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('active'));
            const currentRating = ratingValue.value;
            const activeStar = document.querySelector(`.star[data-rating="${currentRating}"]`);
            if (activeStar) {
                activeStar.classList.add('active');
            }
            updatePercentage();
            updatePercentageText();
        });
    });

    function updatePercentage() {
        const totalRating = 5;
        const currentRating = ratingValue.value;
        const percentage = (currentRating / totalRating) * 100;
        percentageBar.style.width = `${percentage}%`;
    }

    function updatePercentageText() {
        const currentRating = ratingValue.value;
        percentageText.textContent = `${currentRating * 20}% de usuarios encontraron útil esta página`;
    }
});
