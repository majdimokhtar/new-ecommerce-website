import { useContext,Fragment } from "react"
import { CategoriesContext } from "../../contexts/categories.context"
import CtegoryPreview from "../../components/category-preview/category-preview.component"

export default function CategoriesPreview() {
    const {categoriesMap} =useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title)=>{
        const products =categoriesMap[title]
        return <CtegoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
   
  )
}
