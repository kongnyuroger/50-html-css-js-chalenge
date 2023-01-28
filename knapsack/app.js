const list = document.querySelector('.list');
const liquid = document.querySelector('.value')
const showResult = document.querySelector('.showResult')
const textResult = document.querySelector('.text')
const items = [
    {
        name: 'mango',
        weigth: 5
    },
    {
        name: 'plum',
        weigth: 2
    },
    {
        name: 'orange',
        weigth: 4
    },
    {
        name: 'Apple',
        weigth: 6
    },
    {
        name: 'watermelon',
        weigth: 9
    },
    {
        name: 'lemon',
        weigth: 2
    }
    ,
    {
        name: 'pear',
        weigth: 3
    }
    ,
    {
        name: 'grapes',
        weigth: 1
    },
    {
        name: 'pineapples',
        weigth: 8
    }
    
]
let selectedItemWeigth = 0;
const bagCapacity = 20;

items.map((item) => {
    const showItem = document.createElement('li')
    showItem.innerHTML = item.name
    list.appendChild(showItem)
    showItem.addEventListener('click', () => {
        textResult.innerHTML = ' '
        liquid.style.height = `{selectedItemWeigth} $ px`
        selectedItemWeigth += item.weigth;
        if(selectedItemWeigth > bagCapacity){
            selectedItemWeigth = selectedItemWeigth - item.weigth;
            textResult.innerHTML = `can't add`
        }
        showResult.innerHTML = selectedItemWeigth;
        console.log(selectedItemWeigth)
    })
    
    console.log(showItem)
})

