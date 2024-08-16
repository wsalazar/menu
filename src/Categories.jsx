const Categories = ({finalCategories, getUniqueCategoryMenuItems}) => {
  return (
   <>
    {finalCategories.map((category, index) => {
     return <div key={index}><button className="btn" onClick={()=> getUniqueCategoryMenuItems(category)}>{category}</button></div>
    })}
    </>
  )
}
export default Categories