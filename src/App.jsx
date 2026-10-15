import { useState } from "react";
import ChapterCards from "./components/ChapterCards.jsx"
import Title from "./components/Title.jsx"

import Button from '@mui/material/Button';
import Movies from "./components/Movies.jsx";



function App() {


  const [showTitle, setShowTitle] = useState(false);


  function handleButtonClick() {
    setShowTitle(!showTitle);
  }


  return (
    <div>
      <Movies />
      <Button
        variant="contained"
        color="success"
        onClick={() => handleButtonClick()}
      >
        Click here!
      </Button>


      {
        showTitle === true ?
          <div> <Title />
            <ChapterCards /> </div>
          : null
      }


    </div>
  )
}

export default App;