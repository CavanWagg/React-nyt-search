import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getArticle}>
        <input type="text" name="topic" placeholder="topic"/>
        <input type="text" name="startYear" placeholder="startYear"/>
        <input type="text" name="endYear" placeholder="endYear"/>
        <button>Get Weather</button>
        </form>
    );
  }
}

export default Form;