/// tabs
const navMenu = document.querySelectorAll('.nav-navbar-list');
const menuPizzas = document.querySelectorAll('.nav-pizzas');

navMenu.forEach(item =>{
    item.addEventListener('click', (item)=>{
        let param = item.target.dataset.id;
        openMenuPizzas(param);
        addClassActive(navMenu,item);
    });
});
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
    });
    item.target.classList.add('nav-active');
}
// pizza classes
const all = document.querySelector('.all');

class Pizza {
    constructor(img,descr,name,price,dataID,weight){
        this.img = img;
        this.descr = descr;
        this.name = name;
        this.price = price;
        this.dataID = dataID;
        this.weight = weight;
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
                <div class="pizza_inf">
                    <h4 class="pizza-name">${this.name}</h4>
                    <span class="pizza-weight">${'30см - ' + this.weight + ' гр'}</span>
                </div>
                    <div class="pizza_touch">
                        <h4 class="pizza_touch-price">${this.price}<b>руб</b></h4>
                        <div class="pizza_touch-price-btn" data-price="${this.price}" data-name="${this.name}" data-src="${this.img}" data-weight="${this.weight}">
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
    'che',
    500
    ).renderAll();

let meat = new Pizza(
    'img/pizza/1.png',
    'Острая пицца на соусе из свежих помидоров с охотничьими колбасками, колбасками пепперони, оливками, луком, сыром и перчиком холопенью. Укроп придает пицце аромат лета и свежести.',
    'Мясная',
    650,
    'mas',
    650
    ).renderAll();
let study = new Pizza(
    'img/pizza/6.png',
    'Сытная пицца на грибном соусе и соусе из свежих помидоров, с лучком, салями, маринованными огурчиками, грибами и сыром Моцарелла.',
    'Студенческая',
    550,
    'mas',
    530
    ).renderAll();
let papironi = new Pizza(
    'img/pizza/3.png',
    'В этой пицце сочетаются два вида пикантных колбасок: пепперони и салями. В меру острый вкус данной пиццы прекрасно дополняется сыром, лучком и соусом из свежих помидоров.',
    'Папирони',
    600,
    'mas',
    620
    ).renderAll();
let sea = new Pizza(
    'img/pizza/4.png',
    'Радость для любителей морепродуктов! Пицца на морском соусе с мидиями и креветками, филе тунца и оливками, луком и сыром Моцарелла.',
    'Морская',
    750,
    'new',
    480
    ).renderAll();
let marsh = new Pizza(
    'img/pizza/5.png',
    'Нежная пицца с утонченным вкусом, приготовленная по классическому рецепту с грибочками, лучком и сыром на фирменном грибном соусе.',
    'Грибная',
    550,
    'veg',
    510
    ).renderAll();
let margarita = new Pizza(
    'img/pizza/7.png',
    'Классическая пицца Маргарита с двойным сыром Моцарелла и томатами на фирменном тесте с соусом из свежих помидоров.',
    'Маргарита',
    600,
    'che',
    530
    ).renderAll();
let datskaya = new Pizza(
    'img/pizza/8.png',
    'Популярная пицца с грибным соусом и соусом из свежих помидоров, колбасным сыром и сыром Моцарелла, грибами.',
    'Датская',
    630,
    'veg',
    550
    ).renderAll();
let black = new Pizza(
    'img/pizza/9.png',
    'Пицца, приготовленная на курином и морском соусе, с начинкой из куриного филе, бекона, помидоров, лука и сыра Моцарелла.',
    'Черная мамба',
    700,
    'new',
    550
    ).renderAll();
// конец


/// КОНСТРУКТОР
const inputs = document.querySelectorAll('.topping-item-checkbox input'),
      ingridients = document.querySelectorAll('.current-pizza-item'),
      testo = document.querySelectorAll('.testo-item input');


const addIngridients = lebel => {
    const nodeArray = Array.from(lebel);
    const ingridientsArray = Array.from(ingridients);
    lebel.forEach(node => {
        node.addEventListener('click', (event)=>{
            const index = nodeArray.indexOf(node);
            if(index < 3){
                testo.forEach(el=>{
                    el.checked = false;
                    el.parentNode.classList.remove('active-item-top');
                    let dopIngArr = ingridientsArray.slice(0,3);
                    ingridientsArray.forEach((e,i)=>{
                        if(i < 3){e.classList.remove('active-toping')};
                    });
                });
                node.checked = true;
                event.target.parentNode.classList.add('active-item-top');
                ingridientsArray[index].classList.add('active-toping');
            }else{
                event.target.parentNode.classList.toggle('active-item-top');
                ingridientsArray[index].classList.toggle('active-toping');
            }
        });
    });
};
addIngridients(inputs);

//Оценка стоимости пиццы
const pizzaCost = document.querySelector('.const-price'),
      createPizzaBtn = document.querySelector('.add_constructor_pizza');

document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('topping-item-checkbox')){
        let customPizzaPrice = 0;
        const checkedIng = document.querySelectorAll('.toping_checkbox');
        setTimeout(setCustomPizzaPrice, 100, checkedIng,customPizzaPrice);
    }
})
const setCustomPizzaPrice = (input,pr) => {
    input.forEach((el) => {
        if(el.checked){
            pr += Number(el.parentNode.dataset.cost);
        }
    })
    pizzaCost.innerText = pr + 'руб';
}
// корзина
let fullPrice = 0;
let finishPrice = document.querySelector('.price-info');
let goBacket = document.querySelector('.go-to-backet');
const renderBasket = (el) => {
    let score = 1;
    el.addEventListener('click', ()=>{
        score = validNumPiza(el,score);
        renderHtml(el,score);
        fullPrice = getFullPrice();
        setFullPrice();
    });
};
const renderHtml = (el,score) =>{
    const basket = document.querySelector('.wrp-backet');
    const elementBasket = document.createElement('div');
    elementBasket.classList.add('basket-pizza');
    elementBasket.setAttribute('data-search', `${el.dataset.name}`);
    elementBasket.innerHTML = `
    <img class="basket-img" src="${el.dataset.src}" alt="">
                    <div class="basket-info">
                        <h5>${el.dataset.name}</h5>
                        <span class="basket-info-weigth">${'30cм '+ el.dataset.weight + 'гр'}</span>
                        <div class="pizza-num">
                            <img class="min-pizza mn-pl" data-item="${el.dataset.name}" src="img/min.png" alt="">
                            <span class="score">${score + 'шт'}</span>
                            <img class="plus-pizza mn-pl" data-item="${el.dataset.name}" src="img/plus.png" alt="">
                        </div>
                        <div class="pizza-price">
                            <span data-one="${el.dataset.price}" class="price">${el.dataset.price * score}</span>
                            <span class="price-rub">руб</span>
    `;
    basket.append(elementBasket);
};

