import React, { Component } from "react";
import API from '../../utils/API';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav';
import moment from 'moment';

class Saved extends Component {

 state = {
    saved : []
  }

componentDidMount () {
  this.getSaved();
}



getSaved = () => {
  API.getArticles()
  .then(res => {
    this.setState({saved: res.data})
  })
}

deleteButton = (id) => {
 console.log('id', id);
  API.deleteArticle(id)
    .catch(err => console.log(err))
     .then(res => this.getSaved())
  }

render () {
  return (
    
  <div>
    <Nav /> 
    <Header />
    <table className="table table-striped">
    <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
          <tbody>
            {this.state.saved.map((article, index) => {
              return (
                <tr key={article.id}>
                  <td>
                    <a href={article.webUrl}>{article.headline} </a>
                  </td>
                  <td> 
                     {moment(article.date).format("MM/DD/YYYY")} 
                  </td>
                  <td>
                     <button type="button" onClick={(e)=>this.deleteButton(article._id)} className="btn btn-large btn-block btn-default">Delete</button>
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

export default Saved;