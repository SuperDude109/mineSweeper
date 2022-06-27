import Mine from "../Mine/Mine.jsx"
import React from "react";
import "./MineField.css"
import { useState } from "react";
var clicked = []
function MineField({columns,rows,mineData}) {
  let [gamesEnding,setGamesEnding] = useState(<></>)
  let mines = []
  for(let row = 0 ; row<rows;row++){
    for(let column = 0 ; column<columns;column++){
      mines.push(<Mine 
        name = {row*rows+column}
        test={row*rows+column}
        key={row*rows+column} 
        txt = {"#"} 
        func={mineCallBack}
        endGame={endGame}/>)
    }
  }
  let autoString = ""
  for(let index =0;index < columns;index++){
		autoString+="auto "
	}
  return (
    <>
      {gamesEnding}
      <div className="field">
        <div 
          style={{display:"inline-grid", gridTemplateColumns:""+autoString+""}}
          className="mine-field" 
          data-testid="mine-field">
          {mines.map(mine=>mine)}
        </div>
        
      </div>
    </>
  );
  
  function endGame(win){
    if(win){
        setGamesEnding(<div className="">You WON!</div>)
      }else {
        setGamesEnding(<h1 className="">You LOST!</h1>)
        for(let index =0;index < mineData.length;index++){
          setTimeout(()=>document.getElementById(index).click(),1)//below
          // console.log("trying to click ",index)
        }
    }
  }
   function mineCallBack(number,funct){//hoisted function
      if(mineData[number]== 0 ){
        let currentSpot = 0;
        clicked.push(number)
        if(number >= 0 && number < mineData.length) {
          
          if(number%columns !=columns-1 && !clicked.includes(number+1)){
            setTimeout(()=>document.getElementById(number+1).click(),1);//right
          }
          if(number%columns !=0 && !clicked.includes(number-1)){
            setTimeout(()=>document.getElementById(number-1).click(),1)//left
          }

          let above=number-rows
          if(above>0){
            if(!clicked.includes(above)){
              clicked.push(above)
              setTimeout(()=>document.getElementById(above).click(),1)//below
            }
            if(above%columns !=columns-1 && !clicked.includes(above+1)){
              clicked.push(above+1)
              setTimeout(()=>document.getElementById(above+1).click(),1);//right
            }
            if(above%columns !=0 && !clicked.includes(above-1)){
              clicked.push(above-1)
              setTimeout(()=>document.getElementById(above-1).click(),1)//left
            }
          }

          let below=number+rows
          if(below<mineData.length){
            if(!clicked.includes(below)){
              clicked.push(below)
              setTimeout(()=>document.getElementById(below).click(),1)//above
            }
            if(below%columns !=columns-1 && !clicked.includes(below+1)){
              clicked.push(below+1)
              setTimeout(()=>document.getElementById(below+1).click(),1)//right
            }
            if(below%columns !=0 && !clicked.includes(below-1)){
              clicked.push(below-1)
              setTimeout(()=>document.getElementById(below-1).click(),10)//left
            }
          }
        }
      }else{
      }
      
      funct(mineData[number])
  
  
}
}
export default MineField;
