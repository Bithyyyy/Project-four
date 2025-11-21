document.getElementById("product-box").addEventListener("click",function(e){
    if(e.target.className.includes("cart-btn")){
        const totalPrice = document.getElementById("total-price").innerHTML
        const productPrice = e.target.closest(".card").querySelector(".product-price").innerHTML

        const currentPrice = Number(totalPrice) + Number(productPrice)

        document.getElementById("total-price").innerText = currentPrice

        const totalQuantity = document.getElementById("total-quantity").innerHTML

        const currentQuantity = Number(totalQuantity) +1;

        document.getElementById("total-quantity").innerText = currentQuantity

        

        const productImg = e.target.parentNode.parentNode.children[0].children[0].src

        const productTitle = e.target.parentNode.parentNode.children[1].children[0].innerText


        const productPrice2 = e.target.parentNode.parentNode.children[1].children[2].innerText

        const newCart = document.createElement("div")

        newCart.innerHTML = `
        <div class="bg-gray-200 rounded-xl flex justify-between p-4">
                  <img src="${productImg}" alt="" class="w-10" />
                  <div class="">
                    <h2 class="font-bold">${productTitle}</h2>
                    <h2 class="">${productPrice2} Tk</h2>
                  </div>
        </div>
        `
        

        const cartContainer = document.getElementById("cart-container")

        cartContainer.append(newCart);
    }
})

document.getElementById("btn-clear").addEventListener("click",function(){
    const cartContainer = document.getElementById("cart-container")
    cartContainer.innerHTML = "";

    document.getElementById("total-quantity").innerText =0;

    document.getElementById("total-price").innerText =0;


})