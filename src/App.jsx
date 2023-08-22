import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { CourseList } from './components/CourseList/CourseList'
import { useEffect } from 'react'
import { calculateTotal } from './control/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const courses = useSelector((store) => store.card.courses)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal())
  }, [courses])

  return (
    <>
      <div id='container'>
        <Navbar />
        <CourseList />
      </div>
    </>
  )
}

export default App
