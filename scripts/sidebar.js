const sidebarOpenButton = document.querySelector('.navbar__burger');
const sidebar = document.querySelector('.sidebar');
const sidebarContainer = document.querySelector('.sidebar__content');
const menu = document.querySelector('.navbar__section_type_navigation').cloneNode(1);
const body = document.body;
const links = Array.from(menu.children);

sidebarOpenButton.addEventListener('click', handleOpenSidebar);

function handleOpenSidebar(e){
    e.preventDefault();
    sidebar.classList.toggle('sidebar_open');
    sidebarOpenButton.classList.toggle('navbar__burger_active');
    body.classList.toggle('body_noscroll');
    renderSidebar();
};

function renderSidebar() {
    sidebarContainer.appendChild(menu);
};

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    sidebar.classList.remove('sidebar_open');
    sidebarOpenButton.classList.remove('navbar__burger_active');
    body.classList.remove('body_noscroll');
}