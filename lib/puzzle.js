// ///////
// Rehearsal
// ///////

// 1. Select the elements
const button = document.querySelector("#show-hint");
const message = document.querySelector(".hint");

// 2. Listen to a click on the hint button
button.addEventListener("click", (event) => {
  // 3. Modify the DOM
  message.style.opacity = 1;
});

// ///////
// Livecode
// ///////

//1. Select element all the tile
const tiles = document.querySelectorAll('td');
//2. Foreach tile
tiles.forEach((tile) => {
  //3. Listen to an click
  tile.addEventListener("click", (event) => {
    // 4. Check if tile is to the next to the empty tile
    if (nextEmpty(event.currentTarget)) {
      // 5. Switch the tile
      switchTile(event.currentTarget);
    }
    // 6. Check the order, if win or not
    if (isWin()) {
      alert("OMG we did it!");
    }
  });
});

const nextEmpty = (tile)=> {
  // find the coordinates of our tile
  const clickedX = tile.cellIndex;
  const clickedY = tile.parentNode.rowIndex;
  // find the coordinates of the black tiles
  const emptyX = document.querySelector('.empty').cellIndex;
  const emptyY = document.querySelector('.empty').parentNode.rowIndex;
  // return true if the empty tile is nearby, else false
  return (Math.abs(clickedX - emptyX) + Math.abs(clickedY - emptyY) === 1);
};

const switchTile = (tile) => {
  // select the tile clicked and the empty one
  const empty = document.querySelector('.empty');
  // assign class empty to the clicked one
  tile.classList.add("empty");
  // remove the class from the empty one
  empty.classList.remove("empty");
  // Give the tile number to the empty tile
  empty.innerText = tile.innerText;
  // Remove the number of the tile
  tile.innerText = "";
};

const isWin = () => {
  let order = "";
  tiles.forEach((tile) => {
    order += `${tile.innerText},`;
  });
  console.log(order);
  return (order === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,,");
};
