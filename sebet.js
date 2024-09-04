const store_Container= document.querySelector('.store_Container');
const name_input = document.getElementById("name_input");
const price_input = document.getElementById("price_input");
const img_Url_input = document.getElementById("img_Url_input");
const basket_container= document.querySelector(".basket_container");
let products = [{
    name: "Sunglass",
    img_Url : "https://th.bing.com/th?id=OIF.uYRm10t4EWyUdIZ%2bXMk8uQ&w=165&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",

    price : 139.99
},
{
   name: "Women Bag",
   img_Url : "https://th.bing.com/th/id/OIP.r0E1GJYjbZOb8sW339EoJQHaHa?w=189&h=189&c=7&r=0&o=5&dpr=2&pid=1.7",
   price: 39.99 
},
{
    name : "Man Shoes",
    img_Url : "https://th.bing.com/th/id/OIP.WY7pVHddHXuzfUH_ajfEcQHaHa?w=170&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    price : 39.99
},
{
    name : "Airpods",
    img_Url : "https://th.bing.com/th?q=AirPods+Charging+Case&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=en-WW&cc=AZ&setlang=en&adlt=moderate&t=1&mw=247",
    price :139.99
},
{
    name:"Woman Hat ",
    img_Url: "https://th.bing.com/th/id/OIP.2JP0MWoCTKdNN_PMWZsFqwHaLF?w=186&h=278&c=7&r=0&o=5&dpr=2&pid=1.7",

    price : 439.99
}]
let bakset = []; 
                 
showProducts();
 function showProducts() {
    store_Container.innerHTML= "";
    products.map((obj,index)=>{
    const product_div = document.createElement('div');
    product_div.className = "product-container";
    const product_img = document.createElement('img');
    product_img.src = obj.img_Url;

    const inner_div = document.createElement('div');
    const h3_name= document.createElement('h3');
    h3_name.textContent= obj.name;
    const p_product = document.createElement('p');
    p_product.textContent= "Price"+obj.price +"$";

    const btn_add =document.createElement('button');
    btn_add.textContent="ADD";
    btn_add.onclick =()=>{
        bakset.push(obj);
        showBasket();
    }

    const btn_delete = document.createElement('button');
    btn_delete.textContent = "DELETE";
    btn_delete.onclick = () => {
        products.splice(index,1);
        showProducts();

    

    }
     inner_div.append(h3_name,p_product,btn_add,btn_delete);
     product_div.append(product_img,inner_div);
     store_Container.append(product_div);

 
    })
 }
  function addNewProduct(){
  event.preventDefault();
  let obj = {
    name:name_input.value,
    price:parseFloat(price_input.value),
    img_Url:img_Url_input.value
     
  }
  products.push(obj);
    showProducts();

    

 }
 function showBasket(){
    bakset.map((obj,index)=>{

     const div = document.createElement('div');
     const img = document.createElement('img');
     img.src =obj.img_Url;
     const h3 =document.createElement('h3');
     h3.textContent = obj.name;
     const p = document.createElement('p');
     p.textContent = "Price" + obj.price;
     div.append(img,h3,p);
     basket_container.append(div);





    })
 }