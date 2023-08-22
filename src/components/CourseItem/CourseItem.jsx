import React from 'react'
import './CourseItem.css'
import { useDispatch } from 'react-redux'
import { decrease, increase, removeCourse } from '../../control/cartSlice'

export const CourseItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch()
  console.log(dispatch)
  return (  
    <>
        <div id='card'>
            <img src={img}/>
            <h3>{title}</h3>
            <h4>{price} TL</h4>
            <div id='card-btn'>
                {quantity != 0 && (
                    <button onClick={() => dispatch(decrease(id))}>
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                )}
                <p>{quantity}</p>
                <button onClick={() => dispatch(increase(id))}>
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
            <button id='detele-btn' onClick={() => dispatch(removeCourse(id))}>
                Sil
            </button>
        </div>
    </>
  )
}
