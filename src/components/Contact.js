import './Contact.css';
const Contact = () => {
  return (
    <div
      className="flex-cent-col displayBox"
      style={{ height: '100%', width: '100%' }}
    >
      <h1 style={{ textDecoration: 'underline' }}>CONTACT.</h1>
      <div className="contentBox flex-cent-col">
        <h2 style={{ fontSize: '3vw' }}>Email: Krisbert@Krisbert.dev</h2>
        <ul>
          <li>
            <a
              href="https://github.com/WorstDudeOfAllTime"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Github.
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kris-bertolino-b60b7a228/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              LinkedIn.
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/HAVEstx/videos"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Youtube.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;
