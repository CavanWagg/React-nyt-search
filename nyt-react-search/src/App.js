import React, { Component } from 'react';
import './App.css';
import Form from './components/Search/Form';
import Header from './components/Header/Header';
import Moment from 'react-moment';

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
        date: article.pub_date
      };
    });
    return normalizedData;
  };

  render() {
    return (
      <div>
        <Header />
        <Form getArticle={this.getArticle} />
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
            <th>Date</th>
          </tr>
        </thead>
          <tbody>
            {this.state.articles.map(article => {
              return (
                <tr>
                  <td>{article.headline}</td>
                  <td>
                    <a href={article.webUrl}>Click </a>
                  </td>
                  <td> {moment(article.date).format("MM-DD-YYYY")}</td>
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
