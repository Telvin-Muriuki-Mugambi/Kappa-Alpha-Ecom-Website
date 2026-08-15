import { createContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

async function ProductsProvider({children}){
    //State for storing the products
    const [products, setProducts] = useState([]);
    //State for loading.Used when fetching data
    const [loading, setLoading] = useState(true);
    //Setting an error
    const [error, setError] = useState(null);

    //Async function for fetching the data
    const fetchProducts = async () => {
        try{
            setLoading(true);
            const response = fetch ('http://localhost:3000/products');

            if (!response.ok){
                throw new Error("Could not fetch the products");
                return;
            }
            const data = await response.json();
            setProducts(data);
            setError(null);
        }
        catch (err){
            console.error(err);
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    },[])

    const addProduct = async (newProduct) =>{
        try{
            const response = fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newProduct),
            });

            if (!response.ok){
                throw new Error (`Could not add ${newProduct}`);
                return;
            }

            const savedNewProduct = await response.json();
            setProducts((currentProducts) => [...currentProducts, savedNewProduct]);
            return savedNewProduct;
        }
        catch(err){
            console.error(err);
            setError(err.message);
            return;
        }
    };

    const deleteProduct = async (productId) => {
        try{
            const response = fetch(`http://localhost:3000/products/${productId}`, {
                method: 'DELETE',
            });

            if (!response.ok){
                throw new Error('Could not delete product');
            }

            setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productId));
            return true;
        }
        catch(err){
            console.error(err);
            return false;
        }
    };

    const updateProduct = async (productId, updatedProduct) => {
        try{
            const response = fetch(`http://localhost:3000/products/${productId}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProduct),
            });

            if (!response.ok){
                throw new Error("Could not update the product")
            }

            const savedUpdatedProduct = await response.json();
            setProducts((currentProducts) => currentProducts.map((product) => product.id === productId ? savedUpdatedProduct : product));
            return savedUpdatedProduct;
        }
        catch(err){
            console.error(err);
            return null;
        }
    };

    return (
        <ProductContext.Provider
            value = {{
                products,
                loading,
                errror,
                fetchProducts,
                addProduct,
                deleteProduct,
                updateProduct
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}