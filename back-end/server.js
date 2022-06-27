
import express from 'express';
import cors from 'cors'

const app = express();
const port = 3002;


app.use(cors());

app.get('/playSweeper', (req, res) => {
  console.log("\n\n\We have a get!\n\n")
  let client = req.body;
  // console.log("Here is our incoming data",client["rows"]?10:"undefined")
  res.send(client?mineDataGenerator(client.rows,client.columns,client.difficulty,client.numberOfMines):mineDataGenerator());
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});

function getDifficulty(difficulty){
  switch(difficulty.toUpperCase()){
    case "EASY":return 0.1;
    case "MEDIUM":return 0.15;
    case "HARD":return 0.2;
    case "INSANE":return 0.3;
    case "IMPOSSIBLE":return 0.7;
    case "IMPOSSIBLE!":return 0.8;
    case "!IMPOSSIBLE!":return 0.9;
    case "UNHUMAN":return 0.95;
  }
}
function mineDataGenerator(rows=10,
    columns=10,
    difficulty="easy",
    numberOfMines=rows*columns*getDifficulty(difficulty)){
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
      if(mineLocations.includes((row-1)*rows + column-1) && (column - 1 >=0)) adjacentMines++;//tl
      if(mineLocations.includes((row-1)*rows + column-0)) adjacentMines++;//t
      if(mineLocations.includes((row-1)*rows + column+1) && column+1 <columns) adjacentMines++;//tr
      if(mineLocations.includes(row*rows-0 + column-1) && (column - 1 >=0)) adjacentMines++;//l
      if(mineLocations.includes(row*rows-0 + column+1) && column+1 <columns) adjacentMines++;//r
      if(mineLocations.includes((row+1)*rows + column-1) && (column - 1 >=0)) adjacentMines++;//bl
      if(mineLocations.includes((row+1)*rows + column-0)) adjacentMines++;//b
      if(mineLocations.includes((row+1)*rows + column+1) && column+1 <columns) adjacentMines++;//br

      if(mineLocations.includes(row*rows-0 + column-0)) adjacentMines=9;
      spaces.push(adjacentMines)
    }
  }
  return spaces
}