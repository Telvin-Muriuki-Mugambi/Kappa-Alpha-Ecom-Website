import { useMemo, useState } from 'react';
//A custom hook to create add to cart function
export function useCart() {
    //This is a state for storing the added items to the cart
    const [cartItems, setCartItems] = useState([]);
    //Used to toggle the shopping cart visibility
    const [isCartOpen, setIsCartOpen] = useState(false);
    //Function to add a product to the cart
    const [checkedItems, setCheckedItems] = useState([]);
    const addToCart = (product) => {
        //An object used to store the new added info for the product
        const safeProduct = {
            id: product.id,
            name: product.name,
            price: Number(product.price),
            quantity: 1,
        };

        //Setter function used to add the selected product to the cartItems array
        setCartItems((currentItems) => {
            //Used to find the selected product using the ID.
            const existingItem = currentItems.find((item) => item.id === safeProduct.id);
            //Conditional statement used to add the item if it is selected multiple times
            //It increases the quantity number without adding the same product again
            if (existingItem) {
                return currentItems.map((item) =>
                item.id === safeProduct.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }
            return [...currentItems, safeProduct];
        });
        console.log(`${product.name} was added to the cart`);
        setCheckedItems([...checkedItems, cartItems]);
        setIsCartOpen(true);
    };
    //Used to remove the product from the cart by usind the product's ID
    const removeFromCart = (productId) => {
        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                //Used to filter only the selected product to be removed. 
                //Otherwise all products will be removed
                .filter((item) => item.quantity > 0)
        );
        console.log(`${productId} was removed`);
    };
    //useMemo was used for the caching the total amount
    const totalPrice = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cartItems]
    );
    //Used to toggle the shopping cart
    const toggleCart = () => {
        console.log("Shopping cart is clicked"); 
        setIsCartOpen((currentValue) => !currentValue)
    };

    return {
        cartItems,
        isCartOpen,
        totalPrice,
        checkedItems,
        addToCart,
        removeFromCart,
        toggleCart,
        setIsCartOpen,
    };
}

export default useCart;