import MenuItem from "./MenuItem"

const Menu = ({menuItems}) => {
  return (
   <>
    {menuItems.map((menuItem) => {
     return <MenuItem key={menuItem.id} {...menuItem}/>
    })}
   </>
  )
}
export default Menu