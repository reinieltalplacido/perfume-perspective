const product = [
    {
        id: 0,
        image: '9pmuni.jpg',
        title: 'AFNAN 9PM',
        price: 30,
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
        title: 'Davidoff Cool Water',
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
        title: 'Dolce&Gabbana The Only One',
        price: 75,
    },
    {
        id: 10,
        image: 'erosmale.png',
        title: 'Versace Eros Flame',
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
        title: 'Calvin Klein One',
        price: 83,
    },
    {
        id: 14,
        image: 'jpgelixir.jpg',
        title: 'Jean Paul Gaultier Le Male Elixir',
        price: 230.99,
    },
    {
        id: 15,
        image: 'jpgintense.jpg',
        title: 'Jean Paul Gaultier Classique Intense',
        price: 266,
    },
    {
        id: 16,
        image: 'jpglabellewomen.jpg',
        title: 'Jean Paul Gaultier La Belle',
        price: 140,
    },
    {
        id: 17,
        image: 'jphlemale.jpg',
        title: 'Jean Paul Gaultier Le Male',
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
        title: 'Viva La Juicy Rose Juicy Couture',
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
        title: 'VERSACE Eros Pour Femme',
        price: 147,
    },
    {
        id: 26,
        image: 'women.png',
        title: 'Jean Paul Gaultier Divine',
        price: 245,
    },
];
const categories = [...new Set(product.map((item) => { return item }))]
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return (
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});
const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price.toFixed(2)}</h2>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories)