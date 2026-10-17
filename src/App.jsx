
import { useState } from "react";
import ChapterCards from "./components/ChapterCards.jsx";
import Title from "./components/Title.jsx";
import Button from "@mui/material/Button";
import Movies from "./components/Movies.jsx";
import "./App.css";

function App() {
  const [showTitle, setShowTitle] = useState(false);

  function handleButtonClick() {
    setShowTitle(!showTitle);
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <p className="app-label">EXPLORE & DISCOVER</p>
        <h1>Movies & Chapters Explorer</h1>
        <p className="app-description">
          Discover movies and explore chapters in one place.
        </p>
      </header>

      <main className="app-content">
        <section className="movies-section">
          <h2>Discover Movies</h2>
          <Movies />
        </section>

        <section className="chapters-section">
          <h2>Explore Chapters</h2>
          <p>Click below to discover the chapter collection.</p>

          <Button
            variant="contained"
            color="success"
            onClick={handleButtonClick}
            aria-expanded={showTitle}
          >
            {showTitle ? "Hide Chapters" : "Show Chapters"}
          </Button>

          {showTitle && (
            <div className="chapter-content">
              <Title />
              <ChapterCards />
            </div>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>Built while learning React and web development.</p>
      </footer>
    </div>
  );
}

export default App;
