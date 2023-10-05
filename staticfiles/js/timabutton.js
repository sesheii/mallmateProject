// Отримуємо посилання на елементи DOM
const changeImageBtn = document.getElementById('changeImageBtn');
const imageToShow = document.getElementById('imageToShow');

// Встановлюємо обробник подій для кнопки
changeImageBtn.addEventListener('click', function() {
    // Змінюємо атрибут src зображення на новий шлях
    imageToShow.src = "{% static 'images/OIP.jpg' %}";
});
