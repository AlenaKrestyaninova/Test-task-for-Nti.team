const profileMenuOpenButton = document.querySelector('.profile-menu_open-button');
const profileMenu = document.querySelector('.profile-menu');
const layout = document.querySelector('.layout');

profileMenuOpenButton.addEventListener('click', handleOpenProfileMenu);

function handleOpenProfileMenu(e){
    e.preventDefault();
    profileMenu.classList.toggle('profile-menu_open');
    layout.classList.toggle('layout_open');
};

layout.addEventListener('mousedown', function(e) {
    profileMenu.classList.remove('profile-menu_open');
    layout.classList.remove('layout_open')
})