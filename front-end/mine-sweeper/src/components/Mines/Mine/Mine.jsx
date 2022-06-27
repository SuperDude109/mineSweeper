import React from "react";
import { useState ,useEffect} from "react";
function Mine({txt,func,test,endGame}) {
  let [name,setName] = useState("mine")
  let [isClicked,setIsClicked] = useState(false)
  let [text,setText] = useState(txt)
  let [style,setStyle]=useState({WebkitTextFillColor:"rgb("+255/(text*2)+","+0+","+2*(text*16)-32+")"})
  return (
    <div
      id={test}onClick={()=>spaceRevealed()}
      className={name} 
      data-testid="mine"
      style={style}
      onWheel={()=>flagged()}
      >
      {text}
    </div>
  );


function flagged(){
  if(text !=" ")
  if(text !=="🚩" || text ==="#"){
      setText("🚩")
    } else if(text === "🚩"){
      setText("#")
    }
  }
function spaceRevealed(){//hoisted function
  if(text =="🚩"){

  }else{
    func(test,changeTxt)  
  }
}
function changeTxt(newText){
  setIsClicked(true)
  if(newText == 9 )
  {
    newText="💣"
    setName("blown-up")
    
    endGame(false)
  }else if(newText ==0){
    newText=" "
    setName("blank")
  }else{
    setName("space")
  }
  
  // console.log("We tried to change the txt to ",newText)
  setText(newText)
}
}
export default Mine;
