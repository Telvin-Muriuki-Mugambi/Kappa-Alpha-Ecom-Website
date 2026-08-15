import { useState } from 'react'
import carData from "/db.json"
import "./Product.css";

function Productcard() {
  const [products, setProducts] = useState(carData.products)
  const [searchQuery, setSearchQuery] = useState("")
  //search functionality
  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)
    const filteredProducts = carData.products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  return (
    <div>
      <div className='shop-page'>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className='cards-grid'>
        {products.map((product) => (
          <div key={product.id} className='card'>
            <h2>{product.name}</h2>
        <p className='description'>Description: {product.description}</p>
            <p className='price'>Price: ${product.price.toFixed(2)}</p>
            <p className='category'>Category: {product.category}</p>
            <p className='origin'>Origin: {product.origin}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productcard

