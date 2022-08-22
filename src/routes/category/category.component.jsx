import {useState,useEffect, Fragment} from 'react'
import { useSelector } from 'react-redux'
import { selectCategoryMap } from '../../store/categories/category.selector'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import "./category.styles.scss"


export default function Category() {
  const {category}=useParams()
  const categoriesMap = useSelector(selectCategoryMap)
  const [products,setProducts]=useState([])
  useEffect(() => {
   setProducts(categoriesMap[category])
  }, [categoriesMap,category])
  
  return (
    <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container1'>
        {products && products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </Fragment>

  )
}
