//To access the variable cart outside of this file we export
export const cart = [];

//THIS CODE ADDS THE PRODUCT TO THE CART
    export const addToCart = (productId) => {
      let matchingItem;

      cart.forEach((cartItem) => {
        if (productId === item.productId) {
          matchingItem = cartItem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        });
      }
    };