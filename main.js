const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuMobileBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



//Eventos
eventListeners();
function eventListeners() {
    menuEmail.addEventListener('click', toggleDesktopMenu);

    menuMobileBtn.addEventListener('click', toggleMobileMenu);

    menuCarritoIcon.addEventListener('click', toggleCarrito);
}



//Funciones
function toggleDesktopMenu() {

    const isAsideMenuClosed = aside.classList.contains('inactive');

    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
        }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideMenuClosed = aside.classList.contains('inactive');

    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
        }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarrito() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const ismenuCarritoClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
    } else if(!ismenuCarritoClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Monitor',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Desk',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});




/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

function renderProducts(arr) {
    for ( product of arr ) {

        const { image, price, name } = product;

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + price;

        const productName = document.createElement('p');
        productName.innerText = name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

