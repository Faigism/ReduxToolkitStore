import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useEffect } from 'react'
import { calculateTotal } from './features/cart/cartSlice'
import Modal from './components/Modal'

const App = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  )
}
export default App
