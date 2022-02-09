
import React from "react";
import ToursCard from "./ToursCard"

const Tours = () => {
    const card_1= {
        h_1_color:"card__heading--1-orange",
        h_2_color: "card__heading--2-orange",
        img_1: "card__picture--1",
        back_1: "card__side--back-1",
        price: 297,
        time: "3 days tour",
        people: "Upto 30 people",
        guide: "2 tour guides",
        benefit: "Sleep in cozy hotels",
        diff_level: "Difficulty: Easy",

    }
    const card_2= {
        h_1_color:"card__heading--1-green",
        h_2_color: "card__heading--2-green",
        img_1: "card__picture--2",
        back_1: "card__side--back-2",
        price: 599,
        time: "7 days tour",
        people: "Upto 20 people",
        guide: "3 tour guides",
        benefit: "Sleep in cozy hotels",
        diff_level: "Difficulty: Medium",
        
    }
    const card_3= {
        h_1_color:"card__heading--1-blue",
        h_2_color: "card__heading--2-blue",
        img_1: "card__picture--3",
        back_1: "card__side--back-3",
        price: 799,
        time: "2 days tour",
        people: "Upto 15 people",
        guide: "3 tour guides",
        benefit: "Sleep in cozy hotels",
        diff_level: "Difficulty: Hard",
        
    }
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <div className="col-1-3">
          <ToursCard data={card_1}/>
        </div>
        <div className="col-1-3">
        <ToursCard data={card_2}/>
             
        </div>
        <div className="col-1-3">
        <ToursCard data={card_3}/>
        </div>
      </div>
    </section>


  );
};

export default Tours;
