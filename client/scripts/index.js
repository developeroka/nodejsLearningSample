
const $ = query => document.querySelector(query);

localStorage.setItem('productsId','[]')
const addBtn = $('.addToCart');
// addBtn.onclick =  function () {
//     let items =   JSON.parse(localStorage.getItem('productsId'));
//     items.push(addBtn.getAttribute('data-id'))
//     localStorage.setItem('productsId',JSON.stringify(items))
//     $('#cartCount').value = localStorage.length
// }

$('.humberger').onclick = function toggleChange() {
    this.classList.toggle("change");
}

