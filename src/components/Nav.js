import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <h1>
        BoomBox <span></span>
        <sup>
          <FontAwesomeIcon style={{ width: '1.2rem' }} icon={faMusic} />
        </sup>
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
