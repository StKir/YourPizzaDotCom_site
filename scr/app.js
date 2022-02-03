/// tabs
const navMenu = document.querySelectorAll('.nav-navbar-list');
const menuPizzas = document.querySelectorAll('.nav-pizzas');

navMenu.forEach(item =>{
    item.addEventListener('click', (item)=>{
        let param = item.target.dataset.id;
        openMenuPizzas(param);
        addClassActive(navMenu,item);
    })
})
// console.log(navMenu[0].dataset.id);
function openMenuPizzas(param) {
    menuPizzas.forEach(el=>{
        el.classList.remove('active-pizzas');
        if(el.classList.contains(`${param}`)){
            el.classList.add('active-pizzas');
        }
    });
}
function addClassActive(allItems,item) {
    allItems.forEach(el=>{
        el.classList.remove('nav-active');
    })
    item.target.classList.add('nav-active');
}
// pizza classes
const all = document.querySelector('.all');

class Pizza {
    constructor(img,descr,name,price,dataID){
        this.img = img;
        this.descr = descr;
        this.name = name;
        this.price = price;
        this.dataID = dataID;
    }
    renderAll(){
        const elementCard = document.createElement('div');
        elementCard.classList.add('pizza');
        const elementHTML = `
            <div class="pizza-img-info">
                <img class="pizza-img" src='${this.img}' alt="">
                <div class="pizza-descr">
                    <p>${this.descr}</p>
                </div>
            </div>
                <h3 class="pizza-name">${this.name}</h3>
                    <div class="pizza_touch">
                        <h3 class="pizza_touch-price">${this.price}<b>руб</b></h3>
                        <div class="pizza_touch-price-btn" data-price="${this.price}" data-name="${this.name}" >
                            В корзину
                    </div>
            </div>       
        `;
        elementCard.innerHTML = elementHTML;
        all.append(elementCard);

        const dataElement = document.querySelector(`.${this.dataID}`);
        const data = document.createElement('div');
        data.innerHTML = elementHTML;
        dataElement.append(data);
        
    }
}
// Доабавление пицц
let milanskaya = new Pizza(
    'img/pizza/2.png',
    'Знаменитая фирменная пицца с грибным соусом, соломкой ветчины, помидорами, луком, грибами и сыром Моцарелла.',
    'Миланская',
    750,
    'che'
    ).renderAll();

let meat = new Pizza(
    'img/pizza/1.png',
    'Острая пицца на соусе из свежих помидоров с охотничьими колбасками, колбасками пепперони, оливками, луком, сыром и перчиком холопенью. Укроп придает пицце аромат лета и свежести.',
    'Мясная',
    650,
    'mas'
    ).renderAll();
let study = new Pizza(
    'img/pizza/6.png',
    'Сытная пицца на грибном соусе и соусе из свежих помидоров, с лучком, салями, маринованными огурчиками, грибами и сыром Моцарелла.',
    'Студенческая',
    550,
    'mas'
    ).renderAll();
let papironi = new Pizza(
    'img/pizza/3.png',
    'В этой пицце сочетаются два вида пикантных колбасок: пепперони и салями. В меру острый вкус данной пиццы прекрасно дополняется сыром, лучком и соусом из свежих помидоров.',
    'Папирони',
    600,
    'mas'
    ).renderAll();
let sea = new Pizza(
    'img/pizza/4.png',
    'Радость для любителей морепродуктов! Пицца на морском соусе с мидиями и креветками, филе тунца и оливками, луком и сыром Моцарелла.',
    'Морская',
    750,
    'new'
    ).renderAll();
let marsh = new Pizza(
    'img/pizza/5.png',
    'Нежная пицца с утонченным вкусом, приготовленная по классическому рецепту с грибочками, лучком и сыром на фирменном грибном соусе.',
    'Грибная',
    550,
    'veg'
    ).renderAll();
let margarita = new Pizza(
    'img/pizza/7.png',
    'Классическая пицца Маргарита с двойным сыром Моцарелла и томатами на фирменном тесте с соусом из свежих помидоров.',
    'Маргарита',
    600,
    'che'
    ).renderAll();
let datskaya = new Pizza(
    'img/pizza/8.png',
    'Популярная пицца с грибным соусом и соусом из свежих помидоров, колбасным сыром и сыром Моцарелла, грибами.',
    'Датская',
    630,
    'veg'
    ).renderAll();
let black = new Pizza(
    'img/pizza/9.png',
    'Пицца, приготовленная на курином и морском соусе, с начинкой из куриного филе, бекона, помидоров, лука и сыра Моцарелла.',
    'Черная мамба',
    700,
    'new'
    ).renderAll();
// конец

const btns = document.querySelectorAll('.pizza_touch-price-btn');
console.log(btns[0].dataset.name);