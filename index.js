var container = document.getElementById("container")
var links1 = document.getElementById("links-1")
var links2 = document.getElementById("links-2")
var logout =  document.getElementById("logout")
var username = document.querySelector("#links-2 span")
var count = document.getElementById("cart-circle")

var data = [
    {
        id: 1,
        title: "Dark",
        img: "img/choclate.jpg",
        price: 25,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 2,
        title: "Diverse",
        img: "img/44.jpg",
        price: 30,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 3,
        title: "Almonds",
        img: "img/hcku1tv1LglntVuXZVqQ4SIUVOf7Q14b9GbgGIiS_lg.png",
        price: 40,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 4,
        title: "Sweet",
        img: "img/1018564981_11_0_1268_707_600x0_80_0_0_01fd7a4a5fcc262e59a3ab7da14e65b9.jpg",
        price: 20,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 5,
        title: "Gift1",
        img: "img/177524.jpg",
        price: 6,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 6,
        title: "Gift2",
        img: "img/8c0c7-1.jpg",
        price: 10,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 7,
        title: "Gift3",
        img: "img/box-chocolates-with-wooden-box-that-says-chocolate-written-it_1148384-83755.jpg",
        price: 5,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 8,
        title: "Gift4",
        img: "img/Screenshot-2023-12-26-135956.png",
        price: 20,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 9,
        title: "Gift5",
        img: "img/1200x675_cmsv2_59c5d4ad-1c2f-549b-8e3f-6606ea012614-3955656.jpg",
        price: 20,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 10,
        title: "Gift6",
        img: "img/65b3f2554347b76a6d237f70_-_800.jpeg",
        price: 10,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 11,
        title: "Gift7",
        img: "img/gg.jpg",
        price: 5,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    },
    {
        id: 12,
        title: "Snickers",
        img: "img/3.jpeg",
        price: 6,
        datail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati"
    }
]

if(localStorage.getItem('FirstName')){
    links1.style.display = 'none'
    links2.style.display = 'block'
}
username.innerHTML = localStorage.getItem('FirstName')


function Draw (){
  var x = data.map((item) => {
        return(
            `<div id="card">
               <img src="${item.img}">
               <h2>${item.title}</h2>
               <p>${item.datail}</p>
               <p id="price">${item.price}$</p>
               <button id="b1" onclick= AddTocart(${item.id})>
               <i class="fa fa-cart-plus" style="font-size: 19px;"></i></button>
               <button id="b2">
               <i class="fa fa-thumbs-o-up" style="font-size: 19px;"></i></button>
          </div>`
        )
    })
    container.innerHTML= x;
}
Draw()


logout.addEventListener('click', Logout)
function Logout () {
    localStorage.clear()
    setTimeout(() => {
        location = 'index.html'
    }, 2000)
}

if (localStorage.getItem('products')){
    var products = JSON.parse(localStorage.getItem('products'))
} else {
    var products = []
}
count.innerHTML = products.length


function AddTocart(id) {

    if(localStorage.getItem('FirstName')){
        var addedProducts = data.find ((e) => {
            return e.id === id
        })
        products = [...products, addedProducts]
        count.innerHTML = products.length
        localStorage.setItem('products', JSON.stringify(products))
    }
    else{
        confirm("You must register an account on the site first")
    }
    
}

