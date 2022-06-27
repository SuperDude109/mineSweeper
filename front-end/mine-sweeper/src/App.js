import MineField from "./components/Mines/MineField/MineField.jsx"
import Header from "./components/Header/Header";
import {useState,useEffect} from "react"
let rows = 10
let columns = 10

function App() {
let [mines,setMines] = useState([0])
useEffect(()=>{
  fetch("http://localhost:3002/playSweeper")
    .then(response => response.json())
    .then(data => setMines([...data]))}
  ,[])
  return (
    <div className="App">
      <header>Testing</header>
      <Header difficulty="Easy" username="Bobby"/>
      <MineField columns={columns} rows={rows} mineData={mines}/>
    </div>
  );
}
export default App;
