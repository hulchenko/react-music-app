import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong }) => {
  //Ref(used to reference an element)
  //equiv to JS: const audio = document.querySelector('audio')
  const audioRef = useRef(null);
  //Event Handlers
  const playSongHandler = () => {
    console.log(audioRef.current);
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon icon={faAngleLeft} className="skip-back" size="2x" />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={faPlay}
          className="play"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className="skip-forward"
          size="2x"
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
