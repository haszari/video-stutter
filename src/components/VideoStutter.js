import React, { Component } from 'react';


import tubemanVideo from 'google-photos-local-mirror/IMG_5160.MOV.mp4';
// import aucklandMotorwayVideo from 'google-photos-local-mirror/IMG_6353.MOV.mp4';
// import ferryBoatWakeVideo from 'google-photos-local-mirror/IMG_6462.MOV.mp4';
// import houstonAirportTerminalMonorailVideo from 'google-photos-local-mirror/IMG_8411.MOV.mp4';
// import houstonAirportRoadsVideo from 'google-photos-local-mirror/IMG_8413.MOV.mp4';
const videoUrl = tubemanVideo;

const TEMPO_BPM = 120;
const BEATS_PER_STUTTER = 8;
const TIMER_INTERVAL = BEATS_PER_STUTTER * ((60 / TEMPO_BPM) * 1000);


class VideoStutter extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.stutterOnce(),
      TIMER_INTERVAL
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  stutterOnce() {
    this.video.current.currentTime = (Math.random() * this.video.current.duration);
    this.video.current.playbackRate = 0.2 + Math.random() * 1.3;
  }

  render() {
    return (
      <div className="VideoStutter">
        <video ref={ this.video } src={ videoUrl } autoPlay loop muted ></video>
      </div>
    );
  }

}

export default VideoStutter;
