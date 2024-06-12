import { processServerResponse } from "./utils";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://api.newsexplorer.chickenkiller.com/"
    : "http://localhost:3001";

    export function getItems() {
      return new Promise((resolve, reject) =>
        resolve([
          {
            id: "6669dd75d1ba839adc6f9b3c", // I just generated this at random from a mongodb id generator website
            title: "News Article",
            url: "https://apnews.com/article/hunter-biden-conviction-republicans-reaction-trump-eb7fe08832905f14dd8c5bd48ef9c716?utm_source=copy&utm_medium=share",
            // ...etc, whatever properties it's supposed to have
          },
    
          {
            id: "6669dd6770fb02714ad02b38", // I just generated this at random from a mongodb id generator website
            title: "News Article 2 ",
            url: "https://www.tennessean.com/story/news/religion/2024/06/12/sbc-southern-baptist-convention-live-updates-votes-on-tap-for-women-pastors-ban-ivf/73999866007/",
          },
          // and have however many you want to show on the saved-news page
        ]),
      );
    }
    
    export function saveArticle(article) {
      // article is a result from the NewsAPI
      return new Promise((resolve, reject) => {
        resolve({
          id: "6669dd924b1559c3734919f9", // another one made up from the generator
          url: article,
          url, // Use whatever properties the newsAPI gives you, I just made these up
          title: article.title,
          imageUrl: article.imagUrl,
          // whatever other properties from the newsAPI-given article object you saved to the database
        });
      });
    }

/*export const getSavedArticles = () => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

export const addSavedArticle = (newsData, keyword) => {
  const token = localStorage.getItem("jwt");
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

export const removeSavedArticle = (selectedArticle) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles/${selectedArticle._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
}; */
