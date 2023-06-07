const menuElementsToToggle = document.querySelectorAll('.toggle-menu');
const iconToggle = document.querySelector('.icon-toggle');

const toggleMenu = () => {menuElementsToToggle.forEach((element) => {element.classList.toggle('hidden')})};

iconToggle.addEventListener('click', toggleMenu);