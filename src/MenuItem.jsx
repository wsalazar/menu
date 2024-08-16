const MenuItem = ({id, title, category, price, img, desc}) => {
  return (
    <div>
     <article key={id}>
      <h4>{title}</h4>
      <p>{category}</p>
      <p>{price}</p>
      <p>{desc}</p>
      <img src={img} alt={title} width="50px" height="50px" />
     </article>
    </div>
  )
}
export default MenuItem