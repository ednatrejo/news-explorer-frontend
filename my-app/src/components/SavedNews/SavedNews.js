import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

const SavedNews = ({ handleRemoveArticle }) => {
  return (
    <section className="saved__news">
      <SavedNewsHeader />
      <SavedNewsCardList handleRemoveArticle={handleRemoveArticle} />
    </section>
  );
};

export default SavedNews;
