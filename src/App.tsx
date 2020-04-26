import React from "react";
import "./App.scss";
import Carousel from "./lib/components/carousel";

function App() {
  const list1 = [
    <img
      src={require("./assets/images/photo-1544194215-541c2d3561a4.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1544210163-257effe9399e.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1546430783-fe4b9c159e52.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1548438294-1ad5d5f4f063.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1553374402-559e8b431161.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1554290712-e640351074bd.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1544194215-541c2d3561a4.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1544210163-257effe9399e.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1546430783-fe4b9c159e52.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1548438294-1ad5d5f4f063.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1553374402-559e8b431161.jpeg")}
      alt=""
    />,
    <img
      src={require("./assets/images/photo-1554290712-e640351074bd.jpeg")}
      alt=""
    />
  ];

  const list2 = [];
  for (let i = 0; i < 30; i++) {
    list2.push(
      <div className="block">
        <span className="block-area">{i}</span>
      </div>
    );
  }

  return (
    <div className="App">
      <h2>Example 1</h2>
      <Carousel list={list1} width={300}></Carousel>
      <h2>Example 2</h2>
      <Carousel list={list2} width={200}></Carousel>
    </div>
  );
}

export default App;
