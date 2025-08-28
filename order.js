import { localstore, ordersummery ,products ,cart,quantityall ,tracpackage } from "./database.js";
let date123;

console.log(ordersummery)
// console.log(ordersummery)
let src1=''
let allvalue;
let allprice;


// window.onload=function(){
// // if(!sessionStorage.getItem("reloaded")){
// //     sessionStorage.getItem("reloaded","true")
// //     location.reload()
// // }
// // }
ordersummery.forEach((element) => {
   
    let element123=element.cartel.productId
   date123=element.day4
   allprice=element.totalprice
    products.forEach((cartvalue)=>{
    if (element123 === cartvalue.id){
        allvalue=cartvalue;
    }
    }) 
    let html6=`<div class=" maini-div">
    <div class=" maini-div1">
       
        
        <div class="div">
            <div class="div-1">
                <img class="img-3-1" src="${allvalue.image}">
            </div>
            <div class="div-2">
                <div class="div-4" >${allvalue.name}</div>
                <div class="div-5">Arriving on: ${element.day4}</div>
                <div>Quantity: ${element.cartel.quantity}</div>
                <div class="div-6">
                 
                    <button class="button-del add-js"data-ali1="${element.cartel.productId}">
                    <div>
                        <img class="cart-png" src="/images/icons/cart-icon.png">
                    </div>
                    <div class="add ">Add to cart</div>    
                    </button></div>
                   <a href="/all-htmls/tracking.html"> 
                    <button data-ali2="${element.cartel.productId}" class="track track-js">Track packsge</button>
                    </a>
                </div>
                
            <div class="div-7">
            
            
            </div>
        </div>
    </div>
</div>`

src1+=html6
});
let rendomid=crypto.randomUUID()

// console.log(allprice)
document.querySelector('.mainord-js').innerHTML=src1
document.querySelector('.js-1-1').innerHTML=date123
document.querySelector('.js-2-1').innerHTML=`₹ ${allprice}`
document.querySelector('.js-3-1').innerHTML=rendomid


localStorage.removeItem('carts')


let div11 =` <div> <img class="add1" src="/images/icons/checkmark-white.png"></div><div class="add-1-1">Added</div>`
let div12 =`<div><img class="cart-png" src="/images/icons/cart-icon.png"></div><div class="add">Add to cart</div>  `

document.querySelectorAll('.add-js').forEach((all)=>{
    all.addEventListener('click',()=>{
       
        let productid11= all.dataset.ali1
        ordersummery.forEach((olo)=>{
         let productid1= olo.cartel.productId
        //  console.log( productid11)
         
          if(productid1===productid11){
            // console.log(productid1)
              all.innerHTML=div11
              setTimeout(()=>{
                 all.innerHTML=div12
              },1000)
           }
           if(productid1===productid11){
            cart.push({
                productId:  productid11,
                quantity: 1,
                way:'1'
            })
            let amna121=0;
            
            cart.forEach((bl1)=>{
                // if(bl1.productId===productid11){
             amna121=   amna121+1;
                localStorage.setItem("amna",JSON.stringify(amna121))
            
        })
        console.log(amna121)
                //  amna121= JSON.parse(localStorage.getItem("amna"))
                // amna121+=1;
                
                
            // let amnali=    localStorage.setItem("amna",JSON.stringify(amna121))
         let againvalue=   JSON.parse(localStorage.getItem("amna")) 
               
            document.querySelector('.cart-num-1').innerHTML=againvalue
                // }
            // })
            localstore()
           }
           
        })
       
        
    })
   
    // let againvalue=   JSON.parse(localStorage.getItem("amna")) 
    // document.querySelector('.cart-num-1').innerHTML=againvalue    
   // document.querySelector('.cart-num').innerHTML=againvalue
})

  
// console.log(cart)

// let ali=1231111
// function ali(){
// localStorage.setItem("quantity",JSON.stringify(ali))
// }
// ali()
localStorage.removeItem('traking')
document.querySelectorAll('.track-js').forEach((all)=>{
    all.addEventListener('click',()=>{
//////////////make our get intractive when we click it/////////
        localStorage.removeItem('traking')
        localStorage.setItem("traking",JSON.stringify(tracpackage))
//////////////////////////////////
      let prodvctiddl= all.dataset.ali2
    //    console.log(prodvctiddl)
       ordersummery.forEach((order)=>{
        if(order.cartel.productId===prodvctiddl){
           
            if(tracpackage.length===0){
                tracpackage.push(order)
                // console.log('ali')
                localStorage.setItem("traking",JSON.stringify(tracpackage))
            }
            
           
           
         
        }
       })
    })
})



console.log(tracpackage.length)



