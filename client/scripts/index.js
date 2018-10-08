import io from 'socket.io-client';


const socket = io.connect('/chat-nsp');
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


$('.cart').onclick = function () {
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
      
        $('.right-sidenav').classList.add('rightside-nav-active');    
        $('.main').classList.add('main-rightsidenav-first-transition');
    }
}

$('.close-right-nav').onclick = function () {
    
    $('.right-sidenav').classList.remove('rightside-nav-active');    
    $('.main').classList.remove('main-rightsidenav-first-transition');

    $('.cart').classList.remove('right-side-nav');

}

$('.chat-btn').onclick = function(){
    $('.chat-box').classList.add('visible-chatbox');
    $('.displayName').value = prompt('Enter Your Name: ', 'Client');
    this.classList.add('hidden-chatbtn');
}

$('.submit-msg').onclick = function () {
    const name = $('.displayName').value;
    const message = $('.msg-text').value;
    const msgJson = {"name" : name, 
                     "message" : message};
    socket.emit('chat message', msgJson);
    $('.msg-text').value ='';
}

socket.on('chat recieved', msg =>  {
    var li = document.createElement('li');
    var liText = document.createTextNode(msg);
    li.appendChild(liText);
    $('#messages').append(li); 
});








