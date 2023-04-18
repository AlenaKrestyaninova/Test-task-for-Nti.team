const profileMenuOpenButton = document.querySelector('.profile-menu_open-button');
const profileMenu = document.querySelector('.profile-menu');

profileMenuOpenButton.addEventListener('click', handleOpenProfileMenu);

function handleOpenProfileMenu(e){
    e.preventDefault();
    profileMenu.classList.toggle('profile-menu_open');
};

// document.addEventListener('mousedown', function(e) {
//     if(!(e.target.classList.contains('profile-menu_open')) && 
//         !(e.target.classList.contains('profile-menu__content')) &&
//         !(e.target.classList.contains('profile-menu__heading'))){
//         console.log(e.target)
//         profileMenu.classList.remove('profile-menu_open')
//     }
// })