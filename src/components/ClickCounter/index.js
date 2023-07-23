// Write your code here

import './index.css'

const ClickCounter = props => {
  const {title, description, price, sold, category, image, dateOfSale} = props
  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{category}</p>
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{category}</p>
      <p>{price}</p>
      <p>{sold}</p>
      <p>{dateOfSale}</p>
    </li>
  )
}
export default ClickCounter
