import React from 'react'
import ChampionSlider from "./ChampionSlider";
import StudentSlider from "./StudentSlider";
import Subject from "./Subjects";

// border-8 border-red-400

function MainContent() {

  return (
    <div className="min-h-screen grid gap-5 w-full mt-18 box-border">
      <ChampionSlider />
      <StudentSlider />
      <Subject />
    </div>
  )
}

export default MainContent;