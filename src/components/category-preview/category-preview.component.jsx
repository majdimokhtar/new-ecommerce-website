
import ProductCard from "../../components/product-card/product-card.component"
import { Link } from "react-router-dom"
import "./category-preview.styles.scss"

export default function CtegoryPreview({title,products}) {
  return (
    <div className="category-preview-container">
     <h2>
     <Link className="title" to={title}>{title.toUpperCase()}</Link>
     </h2>
     <div className="preview">
     {products
      .filter((_,index)=> index<4)
      .map((product)=>
      <ProductCard key={product.id} product={product} />
      )
     }
     </div>
    </div>
  )
}
