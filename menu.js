const menuIcon = document.getElementById('menuIcon');
menuIcon.addEventListener('click', () => {
  
    document.getElementById('menu').style.display = 'block';
});

const closingIcon = document.getElementById('closingIcon');
closingIcon.addEventListener('click', () => {

    document.getElementById('menu').style.display = 'none';

});