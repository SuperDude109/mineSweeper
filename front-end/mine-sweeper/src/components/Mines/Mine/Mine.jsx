import React from "react";
import { useState ,useEffect} from "react";
function Mine({txt,func,test,endGame}) {
  let [name,setName] = useState("mine")
  let [isClicked,setIsClicked] = useState(false)
  let [text,setText] = useState(txt)
  // useEffect(if(text==9),[text])
  return (
    <div
      id={test}onClick={()=>spaceRevealed()}
      className={name} 
      data-testid="mine"
      style={{WebkitTextFillColor:"rgb("+255/(text*2)+","+0+","+2*(text*16)+")"}}>
      {text}
    </div>
  );

function spaceRevealed(){//hoisted function
  // console.log("Mine was clicked")
  func(test,changeTxt)
  
}
function changeTxt(newText){
  setIsClicked(true)
  if(newText == 9 )
  {
    newText="💣"
    endGame(false)
  }
  if(newText ==0){
    newText=""
    setName("blank")
  }
  // console.log("We tried to change the txt to ",newText)
  setText(newText)
}
}
export default Mine;
