import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

const authkey = '7d88da97aa99493f902d17c0fe8eef8d';

class App extends Component {
  getArticle = async e => {
    e.preventDefault();
    const topic = e.target.elements.topic.value;
    const startYear = e.target.elements.startYear.value;
    const endYear = e.target.elements.endYear.value;
    const api_call = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authkey}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`
    );
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Form getArticle={this.getArticle} />
      </div>
    );
  }
}

export default App;
