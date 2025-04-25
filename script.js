let currentSlide = 0;
const reviews = document.querySelectorAll('.review');
const indicators = document.querySelectorAll('.indicator');
const totalReviews = reviews.length;
let reviewsToShow = 2; // Начальное количество отзывов для показа

// Функция для обновления количества отзывов в зависимости от ширины экрана
function updateReviewsToShow() {
    if (window.innerWidth < 850) {
        reviewsToShow = 1; // Показывать 1 отзыв на маленьких экранах
    } else {
        reviewsToShow = 2; // Показывать 2 отзыва на больших экранах
    }
}

// Обновление отзывов
function updateReviews() {
    const offset = currentSlide * reviewsToShow;
    reviews.forEach((review, index) => {
        if (index >= offset && index < offset + reviewsToShow) {
            review.style.display = 'flex';
        } else {
            review.style.display = 'none';
        }
    });
    updateIndicators();
}

// Обновление индикаторов
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active'); // Добавляем класс active для текущего индикатора
        } else {
            indicator.classList.remove('active'); // Убираем класс active для остальных индикаторов
        }
    });
}

// Смена слайда
function changeSlide(direction) {
    currentSlide += direction;
    const maxSlides = Math.ceil(totalReviews / reviewsToShow) - 1;

    if (currentSlide < 0) {
        currentSlide = maxSlides;
    } else if (currentSlide > maxSlides) {
        currentSlide = 0;
    }

    updateReviews();
}

// Обработчик изменения размера окна
window.addEventListener('resize', () => {
    updateReviewsToShow(); // Обновляем количество отзывов для показа
    currentSlide = 0; // Сбрасываем текущий слайд
    updateReviews(); // Обновляем отображение отзывов
});

// Инициализация при загрузке страницы
function initializeSlider() {
    updateReviewsToShow(); // Определяем количество отзывов для показа
    currentSlide = 0; // Сбрасываем текущий слайд
    updateReviews(); // Обновляем отображение отзывов
}

// Вызываем инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeSlider);