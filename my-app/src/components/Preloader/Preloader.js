import "./Preloader.css";

/*To implement it, create a component called <Preloader /> that contains a <div> with the class circle-preloader */

const Preloader = () => {
  return (
    <div className="circle-preloader">
      <div className="circle-preloader"></div>
      <p className="circle_preloader_description"> Searching for news...</p>
    </div>
  );
};

export default Preloader;
