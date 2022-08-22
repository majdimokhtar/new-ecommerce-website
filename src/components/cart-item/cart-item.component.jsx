
import "./cart-item.styles.scss"

export default function CartItem({cartItem}) {
    const {name,quantity,imageUrl,price}= cartItem
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
        <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity}x{price} DT</span>
        </div>

    </div>
  )
}
