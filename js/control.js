document.addEventListener("keydown", (e) => {
  if (e.keyCode === 37) { // if left arrow is pressed
    function playerMove(control) { // run this playerMove() function with a control argument
      player.pos.x += control; // we move our players position on the x axis based on the control (-1)
      if (collide(field, player)) { //we check to see if the field and player collide
        player.pos.x -= control; // if they collide then we move our player position back
      }
    }
    playerMove(-1); // the control is -1
  } else if (e.keyCode === 39) { // if right arrow is pressed
    function playerMove(control) { // run this playerMove() function with a control argument
      player.pos.x += control; // we move our players position on the x axis based on the control (+1)
      if (collide(field, player)) { //we check to see if there is a collision
        player.pos.x -= control; // if they collide then we move our player position back
      }
    }
    playerMove(+1); // The control is -1
  }
