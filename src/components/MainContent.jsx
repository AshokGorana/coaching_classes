import React from 'react'
import ChampionSlider from "./ChampionSlider";

function MainContent(){

    return (
        <div>
            <Slides/>
        </div>
    )
}


function Slides(){

    return (
        <div className="min-h-screen border-8 border-red-400 mt-[4.8rem] box-border">
      <ChampionSlider />
    </div>
    )
}

export default MainContent;