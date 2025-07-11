/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

const cart = [];
// let total = 0;
// let isInCart = false;
let totalPaid = 0;
//changed to let to reassign, shot in the dark but I'm trying



const products = [
  {
    name: "cherry",
    price: 1.99,
    quantity: 0,
    productId: 100,
    image: "./images/cherry.jpg"
  },
  {
    name: "orange",
    price: 3.99,
    quantity: 0,
    productId: 101,
    image: "./images/orange.jpg"
  },
  {
    name: "strawberry",
    price: 2.50,
    quantity: 0,
    productId: 102,
    image: "./images/strawberry.jpg"
  }
];

const cartTotal = ()=>{
  let currentTotal = 0;
  for(let i = 0; i < cart.length; i++){
    currentTotal += cart[i].quantity * cart[i].price;
  }
  total = Number(currentTotal);
  return Number(currentTotal.toFixed(2))
};



// const increaseQuantity = (productId)=>{
//   for(let i = 0; i < products.length; i++){
//     if(products[i].productId === productId){
//       products[i].quantity += 1;
//       return
//     }
//   }
// };



const pay = (num)=>{
 const totalCost = cartTotal();
 if(num >= totalCost) {
    totalPaid += totalCost;
    return num - totalCost;
 }else{
    return totalCost - num;
 }
 
}


const increaseQuantity = (productId)=>{
  for(let i = 0; i < cart.length; i++){
    if(cart[i].productId === productId){
      cart[i].quantity += 1;
     return 
    }
  }
}

// const decreaseQuantity = (productId)=>{
//   for(let i = 0; i < products.length; i++){
//     if(products[i].productId === productId){
//       if(products[i].quantity > 0) {
//       products[i].quantity -= 1;
//         if(products[i] === 0){
//           emptyCart(productId);
//         }
//       }

//     }
//   } 
        
      
    
//     return
//   }
const decreaseQuantity = (productId) => {
  for(let i = cart.length - 1; i >= 0; i--){
    if(cart[i].productId === productId){
      if(cart[i].quantity > 0){
        cart[i].quantity -= 1;
          if(cart[i].quantity === 0){
            cart.splice(i, 1);
          }
      }
      return
    }
  }

  for(let i = 0; i < products.length; i++){
    if(products[i].productId === productId){
      if(products[i].quantity > 0){
        products[i].quantity -= 1;
      }
      return
    }
  }
}







console.log("cart before:", cart)

const addProductToCart = (productId)=>{
  //make sure you change the variable names in loop!
  for(let i = 0; i < products.length; i++){
    if(products[i].productId === productId){
      let isInCart = false;

      for(let x = 0; x< cart.length; x++){
        if(productId === cart[x].productId){
          isInCart = true;
          break;
        }
      }

      if(!isInCart){
        cart.push(products[i]);
      }
       increaseQuantity(productId)
        return;
        
    }
  }
    return null;
};

const removeProductFromCart = (productId)=>{
  for(let i = cart.length - 1; i >= 0; i--){
   if(cart[i].productId === productId){
    cart[i].quantity = 0;
      cart.splice(i, 1);
      
     }
     
    }
    return
  }
  // for(let x = 0; x < cart.length; i++){
  //   if(cart[i].productId === productId){
  //     cart[i].quantity = 0;
      
  //   }else if(cart.length === 0){
  //     emptyCart()
      
    
  const currency = {
    rates:{
      USD: 1.0,
      EUR: 0.85,
      JPY: 150

    },

    convertDollars: function(dollarAmount, foreignCurrency){
      const convertedMoney = dollarAmount * this.rates[foreignCurrency];

      if(foreignCurrency === "JPY"){
        return Math.round(converted);
      }

      return Math.round(convertedMoney * 100) / 100;
    }

  };
 
  const emptyCart = () => {
 

  for(let i = 0; i < products.length; i++){
    products[i].quantity = 0;
    if(products[i].quantity = 0){
      products[i].splice(i, 1);
      return
    }
  }
}





console.log(cart)


module.exports = {
   products,
   cart,
  //  total,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   currency
}

