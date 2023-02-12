import React from "react";
import SlotMac from "./SlotMac";

const App = () => {
  return(
   <>
    <h1 className="heading_style">
     🎰 Welcome to <span style={ {fontWeight : 'bold'} }> Slot machine game</span> 🎰 </h1>
    <div className="slotMachine">
     <SlotMac x = '😄' y = '😄' z = '😄'/>
     <SlotMac x = '😄' y = '🙄' z = '😄' />
     <SlotMac x = '🍔' y = '🍔' z = '🍔'/>
     <SlotMac x = '🍕' y = '🍔' z = '🍔'/>
    </div>
   </>
  );
}


export default App;