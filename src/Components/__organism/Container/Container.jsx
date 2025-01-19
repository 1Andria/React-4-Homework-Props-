import React from "react";
import "./Container.css";
import Card from "../../__molecule/Card/Card";
import Pizza from "../../../assets/Images/Pizza.png";
import Tortelini from "../../../assets/Images/Tortelini.jpg";
import Cake from "../../../assets/Images/cake.png";
import Fire from "../../../assets/Images/fire.png";
import Wheat from "../../../assets/Images/Wheat.png";
import Leaf from "../../../assets/Images/Organic.png";

function Container() {
  return (
    <div className="container">
      <Card
        className="card_div"
        image={Pizza}
        alt="Pizza photo"
        foodName="Pepperoni Pizza"
        secondPhoto={Fire}
        secondAlt="fire"
        thirdPhoto={Wheat}
        thirdAlt="Wheat"
        description="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
        cal="265 Cal"
        PFC="P/F/C: 12/10/31"
        celsius="53.8 °C"
        newPrice="$23.90"
        oldPrice="$29.90"
        ord="ORDER"
      />
      <Card
        className="card_div"
        image={Tortelini}
        alt="Tortelini photo"
        foodName="Tortellini"
        firstPhoto={Leaf}
        firstAlt="Leaf"
        secondPhoto={Fire}
        secondAlt="Fire"
        thirdPhoto={Wheat}
        thirdAlt="Wheat"
        description="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
        cal="270 Cal"
        PFC="P/F/C: 18/4/41"
        celsius="42.4 °C"
        newPrice="$17.90"
        oldPrice="$22.90"
        ord="ORDER"
      />
      <Card
        className="card_div"
        image={Cake}
        alt="Cake photo"
        foodName="Strawberry cake"
        thirdPhoto={Wheat}
        thirdAlt="Wheat"
        description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
        cal="346 Cal"
        PFC="P/F/C: 6/14/49"
        celsius="13.9 °C"
        newPrice="$13.90"
        oldPrice="$18.90"
        ord="ORDER"
      />
    </div>
  );
}
export default Container;
