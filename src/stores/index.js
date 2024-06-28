import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import modalSlice from '../features/modal/modalSlice'

export default configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
  },
})
