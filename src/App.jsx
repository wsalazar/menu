import { useState } from "react";
import Title from "./Title";
import data from './data'
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const categories = ['all', ...new Set(data.map((menuItem) => menuItem.category) )]
  
  const getUniqueCategoryMenuItems = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return;
    }
    const uniqueMenuItems = data.filter((menuItem) => menuItem.category === category)
    setMenuItems(uniqueMenuItems)
  }
  
  return (
  <>
    <Title />
    <Menu menuItems={menuItems}/>
    <Categories finalCategories={categories} getUniqueCategoryMenuItems={getUniqueCategoryMenuItems}/>
  </>
  )
};
export default App;
