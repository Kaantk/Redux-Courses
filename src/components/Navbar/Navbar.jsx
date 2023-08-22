import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const quantity = useSelector((store) => store.card.quantity);
  
  return (
    <>
        <header>
            <nav>
                <div>
                    <h3>Redux Kurs Uygulaması</h3>
                </div>
                <div id='basket'>
                    <img src="/img/basket.svg"/>
                    {quantity != 0 ? (
                        <div id='quantity'>{quantity}</div>
                    ) : 
                        <></> }
                </div>
            </nav>
        </header>
    </>
  )
}
