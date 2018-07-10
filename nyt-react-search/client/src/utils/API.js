import axios from "axios";

export default {
   // Gets all articles
   getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the articles with 
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
saveArticle: function(articleData) {
  console.log(articleData);
  return axios.post("/api/articles", articleData)
}
};