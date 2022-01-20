import React from "react";
import "./Card.css";
function Card() {
  return (
    <div>
      <div className="cardcontainer">
        <div className="card_head">
          <div>
            <p>High Speed Sneakers</p>
          </div>
          <div>
            <h4>Balenciaga</h4>
          </div>
        </div>
        <div className="photo">
          <img src="https://thevou.com/wp-content/uploads/2021/08/Sock-sneakers-thevou.com-Balenciaga-Speed-pull-on-sneakers-02.jpg" />{" "}
        </div>
        <div className="card_footer">
          <div className="foot_left">
            <p>Price</p>
            <h2>$790</h2>
          </div>
          <div className="foot_right">
            <div>
              <img
                height="50"
                src="https://thevou.com/wp-content/uploads/2021/08/Sock-sneakers-thevou.com-Balenciaga-Speed-pull-on-sneakers-02.jpg"
              />
            </div>
            <div>
              <img
                height="50"
                src="https://thevou.com/wp-content/uploads/2021/08/Sock-sneakers-thevou.com-Balenciaga-Speed-pull-on-sneakers-02.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