const validNumPiza = (el,score) =>{
    const positions = document.querySelectorAll('.basket-info h5');
    let basketArr = [];
    positions.forEach((pos)=>{
        basketArr.push(pos.textContent);
    });
    if(basketArr.includes(el.dataset.name)){
        score++;
        removeHtml(el);
    }
    return score;
};
const removeHtml = (el) => {
    const date = document.querySelectorAll('.basket-pizza');
        date.forEach((item)=>{
            if (item.dataset.search == el.dataset.name){
                item.remove();
            }
        });
};
const setFullPrice = () => {
    finishPrice.innerText = `${fullPrice}`;
    goBacket.innerText = `${fullPrice} руб`;
};
const getFullPrice = () => {
    const date = document.querySelectorAll('.pizza-price .price');
    let nowPrice = 0;
    date.forEach((el)=>{
        nowPrice += Number(el.textContent);
    });
    return nowPrice;
};
const btns = document.querySelectorAll('.pizza_touch-price-btn');
btns.forEach((el)=>{
    renderBasket(el);
});

//удаление и добавление штук в корзину
document.addEventListener('click', (event) =>{
    if(event.target.classList.contains('min-pizza')){
        minPizza(event.target.dataset.item);
    }
    if(event.target.classList.contains('plus-pizza')) {
        plusPizza(event.target.dataset.item);
    }
});
const minPizza = (id) => {
    const basketNow = document.querySelectorAll('.basket-pizza');
    basketNow.forEach((item)=> {
        if (item.dataset.search == id){
            item.querySelector('.score').innerText = item.querySelector('.score').textContent[0]-1 +'шт';
            item.querySelector('.price').innerText -= item.querySelector('.price').dataset.one;
            fullPrice = getFullPrice();
            setFullPrice();
            if(item.querySelector('.score').textContent[0] < 1){
                item.remove();
            }
        }
    });
};
const plusPizza = (id) => {
    const basketNow = document.querySelectorAll('.basket-pizza');
    basketNow.forEach((item)=> {
        if (item.dataset.search == id){
            if (item.querySelector('.score').textContent[0] == 9){

            }else {
                item.querySelector('.score').innerText = Number(item.querySelector('.score').textContent[0]) +1 +'шт';
                item.querySelector('.price').innerText = Number(item.querySelector('.price').dataset.one) * Number(item.querySelector('.score').textContent[0]);
                fullPrice = getFullPrice();
                setFullPrice();
            }
        }
    });
};