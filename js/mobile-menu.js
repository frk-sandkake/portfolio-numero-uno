const toggleButton = document.querySelector('#toggleMobileMenu');
const showMobileMenu = document.querySelector('#menu-0');

toggleButton.addEventListener('click', function() {
  if (showMobileMenu.classList.contains('is-active')) {
    showMobileMenu.classList.remove('is-active');
  } else {
    showMobileMenu.classList.add('is-active');
  }
});