import React, { Component } from 'react';
import './App.css';
import Form from './components/Search/Form';
import Header from './components/Header/Header';
import moment from 'moment';
import API from './utils/API';

const authkey = '7d88da97aa99493f902d17c0fe8eef8d';

class App extends Component {
  state = {
    articles: []
  };
  getArticle = async e => {
    e.preventDefault();
    const topic = e.target.elements.topic.value;
    const startYear = e.target.elements.startYear.value;
    const endYear = e.target.elements.endYear.value;
    const api_call = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authkey}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`
    );
    const data = await api_call.json();

    console.log('DAT YUNG DATA ====>', data);
    this.setState({
      articles: this.normalizeArticles(data.response.docs)
    });
  };

  normalizeArticles = articles => {
    let normalizedData = articles.map(article => {
      return {
        webUrl: article.web_url,
        headline: article.headline.main,
        date: article.pub_date,
        id: article._id
      };
    });
    return normalizedData;
  };

  saveButton = (e, i) => {
    e.preventDefault();
  //  console.log(' you clicked it!');
    API.saveArticle({
        webUrl: this.state.articles[i].webUrl,
        headline: this.state.articles[i].headline,
        date: this.state.articles[i].date,
        id: this.state.articles[i].id
    })
  }
  
  render() {
    return (
      <div>
        <Header />
        <Form getArticle={this.getArticle} />
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
          <tbody>
            {this.state.articles.map((article, index) => {
              return (
                <tr key={article.id}>
                  <td>
                    <a href={article.webUrl}>{article.headline} </a>
                  </td>
                  <td> 
                     {moment(article.date).format("MM/DD/YYYY")} 
                  </td>
                  <td>
                     <button type="button" onClick={(e)=>this.saveButton(e, index)} className="btn btn-large btn-block btn-default">Save</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
