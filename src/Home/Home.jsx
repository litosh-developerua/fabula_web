import React from 'react'
import Welcome from './1_Welcome/Welcome'
import Map from './2_Map/Map'
import History from './3_History/History'
import GameDesignDeck from './4_GameDesignDeck/GameDesignDeck'
import Workspace from './5_Workspace/Workspace'
import Heroes from './6_Heroes/Heroes'
import Community from './7_Community/Community'
import Feedback from './8_Feedback/Feedback'
import FooterBlock from './9_Footer/FooterBlock'


function Home() {
  return (
    <>
     <Welcome/>
     <Map/>
     <History/>
    <GameDesignDeck/>
    <Workspace/>
    <Heroes/>
    <Community/>
    <Feedback/>
    <FooterBlock/>
    </>
  )
}

export default Home