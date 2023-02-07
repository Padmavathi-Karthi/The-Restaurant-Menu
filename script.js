const menuButtons = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeButton = 'featured';

showFoodMenu(activeButton);

menuButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn() {
    menuButtons.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn) {
    activeButton = newMenuBtn;
    foodItems.forEach((item) => {
        if (item.classList.contains(activeButton)) {
            item.style.display = "grid";
        }
        else {
            item.style.display = "none";
        }
    });
}
