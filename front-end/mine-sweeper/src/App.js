import MineField from "./components/Mines/MineField/MineField.jsx"
import Header from "./components/Header/Header";
let rows = 10
let columns = 10
function App() {
  
  return (
    <div className="App">
      <header>Testing</header>
      <Header difficulty="Easy" username="Bobby"/>
      <MineField columns={columns} rows={rows} mineData={mineDataGenerator()}/>
    </div>
  );
}
function mineDataGenerator(numberOfMines=10){
  let mineLocations = []
  for(let index = 0; index < numberOfMines;index++){
    let randomNumber = Math.floor(Math.random() * (rows*columns)) + 0
    while(mineLocations.includes(randomNumber)){
      randomNumber = Math.floor(Math.random() * (rows*columns)) + 0
    }
    mineLocations.push(randomNumber)
  }
  let spaces=[]
  for(let row = 0 ; row<rows;row++){
    for(let column = 0 ; column<columns;column++){
      let adjacentMines = 0;
      if(mineLocations.includes((row-1)*rows + column-1)) adjacentMines++;
      if(mineLocations.includes((row-1)*rows + column-0)) adjacentMines++;
      if(mineLocations.includes((row-1)*rows + column+1)) adjacentMines++;
      if(mineLocations.includes(row*rows-0 + column-1)) adjacentMines++;
      if(mineLocations.includes(row*rows-0 + column+1)) adjacentMines++;
      if(mineLocations.includes((row+1)*rows + column-1)) adjacentMines++;
      if(mineLocations.includes((row+1)*rows + column-0)) adjacentMines++;
      if(mineLocations.includes((row+1)*rows + column+1)) adjacentMines++;

      if(mineLocations.includes(row*rows-0 + column-0)) adjacentMines="9";
      spaces.push(adjacentMines)
    }
  }
  return spaces
}
export default App;