import "./NewsCard.css";

export const defaultNewsCards = [
  {
    _id: 1,
    title: "news 1",
    published: "April 27th 2024",
    source: "Jake Lee",
    link: "https://unsplash.com/photos/a-body-of-water-with-rocks-in-the-background-Q2cdrO6JdA0",
  },
  {
    _id: 2,
    title: "news 2",
    published: "May 25, 2022",
    source: "Evan Brorby",
    link: "https://unsplash.com/photos/a-long-exposure-shot-of-the-night-sky-over-the-ocean-hvlibuOZCg0",
  },
  {
    _id: 3,
    title: "news 3",
    published: "April 20, 2024",
    source: "Nat Geo",
    link: "https://unsplash.com/photos/a-picture-of-a-sunset-over-the-ocean-XkUjmP0d62U ",
  },
  {
    _id: 4,
    title: "News 3- Hi this is the title of this news card",
    published: "February 16, 2020",
    source: "Aron Visuals",
    link: "https://unsplash.com/photos/full-moon-covered-by-clouds-LryOyGjm1bo",
  },
];

const NewsCard = ({ card }) => {
  return (
    <div className="card_container">
      <img src={card.link} className="card_image" />
      <div className="card__text">
        <div className="card__text_date-published">{card.published} </div>
        <div className="card__text_name">{card.title} </div>
        <div className="card__text_content">{card.content}</div>
        <div className="card__text_source">{card.source} </div>
      </div>
    </div>
  );
};

export default NewsCard;
