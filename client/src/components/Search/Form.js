import React from "react";
import "./Form.css";

const Form = (props) => {
    return (
      <form onSubmit={props.getNyt}>
        <div className="form-group ">
        <div className="d-inline-block">
        <input className="form-control" type="text" name="topic" placeholder="topic"/>
        </div>
        <div className="d-inline-block">
      <input className="form-control" type="text" name="startYear" placeholder="startYear"/>
      </div>
      <div className="d-inline-block">
        <input className="form-control" type="text" name="endYear" placeholder="endYear"/>
        </div>
        
        </div>
        <button className="btn get-articles btn-info">GET ARTICLES</button>
        
      </form>
    );
}

export default Form;