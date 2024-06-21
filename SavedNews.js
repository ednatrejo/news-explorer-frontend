import "./SavedNews.css";
import SavedNewsHeader from "./my-app/src/components/SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "./my-app/src/components/SavedNewsCardList/SavedNewsCardList";

const SavedNews = ({ handleRemoveArticle }) => {
  return (
    <section className="saved">
      <SavedNewsHeader />
      <SavedNewsCardList handleRemoveArticle={handleRemoveArticle} />
    </section>
  );
};

export default SavedNews;
