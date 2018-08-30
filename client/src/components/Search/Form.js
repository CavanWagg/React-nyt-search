import React from "react";
import "./Form.css";

const Form = (props) => {
    return (
      <form onSubmit={props.getNyt}>
        <div class="form-group ">
        <div class="d-inline-block">
        <input class="form-control" type="text" name="topic" placeholder="topic"/>
        </div>
        <div class="d-inline-block">
      <input class="form-control" type="text" name="startYear" placeholder="startYear"/>
      </div>
      <div class="d-inline-block">
        <input class="form-control" type="text" name="endYear" placeholder="endYear"/>
        </div>
        
        </div>
        <button className="btn get-articles btn-info">Get Articles</button>
        
      </form>
    );
}

export default Form;