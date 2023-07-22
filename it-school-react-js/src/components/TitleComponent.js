import React from "react";

const title={ fontSize:"32px",color :"green", letterSpacing: "1.5", fontFamily:"arial" }

function TitleComponenent (props) {
    return <h1 style ={title}>{props.text} </h1>
}

export default TitleComponenent