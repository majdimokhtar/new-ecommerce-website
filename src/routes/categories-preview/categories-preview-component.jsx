import { Fragment } from "react"
import { useSelector } from "react-redux"
import { selectCategoryMap,
        selectCategoryIsLoading } from "../../store/categories/category.selector"
import Spinner from "../../components/spinner/spinner.component"
import CategoryPreview from "../../components/category-preview/category-preview.component"

export default function CategoriesPreview() {
  const categoriesMap =useSelector(selectCategoryMap)
  const isLoading =useSelector(selectCategoryIsLoading)

  return (
    <Fragment>
      {
      isLoading ? <Spinner/> :
        ( Object.keys(categoriesMap).map((title)=>{
        const products =categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      }))
      
      }
    </Fragment>
   
  )
}
