
const cart = [];

// let isInCart = false;
let totalPaid = 0;
//changed to let to reassign, shot in the dark but I'm trying



const products = [
  {
    name: "cherry",
    price: 1.00,
    quantity: 0,
    productId: 100,
    image: "./images/cherry.jpg"
  },
  {
    name: "orange",
    price: 1.50,
    quantity: 0,
    productId: 101,
    image: "./images/orange.jpg"
  },
  {
    name: "strawberry",
    price: 2.00,
    quantity: 0,
    productId: 102,
    image: "./images/strawberry.jpg"
  }
];

//@desc calculates total cost of all items in cart
//@params none
//@return returns number representing total cost with 2 decimal places

const cartTotal = ()=>{
  let currentTotal = 0;
  for(let i = 0; i < cart.length; i++){
    currentTotal += cart[i].quantity * cart[i].price;
  }
  total = Number(currentTotal);
  return Number(currentTotal.toFixed(2));
};

//@desc processes payment and returns change or remaining balance
//@params num - payment amount
//@return returns positive number (customerChange) or negative number (amount still owed)

const pay = (num)=>{
 let totalCost = cartTotal();
 const remainingBalance = totalCost - totalPaid;


 if(num >= remainingBalance) {
  const customerChange = num - remainingBalance;
  totalPaid += remainingBalance;
  return customerChange;
 }else{
  totalPaid += num;
  return num - remainingBalance;
  
 }
}

//@desc increases quantity of existing product in cart by 1
//@params productId - unique identifier for product
//@return returns nothing (void)

const increaseQuantity = (productId)=>{
  for(let i = 0; i < cart.length; i++){
    if(cart[i].productId === productId){
      cart[i].quantity += 1;
     return 
    }
  }
}
//@desc decreases quantity of product in cart by 1, removes if quantity reaches 0
//@params productId - unique identifier for product
//@return returns nothing (void)

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





//@desc adds product to cart if not already present, then increases quantity
//@params productId - unique identifier for product to add
//@return returns nothing (void) or null if product not found

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


//@desc removes product from cart based on productId
//@params productId - unique identifier for product to remove
//@return returns nothing (void)

const removeProductFromCart = (productId)=>{
  for(let i = cart.length - 1; i >= 0; i--){
   if(cart[i].productId === productId){
    cart[i].quantity = 0;
      cart.splice(i, 1);
      
     }
     
    }
    return
  }


  const currency = {
    rates:{
      USD: 1.0,
      EUR: 0.85,
      JPY: 150

    },
    
  //@desc converts US dollars to specified foreign currency
  //@params dollarAmount - amount in USD, foreignCurrency - target currency code
  //@return returns converted amount rounded to 2 decimal places (or whole number for JPY)
  
    convertDollars: function(dollarAmount, foreignCurrency){
      const convertedMoney = dollarAmount * this.rates[foreignCurrency];

      if(foreignCurrency === "JPY"){
        return Math.round(converted);
      }

      return Math.round(convertedMoney * 100) / 100;
    }

  };
 
//@desc resets all product quantities to 0 in products array\
//@params none
//@return returns nothing (void)

  const emptyCart = () => {
  for(let i = 0; i < cart.length; i++){
    cart[i].quantity = 0;
    if(cart[i].quantity = 0){
      cart[i].splice(i, 1);
      return
    }
  }
}





module.exports = {
   products,
   cart,
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

