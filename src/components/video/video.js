// Video by <a href="https://pixabay.com/users/abele62-5096768/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=12938">Silvano Vacca</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=12938">Pixabay</a>

import React from 'react';
import ReactPlayer from 'react-player/lazy';
import SnowyBackground from './snowy-background.mp4';

//npm install react-player --save

export default function Video () {

  return (
      <div className="background">
        <ReactPlayer id="myVideo" url={SnowyBackground} playing autoPlay muted loop height='100vh' width='100%' />
      </div>
  );

}
