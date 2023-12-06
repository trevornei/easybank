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

  let moneyTitle = 'Recieve Money in Any Currency with No Fees.'
  let moneyDesc = 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
  let moneyAuthor = 'Claire Robinson'

  let restTitle = 'Treat Yourself Without Worrying About Money'
  let restDesc = 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
  let restAuthor = 'Wilson Hutson'
  
  return (
    <>
        <div className="bg-mGrey/10 xl:px-40">
          <div className="xl:px-28 xl:pt-16">
            <h1 className="text-6xl text-darkBlue">Latest Articles</h1>
          </div>
          <div className="flex flex-row items-center justify-between xl:px-28 xl:pb-32 xl:pt-10">
              <Article img={MoneyPhoto} title={moneyTitle} description={moneyDesc} author={moneyAuthor} />
              <Article img={RestaurantPhoto} title={restTitle} description={restDesc} author={restAuthor} />
              <Article img={planePhoto} title={moneyTitle} description={moneyDesc} author={moneyAuthor} />
              <Article img={confettiPhoto} title={moneyTitle} description={moneyDesc} author={moneyAuthor} />
          </div>
        </div>
    </>
  )
}
