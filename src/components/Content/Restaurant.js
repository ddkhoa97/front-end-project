import React from "react";
import { Card } from "antd";
import styles from "../styles/Card.module.css";
import {Link} from "react-router-dom"
const { Meta } = Card;

export default function Restaurant(props) {

  var active_icons="";
  var deactive_icons="";
  for(let i = 0 ; i < props.pricing; i ++)
  {
      active_icons+=  '€';
    
  }
  if(props.pricing < 4)
  {
    for(let i =  props.pricing ; i <4; i ++)
  {
    deactive_icons+= '€';
    
  }
  }
  
  const levelPrice=  <span className={styles.Restaurant_card_footer_price_active}>
    {active_icons}
   <span className={styles.Restaurant_card_footer_price_inactive}>
     
     {deactive_icons}
   </span>
 </span>

  return (
    
    <div className={styles.WrappedStyled}>
      <div className={(styles.Restaurant_card, styles.zoom)}>
      <Link to={ `/restaurant/${props.name}`}>
        <Card
          hoverable
          cover={<img alt="example" src={`/images/${props.image}`}  height="100%" />}
          bodyStyle={{ padding: "15px" }}
        >
          {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
          <div className={styles.Restaurant_card_content}>
            <h3 className={styles.Restaurant_name}>
              {" "}
             {props.name}
            </h3>

            <div className={styles.Restaurant_type}>{props.categoryID}</div>
          </div>
          <div className={styles.Restaurant_card_footer}>
            {levelPrice}
          
          </div>
        </Card>
        </Link>
      </div>
    </div>
  );
}
