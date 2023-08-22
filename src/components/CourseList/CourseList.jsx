import React from 'react'
import './CourseList.css'
import { useSelector, useDispatch } from 'react-redux'
import { CourseItem } from '../CourseItem/CourseItem';
import { clearCard } from '../../control/cartSlice';

export const CourseList = () => {
  const dispatch = useDispatch();
  const {
    courses,
    quantity,
    total
  } = useSelector((store) => store.card);

  return (
    <>
        <main>
            <div id="container">
                {courses.length != 0 ? (
                    <>
                        {courses.map((item, id) => {
                            return <CourseItem key={id} {...item}/>
                        })}
                    </>
                ) : (
                    <div>Kurs bulunmamaktadır.</div>
                )}
            </div>
        </main>
        <footer>
            <p id='total'>Toplam tutar : {total} TL</p>
            <div>
                {total != 0 ? (
                    <button onClick={() => dispatch(clearCard())}>
                        Sepeti Temizle
                    </button>
                ) : 
                    <>
                    </>
                }
            </div>
        </footer>
    </>
  )
}
