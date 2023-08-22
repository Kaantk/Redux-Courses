import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './control/cartSlice'

export const store = configureStore({
    reducer: {
        card: cardSlice.reducer
    }
});
