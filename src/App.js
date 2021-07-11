import React, { useState } from 'react'; //not required anymore for App.js
//Import Styles
import './styles/app.scss';
//Adding components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
//Import Util
import data from './util';

function App() {
  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
