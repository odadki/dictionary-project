import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        Coded by:{" "}
        <a
          href="https://github.com/odadki/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Danielle Oda
        </a>
      </footer>
    </div>
  );
}

export default App;
