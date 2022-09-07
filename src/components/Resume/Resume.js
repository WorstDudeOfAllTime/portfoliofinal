import ResumeItem from "./ResumeItem";
import "./Resume.css";
const Resume = () => {
  const thisArray = [1, 2, 3, 4, 5];
  return (
    <div className="resume">
      {thisArray.map((item) => {
        return <ResumeItem />;
      })}
    </div>
  );
};
export default Resume;
