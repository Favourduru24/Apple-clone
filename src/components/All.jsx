import React from 'react'

import { Video } from "./Video";
import High from "./High";
import Slider from "./Slider";
import Bracket from './Bracket';
import Jarvis from './Jarvis';
import Outline from './Outline';
import Filter from './Filter';
import Apple from './Apple';
import Camera from './Camera';
import VideoSlider from './VideoSlider';

const All = () => {
  return (
    <section>
       <Video/>
       <High/>
       <Slider/>
       <Bracket/>
       <Jarvis/>
       <Outline/>
       <Filter/>
       <Apple/>
       <Camera/>
       <VideoSlider/>
    </section>
  )
}

export default All