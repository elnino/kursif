const menuIcon = document.querySelector('.ui-menu-icon');

menuIcon.addEventListener('click', function() {
  const bodyElem = document.querySelector('body'),
        menuList = document.querySelector('.ui-menu');
  
  bodyElem.classList.toggle('overflow');
  menuIcon.classList.toggle('ui-menu-icon-open');
  menuList.classList.toggle('ui-menu-open');

  return;
})