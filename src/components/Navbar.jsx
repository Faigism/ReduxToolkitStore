import { CartIcon } from '../assets/icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const basketAmount = useSelector((state) => state.cart.amount)
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{basketAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
