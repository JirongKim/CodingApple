import { useState } from "react";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../img/bg.png";

export function HOME(props) {
  let [cnt, setCnt] = useState(2);
  
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <Row>
        {
        props.shoes.map((t, i) => {
          return <ITEMCARD item={props.shoes[i]}></ITEMCARD>;
        })
        }
      </Row>

      <button onClick={()=>{
        GET_Item(props.shoes, props.setShoes, cnt);
        setCnt(cnt+1);
      }}>
        버튼{cnt}
      </button>
    </>
  );
}

function ITEMCARD(props) {
  return (
    <Link to={`/detail/${props.item.id}`}>
    <Col md={4}>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.item.id + 1) +
          ".jpg"
        }
        width="80%"
      />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </Col>
    </Link>
  );
}

function GET_Item(shoes, setShoes, cnt){
  console.log(cnt);
  fetch(`https://codingapple1.github.io/shop/data${cnt}.json`)
  .then((result) => result.json())
  .then((result) => {
    var temp = [...shoes, ...result];
    setShoes(temp);
    console.log(shoes);
    })
    .catch((e)=>{
    console.log(e);
    })
}