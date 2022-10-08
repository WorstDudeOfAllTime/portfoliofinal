import "./ProjectBox.css";

const ProjectBox = ({ project}) => {
  return (
    <div className="projectBoxContainer">
      <div className="boxHalf left">
        <a href={project.link} target="blank">
          <img className="projectImage" src={project.imgSrc} />
        </a>
      </div>
      <div className="boxHalf right">
        <div className="appHeader">
          <h2>{project.name}</h2>
        </div>
        <div className="appDescription">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectBox;
