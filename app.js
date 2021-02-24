// grabbing all the element
const navbarToggleBtn = document.querySelector(`#navbar__toggle`);
const navbarList = document.querySelector(`#navbar__list`);

navbarToggleBtn.addEventListener(`click`, () => {
    navbarToggleBtn.classList.toggle(`active`);
    navbarList.classList.toggle(`active`);
});