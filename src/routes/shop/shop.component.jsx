import { useContext } from "react"
import { ProductsContext } from "../../contexts/shop.context"
import ProductCard from "../../components/product-card/product-card.component"
import "./shop.styles.scss"

export default function Shop() {
    const {products} =useContext(ProductsContext)

  return (
    <div className="products-container">
        {products.map((product)=>(
           <ProductCard key={product.id} product={product}  />
        ))}
    </div>
  )
}
