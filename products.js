var container = document.getElementById("container")
var data = JSON.parse(localStorage.getItem('products'))
var totalprice = document.getElementById("total-pricee")
var totaldiv = document.getElementById("total-price")
var notorder = document.getElementById("notorder")
var links1 = document.getElementById("links-1")
var links2 = document.getElementById("links-2")
var username = document.querySelector("#links-2 span")


if(localStorage.getItem('FirstName')){
  links1.style.display = 'none'
  links2.style.display = 'block'
}
username.innerHTML = localStorage.getItem('FirstName')


function Draw (){
    var x= data.map((item) => {
          return(
              ` <div id="cardp">
                 <img src="${item.img}">
                 <h2>${item.title}</h2>
                 <p id="price">${item.price}$</p>
                 <button onclick= Delete(${item.id})>
                 <i class="fa fa-minus-circle" style="font-size: 15px;"></i> Delete From Cart</button>
                 <span>Num:1</span>
            </div>`
          )
      })
      container.innerHTML= x
  }
  Draw()

  if (data.length === 0){
    totaldiv.style.display = 'none' 
    notorder.style.display = 'block'
  } else {
    totaldiv.style.display = 'block'  
    notorder.style.display = 'none'
  }
  
  var total= 0
  data.map((e) => {
    total += e.price
  })
  totalprice.innerHTML = total + "$"
  
  function Delete(id) {
    var deleteproduct = data.map ((e) => {
      return e.id 
  }).indexOf(id)
     data.splice(deleteproduct, 1)
     localStorage.setItem('products', JSON.stringify(data))
     location.reload()
  }