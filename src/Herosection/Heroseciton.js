import React from "react";

export default function Heroseciton(props) {
  return (
    <div
      className="flex"
      style={{ flexDirection: props.reverse ? "row-reverse" : "row" }}
    >
      <div className="w-3/6">
        <img className="w-full  h-screen" src={props.image} alt="" />
      </div>
      <div className="">
        <h1>{props.heading}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
