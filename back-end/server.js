
import express from 'express';
const app = express();
const port = 3002;


app.get('/', (req, res) => {
  res.send(mineDataGenerator());
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});


function mineDataGenerator(numberOfMines=10,rows=10,columns=10){
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
      if(mineLocations.includes((row-1)*rows + column-1) && ((row-1)*rows + column-1)%columns!==0) adjacentMines++;//tl
      if(mineLocations.includes((row-1)*rows + column-0)) adjacentMines++;//t
      if(mineLocations.includes((row-1)*rows + column+1) && ((row-1)*rows + column+1)%columns!==columns-1) adjacentMines++;//tr
      if(mineLocations.includes(row*rows-0 + column-1) && (row*rows-0 + column-1)%columns!==0) adjacentMines++;//l
      if(mineLocations.includes(row*rows-0 + column+1) && (row*rows-0 + column+1)%columns!==columns-1) adjacentMines++;//r
      if(mineLocations.includes((row+1)*rows + column-1) && ((row+1)*rows + column-1)%columns!==0) adjacentMines++;//bl
      if(mineLocations.includes((row+1)*rows + column-0)) adjacentMines++;//b
      if(mineLocations.includes((row+1)*rows + column+1) && ((row+1)*rows + column+1)%columns!==columns-1) adjacentMines++;//br

      if(mineLocations.includes(row*rows-0 + column-0)) adjacentMines=9;//center
      spaces.push(adjacentMines)
    }
  }
  return spaces
}