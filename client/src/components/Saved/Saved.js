import React from "react";
import "./Saved.css";

const Saved = props => (
  <div className="allOfTheSavedContent">
      <div className="savedArticles">
          <div className="articleList">
              <h6> {props.title}
                  <button id={props.id} className="btn btn-primary">Delete</button>
              </h6>
          </div>
      </div>
  </div>
  );
  
  export default Saved;