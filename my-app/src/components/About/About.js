import "./About.css";
import AvatarImage from "../../images/MyPhoto.jpg";
const About = () => {
  return (
    <section className="about" id="about-section">
      <div className="about__container">
        <img src={AvatarImage} className="about__avatar-image" alt="Author" />
        <div className="about__text">
          <h2 className="about__text-author">About the author</h2>
          <p className="about__text-bio">
            Hello there! I'm Edna Trejo, I'm full stack software engineer
            proficient in JavaScript, HTML, CSS,Node, Express, and React. I
            transitioned from sales to web development.
            <br></br>
            <br></br>I started learning to code at TripleTen bootcamp. There, I
            received thorough training and learned how to handle difficult
            programming tasks. I'm skilled in creating smooth user experiences
            with React and building large-scale backend systems with Node.js.
            Whether you want to improve your online presence or upgrade your
            tech setup, I can provide smart solutions and achieve effective
            outcomes. Let's work together to turn your ideas into reality, step
            by step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
