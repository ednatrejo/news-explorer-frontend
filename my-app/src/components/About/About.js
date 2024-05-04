import "./About.css";
import AvatarImage from "../../images/MyPhoto.jpg";

const About = () => {
  return (
    <section className="about" id="about-section">
      <div className="about__container">
        <img
          src={AvatarImage}
          className="about__avatar-image"
          alt="Author's Photo"
        />
        <div className="about__text">
          <h2 className="about__text_author">About the author</h2>
          <p className="about__text_bio">
            Hello there! I'm Edna Trejo, I'm full stack software engineer
            proficient in JavaScript, HTML, CSS,Node, Express, and React. I
            transitioned from salesto web development.
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
