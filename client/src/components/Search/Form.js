import React from "react";

const Form = (props) => {
    return (
      <form onSubmit={props.getNyt}>
        <input type="text" name="topic" placeholder="topic"/>
        <input type="text" name="startYear" placeholder="startYear"/>
        <input type="text" name="endYear" placeholder="endYear"/>
        <button>Get Articles</button>
      </form>
    );
}

export default Form;