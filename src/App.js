import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Aksana Kurbanova and is{" "}
          <a
            href="https://github.com/Sberry2020/react-final-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted {" "}
          <a
            href="https://laughing-bohr-32dea7.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
           on Netlify
          </a> {" "}
         background-image changes if temp is (more `{'>'}` <small>16°</small>C). Please check it out ⬆️
        </footer>
      </div>
    </div>
  );
}
