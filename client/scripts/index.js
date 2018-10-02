
const $ = query => document.querySelector(query);
const $$ = query => document.querySelectorAll(query);

localStorage.setItem('productsId','[]')
const addBtn = $('.addToCart');
// addBtn.onclick =  function () {
//     let items =   JSON.parse(localStorage.getItem('productsId'));
//     items.push(addBtn.getAttribute('data-id'))
//     localStorage.setItem('productsId',JSON.stringify(items))
//     $('#cartCount').value = localStorage.length
// }

$('.hamburger').onclick = function toggleChange() {
    if(this.classList.contains('nav'))
    {
        $('.sidenav').classList.remove('side-active');
        $('.main').classList.remove('main-leftsidenav-first-transition');

        $('.sidenav').classList.add('side-deactive');
        $('.main').classList.add('main-leftsidenav-second-transition');

        
        $('.sidenav').classList.remove('side-deactive');
        $('.main').classList.remove('main-leftsidenav-second-transition');

       
        this.classList.remove('nav');
    }
    else
    {
        this.classList.add('nav');

        $('.sidenav').classList.remove('side-deactive');
        $('.main').classList.remove('main-leftsidenav-second-transition');

        $('.sidenav').classList.add('side-active');
        $('.main').classList.add('main-leftsidenav-first-transition');
    }
}


$('.cart').onclick = function toggleChange() {
    if(this.classList.contains('right-side-nav'))
    {
        $('.right-sidenav').classList.remove('rightside-nav-active');
        $('.main').classList.remove('main-rightsidenav-first-transition');
        $('.right-sidenav').classList.add('rightside-nav-deactive');
        $('.main').classList.add('main-rightsidenav-second-transition');
    
        $('.right-sidenav').classList.remove('rightside-nav-deactive');
        $('.main').classList.remove('main-rightsidenav-second-transition');

        this.classList.remove('right-side-nav');
    }
    else
    {
        this.classList.add('right-side-nav');
        $('.right-sidenav').classList.remove('rightside-nav-deactive');
        $('.main').classList.remove('main-rightidenav-second-transition');
        $('.right-sidenav').classList.add('rightside-nav-active');    
        $('.main').classList.add('main-rightsidenav-first-transition');
    }
}






