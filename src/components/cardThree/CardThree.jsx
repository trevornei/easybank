import React from 'react'
import Article from '../articles/Article'

// Images
import MoneyPhoto from '../../assets/img/image-currency.jpg'
import RestaurantPhoto from '../../assets/img/image-restaurant.jpg'
import planePhoto from '../../assets/img/image-plane.jpg'
import confettiPhoto from '../../assets/img/image-confetti.jpg'

{/*
Money,
Dinner,
Plane, 
Conffetti
*/}

export default function CardThree() {
  return (
    <>
        <div className="flex flex-row border-4 border-yellow-300">
            <Article img={MoneyPhoto} />
            <Article img={RestaurantPhoto} />
            <Article img={planePhoto} />
            <Article img={confettiPhoto} />
        </div>
    </>
  )
}
