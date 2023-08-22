import { createSlice } from "@reduxjs/toolkit";
import Courses from '../Data/Courses'

const initialState = {
    courses: Courses,
    quantity: 0,
    total: 0
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        clearCard: (state) => {
            state.courses = [];
        },
        removeCourse: (state, action) => {
            const deleteCourseID = action.payload;
            state.courses = state.courses.filter((course) => course.id != deleteCourseID)
        },
        increase: (state, action) => {
            const cardItem = state.courses.find((course) => course.id === action.payload)
            cardItem.quantity += 1;
        },
        decrease: (state, action) => {
            const cardItem = state.courses.find((course) => course.id === action.payload)
            cardItem.quantity -= 1;
        },
        calculateTotal: (state) => {
            let total = 0;
            let quantityTotal = 0;
            state.courses.forEach((course) => {
                total += Number(course.price) * course.quantity;
                quantityTotal += course.quantity;
            })
            state.total = total;
            state.quantity = quantityTotal;
        },
    }
});

export const { clearCard, removeCourse, increase, decrease, calculateTotal  } = cardSlice.actions;

export default cardSlice;
