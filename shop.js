const product = [
    {
        id: 0,
        image: 'element.jpg',
        title: 'Penshoppe elements',
        price: 90,
    },
    {
        id: 1,
        image: 'armanimale.jpg',
        title: 'ARMANI eau de nuit oud',
        price: 230,
    },
    {
        id: 2,
        image: 'casanova.jpg',
        title: 'Casanova Tiziona Terenzi',
        price: 220,
    },
    {
        id: 3,
        image: 'chaldeeuni.jpg',
        title: 'Chaldee Jean Patou',
        price: 120,
    },
    {
        id: 4,
        image: 'chanelcoco.jpg',
        title: 'Chanel Coco',
        price: 108,
    },
    {
        id: 5,
        image: 'daisy.png',
        title: 'Daisy Dream',
        price: 101,
    },
    {
        id: 6,
        image: 'davidoffuni.jpg',
        title: 'Cool Water',
        price: 63,
    },
    {
        id: 7,
        image: 'n5chanel.jpg',
        title: 'N°5 Chanel',
        price: 108,
    },
    {
        id: 8,
        image: 'diorwomen.jpg',
        title: 'Dior Poison',
        price: 110,
    },
    {
        id: 9,
        image: 'dolcewomen.jpg',
        title: 'The Only One',
        price: 75,
    },
    {
        id: 10,
        image: 'erosmale.png',
        title: 'Eros Flame',
        price: 110,
    },
    {
        id: 11,
        image: 'gucciuni.jpg',
        title: 'Gucci Oud',
        price: 107,
    },
    {
        id: 12,
        image: 'gucciwomen.jpg',
        title: 'Gucci Bloom',
        price: 73,
    },
    {
        id: 13,
        image: 'ckone.jpg',
        title: 'CK One',
        price: 83,
    },
    {
        id: 14,
        image: 'jpgelixir.jpg',
        title: 'JPG Le Male Elixir',
        price: 250,
    },
    {
        id: 15,
        image: 'jpgintense.jpg',
        title: 'JPG Classique Intense',
        price: 266,
    },
    {
        id: 16,
        image: 'jpglabellewomen.jpg',
        title: 'JPG La Belle',
        price: 140,
    },
    {
        id: 17,
        image: 'jphlemale.jpg',
        title: 'JPG Le Male',
        price: 119,
    },
    {
        id: 18,
        image: 'majestucuni.jpg',
        title: 'Riiffs Majestic Rose',
        price: 65,
    },
    {
        id: 19,
        image: 'nishaneuni.jpg',
        title: 'Vain & Naïve Nishane',
        price: 240,
    },
    {
        id: 20,
        image: 'pink.jpg',
        title: 'Rose Juicy Couture',
        price: 179,
    },
    {
        id: 21,
        image: 'pradamen.jpg',
        title: 'Luna Rossa Black Prada',
        price: 162,
    },
    {
        id: 22,
        image: 'thameen.jpg',
        title: 'Thameen London',
        price: 175,
    },
    {
        id: 23,
        image: 'unisex1.png',
        title: 'Montale Orange Aoud',
        price: 170,
    },
    {
        id: 24,
        image: 'valentino.jpg',
        title: 'VALENTINO',
        price: 165,
    },
    {
        id: 25,
        image: 'versacewomen.jpg',
        title: 'Pour Femme',
        price: 147,
    },
    {
        id: 26,
        image: 'women.png',
        title: 'JPG Divine',
        price: 245,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}