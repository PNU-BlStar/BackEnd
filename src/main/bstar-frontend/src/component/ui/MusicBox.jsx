import React from "react";
// import "./music/004 아이유 - 너의 의미 (Feat. 김창완).mp3";
// import "../ui/music/004 아이유 - 너의 의미 (Feat. 김창완).mp3"
import music1 from "./music/G-Dragon - R.O.D. (feat. Lydia Paek).mp3";
import music2 from "./music/After school - love letter.mp3";
import music3 from "./music/004 아이유 - 너의 의미 (Feat. 김창완).mp3";
import music4 from "./music/MC Mong - 죽을 만큼 아파서 (Feat. 멜로우).mp3";
import ReactAudioPlayer from 'react-audio-player';
import styled from "styled-components";


const WhatMusic = styled.div`
text-align : center;
align-items: center;
font-size : 15px;
`;

function MusicBox(props) {
  return (
    <div>
      <WhatMusic>
       ♬ now playing - ♬ 
      </WhatMusic>

 
      <ReactAudioPlayer
        src= {music2}
        type="audio/mp3"
        autoPlay
        controls
        volume="0.2"
        style={{ margin: '0 1vw', height: '2vw', width: '20vw' }}
      >오디오 지원 안함 </ReactAudioPlayer>
    </div>
  );
}

export default MusicBox;
