import { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        const safeProduct = {
            id: product.id,
            name: product.name,
            price: Number(product.price),
            quantity: 1,
        };

        setCartItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === safeProduct.id);
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
        setIsCartOpen(true);
    };

    const removeFromCart = (productId) => {
        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
        console.log(`${productId} was removed`);
    };

    const totalPrice = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cartItems]
    );

    const toggleCart = () => {
        console.log("Shopping cart is clicked");
        setIsCartOpen((currentValue) => !currentValue);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                isCartOpen,
                totalPrice,
                addToCart,
                removeFromCart,
                toggleCart,
                setIsCartOpen,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
