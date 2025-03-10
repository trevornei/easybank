import React from "react";
import Article from "../articles/Article";

// Images
import MoneyPhoto from "../../assets/img/image-currency.jpg";
import RestaurantPhoto from "../../assets/img/image-restaurant.jpg";
import planePhoto from "../../assets/img/image-plane.jpg";
import confettiPhoto from "../../assets/img/image-confetti.jpg";

{
  /*
Money,
Dinner,
Plane, 
Conffetti
*/
}

export default function CardThree() {
  let moneyTitle = "Recieve Money in Any Currency with No Fees.";
  let moneyDesc =
    "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…";
  let moneyAuthor = "Claire Robinson";

  let restTitle = "Treat Yourself Without Worrying About Money";
  let restDesc =
    "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…";
  let restAuthor = "Wilson Hutson";

  let travelTitle = "Take you Easybank card wherever you go";
  let travelDesc =
    "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...";
  let travelAuthor = "Claire Robinson";

  let betaTitle = " Our invite-only Beta accounts are now live!";
  let betaDesc =
    "After a lot of hard work by the whole team, we\re excited to launch our closed beta. It's easy to request an invite through the site...";

  return (
    <>
      <div className="flex flex-col items-start justify-start xl:px-16 bg-mGrey/10">
        <div className="xl:mx-4 xl:pt-16">
          <h1 className="text-3xl tracking-wide text-darkBlue">
            Latest Articles
          </h1>
        </div>
        <div className="flex flex-row items-start justify-between xl:w-full xl:h-full xl:pb-32 xl:pt-10">
          <Article
            img={MoneyPhoto}
            title={moneyTitle}
            description={moneyDesc}
            author={moneyAuthor}
          />
          <Article
            img={RestaurantPhoto}
            title={restTitle}
            description={restDesc}
            author={restAuthor}
          />
          <Article
            img={planePhoto}
            title={travelTitle}
            description={travelDesc}
            author={moneyAuthor}
          />
          <Article
            img={confettiPhoto}
            title={moneyTitle}
            description={moneyDesc}
            author={moneyAuthor}
          />
        </div>
      </div>
    </>
  );
}
