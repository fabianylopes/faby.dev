import "./style.css";

export default function Header() {
  return (
    <div className="navbar">
      <h1>Fabiany Lopes</h1>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/fabianylopes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/fabianylopes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}
