import React from "react";
// import menuBg from ".../../assets/menu-bg.png";
import menu1 from "../../assets/menu1.png";
import menu2 from "../../assets/menu2.png";
import menu3 from "../../assets/menu3.png";
import menu4 from "../../assets/menu4.png";
import menu5 from "../../assets/menu5.png";
import menu6 from "../../assets/menu6.png";
import "./style.css";
class Menu extends React.Component {
  render() {
    const arr = [
      {
        img: menu1,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        price: 222,
      },
      {
        img: menu2,
        title: "Vivamus sodales augue vita",
        description: "Lorem ipsum dolor sit amet",
        price: 590,
      },
      {
        img: menu3,
        title: "Pellentesque semper semper",
        description: "Lorem ipsum dolor sit amet",
        price: 130,
      },
      {
        img: menu4,
        title: "Vestibulum est turpis",
        description: "Lorem ipsum dolor sit amet",
        price: 135,
      },
      {
        img: menu5,
        title: "Phasellus convallis maximus",
        description: "Lorem ipsum dolor sit amet",
        price: 148,
      },
      {
        img: menu6,
        title: "Nullam elementum magna",
        description: "Lorem ipsum dolor sit amet",
        price: 200,
      },
      {
        img: menu1,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        price: 222,
      },
      {
        img: menu2,
        title: "Vivamus sodales augue vita",
        description: "Lorem ipsum dolor sit amet",
        price: 590,
      },
      {
        img: menu3,
        title: "Pellentesque semper semper",
        description: "Lorem ipsum dolor sit amet",
        price: 130,
      },
      {
        img: menu4,
        title: "Vestibulum est turpis",
        description: "Lorem ipsum dolor sit amet",
        price: 135,
      },
      {
        img: menu5,
        title: "Phasellus convallis maximus",
        description: "Lorem ipsum dolor sit amet",
        price: 148,
      },
      {
        img: menu6,
        title: "Nullam elementum magna",
        description: "Lorem ipsum dolor sit amet",
        price: 200,
      },
    ];
    return (
      <div className="menu">
        <span className="menu-title">
          <h2>Straight From Kitchen</h2>
          <p>Our Menu</p>
        </span>
        <div className="menu-list">
          <div className="menu">
            {arr.map((ele) => (
              <div className="single-menu">
                <img src={ele.img} alt="img" />
                <div className="menu-content">
                  <span>
                    <h4>
                      {ele.title} <span> Rs {ele.price}</span>
                      <span className="line" />
                      <span style={{ border: "1px solid #FFCE6D;" }}></span>
                    </h4>
                  </span>
                  <p>{ele.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
