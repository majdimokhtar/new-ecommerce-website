import {useState,useEffect, Fragment} from 'react'
import { useSelector } from 'react-redux'
import { selectCategoryIsLoading, 
        selectCategoryMap } from '../../store/categories/category.selector'
import  Spinner  from '../../components/spinner/spinner.component'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import "./category.styles.scss"


export default function Category() {
  const {category}=useParams()
  const categoriesMap = useSelector(selectCategoryMap)
  const isLoading =useSelector(selectCategoryIsLoading)
  const [products,setProducts]=useState([])
  useEffect(() => {
   setProducts(categoriesMap[category])
  }, [categoriesMap,category])
  
  return (
    <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        {isLoading ? <Spinner/> : (
        <div className='category-container1'>
        {products && products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
        ) }

    </Fragment>

  )
}
