import {useState} from 'react';
import {Button, Table} from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import './Carts.css';
const Carts = () => {
  const [cartItems, setCartItems] = useState([
    {id: 1, title: 'Html', price: 2000, quantity: 2, rating: 5},
    {id: 2, title: 'Fullstack', price: 4800, quantity: 1, rating: 4},
    {id: 3, title: 'Javascript', price: 2800, quantity: 2, rating: 4},
    {id: 4, title: 'React.js', price: 3000, quantity: 1, rating: 4.5},
  ]);

  const removeFromCart = id => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? {...item, quantity: newQuantity} : item,
    );
    setCartItems(updatedCart);
  };

  const calculateTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <div className="shopping-cart-container">
      <h1 className='carthaeding'>Shopping Cart</h1>
      <Table striped bordered hover className="cart-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>₹{item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, e.target.value)}
                  min="1"
                  className="quantity-input"
                />
              </td>
              <td>
                <Rating
                  count={5}
                  value={item.rating}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                />
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="cart-summary">
        <h4>Total Cost: ₹{calculateTotalCost()}</h4>
        <Button variant="primary">Checkout</Button>
      </div>
    </div>
  );
};

export default Carts;
