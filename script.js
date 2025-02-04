// Скины
let skins = ['img/skin1.png', 'img/skin2.png', 'img/skin3.png'];

// Питомцы
let pets = ['img/pet1.png', 'img/pet2.png', 'img/pet3.png'];

// Функция для отображения вкладок
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Функция для переключения меню
function toggleMenu() {
    const menu = document.getElementById('menu-popup');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
}

// Закрытие меню
function closeMenu() {
    document.getElementById('menu-popup').style.display = 'none';
}

// Выбор скина
function selectSkin() {
    const selectedSkin = document.getElementById('selected-skin').src;
    document.getElementById('character-img').src = selectedSkin;
    closeMenu();
}

// Предпросмотр скина
function previewSkin(skin, name) {
    document.getElementById('selected-skin').src = skin;
    document.getElementById('skin-name').textContent = name;
}

// Выбор питомца
function selectPet() {
    const selectedPet = document.getElementById('selected-pet').src;
    document.getElementById('pet-img').src = selectedPet;
    closeMenu();
}

// Предпросмотр питомца
function previewPet(pet, name) {
    document.getElementById('selected-pet').src = pet;
    document.getElementById('pet-name').textContent = name;
}

// Переключение фона (по кнопкам стрелок)
let currentBackgroundIndex = 0;
let backgrounds = ['img/background1.png', 'img/background2.png', 'img/background3.png']; // Массив с фонами

function toggleBackgroundSelection() {
    const backgroundSelection = document.getElementById('background-selection');
    backgroundSelection.style.display = backgroundSelection.style.display === 'none' || backgroundSelection.style.display === '' ? 'block' : 'none';
}

// Изменение фона
function changeBackground(direction) {
    currentBackgroundIndex += direction;
    if (currentBackgroundIndex < 0) currentBackgroundIndex = backgrounds.length - 1;
    if (currentBackgroundIndex >= backgrounds.length) currentBackgroundIndex = 0;
    document.body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
}

// Подтверждение выбора фона
function selectBackground() {
    const backgroundSelection = document.getElementById('background-selection');
    backgroundSelection.style.display = 'none';
    // Фон уже выбран, его отображение контролируется при изменении через стрелки.
}
