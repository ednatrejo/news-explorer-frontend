/* import { processServerResponse } from "./utils";

export const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";
git;

// Fetch articles by a user
export const getSavedArticles = () => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

// Create a new article
export const createArticle = ({ newsData, keyword }) => {
  const token = localStorage.getItem("jwt");
  console.log(token);
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: newsData.title,
      text: newsData.description,
      date: newsData.publishedAt,
      source: newsData.source.name,
      link: newsData.url,
      image: newsData.urlToImage,
      keyword: keyword,
    }),
  }).then(processServerResponse);
};

// Delete an article
export const deleteItems = (selectedArticle) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles/${selectedArticle_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};
*/
