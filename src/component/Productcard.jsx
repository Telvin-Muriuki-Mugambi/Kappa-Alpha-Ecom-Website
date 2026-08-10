import react, { useState } from 'react'
import carData from "/db.json"
import "./Product.css";

function Productcard() {
  const [products, setProducts] = useState(carData.products)
  const [searchQuery, setSearchQuery] = useState("")
  //search functionality
  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
    const filteredProducts = carData.products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  return (
    <div className='product-card'>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {products.map((product) => (
        <div key={product.id} className='card'>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p> {product.category}</p>
          <p> {product.origin}</p>
        </div>
      ))}
    </div>
  )

//search functionality
}

  

export default Productcard

