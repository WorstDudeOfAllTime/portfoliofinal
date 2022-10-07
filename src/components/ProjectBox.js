import "./ProjectBox.css";

const ProjectBox = ({ name, imgSrc, description, link }) => {
  return (
    <div className="projectBoxContainer">
      <div className="boxHalf left">
        <a href={link} target="blank">
          <img className="projectImage" src={imgSrc} />
        </a>
      </div>
      <div className="boxHalf right">
        <div className="appHeader">
          <h2>{name}</h2>
        </div>
        <div className="appDescription">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectBox;
