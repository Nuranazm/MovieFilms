import React from "react";
import './MainContent.css'
import Button from "../UI/Button";


function Maincontent(props) {
  console.log(props);
  return (
    <div>
      <div className="main-conts_div">
        <div className="div">
          <img src={props.url} />
          <div id="extraInfo">
            <h1>{props.title}</h1>
            <h4 className="rating">{props.rating}/5 stars</h4>
          </div>

          <div className="btns">
            <Button onClick={() => props.deleteMovieHandler(props.id)}>
              Delete
            </Button>
            <Button onClick={props.openModal}>edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;