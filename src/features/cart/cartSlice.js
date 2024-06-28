import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const cartSlice = createSlice({
  name: 'counter',
  initialState: {
    cartItems: cartItems,
    total: 0,
    amount: 0,
    isLoading: true,
  },
  reducers: {
    incrementAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload)
      cartItem.amount = cartItem.amount + 1
    },
    decrementAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload)
      cartItem.amount = cartItem.amount - 1
    },
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },
    calculateTotal: (state) => {
      let total = 0
      let amount = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

export const {
  incrementAmount,
  decrementAmount,
  clearCart,
  removeItem,
  calculateTotal,
} = cartSlice.actions

export default cartSlice.reducer
