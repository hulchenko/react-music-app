import React, { useState } from 'react'; //not required anymore for App.js
//Import Styles
import './styles/app.scss';
//Adding components
import Song from './components/Song';
import Player from './components/Player';
//Import Util
import data from './util';

function App() {
  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
