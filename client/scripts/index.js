
const $ = query => document.querySelector(query);

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
        $('.sidenav').style.width = "0";
        $('.main').style.marginLeft = "0";
        $('.main').style.marginRight = "0";
        this.classList.remove('nav');
    }
    else
    {
        this.classList.add('nav');
        $('.sidenav').style.width = "300px";
        $('.main').style.marginRight = "-300px";
        $('.main').style.marginLeft = "300px";
    }
}





