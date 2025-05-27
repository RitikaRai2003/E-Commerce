import React from "react";
import "./DescriptionBox.css"

const DescriptionBox =()=>{
    return(
        <div className="descriptionbox">
          <div className="descriptionbox-navigator">
             <div className="description-nav-box">Description</div>
             <div className="description-nav-box fade">Reviews(122)</div>
          </div>
          <div className="descriptionbox-description">
              <p>E-commerce, short for electronic commerce, refers to the buying and
               selling of goods or services using the internet. It also involves the 
               transfer of money and data to execute these transactions. E-commerce
                has revolutionized the way businesses operate and how consumers shop,
                 offering convenience, broader access, and competitive pricing.
              </p>
          </div>
        </div>
    )

}
export default DescriptionBox