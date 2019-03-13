

d = document.getElementById('a_four');
e = document.getElementById('a_five');
f = document.getElementById('a_six');

l = document.getElementById('uw');

document.getElementById('big_b').addEventListener("click", goingHome);

function playShooting(){
  document.getElementById('shooting').play();
}

function restartRooms(){
  document.location.href = "https://leahtorres.github.io/phase8/index1.html"
}

function aliens(){
  d.src = 'tenor.gif';
  e.src = 'tenor.gif';
  f.src = 'tenor.gif';
}

function aliens2(){
  d.src = 'source.gif';
  e.src = 'source.gif';
  f.src = 'source.gif';
}

function endAll(){
  d.src = '';
  e.src = '';
  f.src = '';
}

function youDidIt(){
  document.body.style.backgroundImage = "url('you-did-it.jpg')";
}

function liftingOff(){
  document.body.style.backgroundImage = "url('cockpit1.png')";
}

function startingUp(){
  document.body.style.backgroundImage = "url('cockpit2.png')";
}

function movingAlong(){
  document.body.style.backgroundImage = "url('cockpit3.png')";
}

function slowingDown(){
  document.body.style.backgroundImage = "url('cockpit4_bar.png')";
}

function hereAlready(){
  document.body.style.backgroundImage = "url('cockpit5.png')";
}

function removeWon(){
  l.src = '';
}

function toggleWon(){
  l.src = 'you-won.png';
  setTimeout(removeWon, 1000);
}

function winning(){
  setTimeout(toggleWon, 1000);
  setTimeout(toggleWon, 3000);
  setTimeout(toggleWon, 5000);
  setTimeout(toggleWon, 7000);
  setTimeout(toggleWon, 9000);
  setTimeout(toggleWon, 11000);
  setTimeout(toggleWon, 13000);
  setTimeout(toggleWon, 15000);
  setTimeout(toggleWon, 17000);
  setTimeout(toggleWon, 19000);
  setTimeout(toggleWon, 21000);
  setTimeout(toggleWon, 23000);
  setTimeout(toggleWon, 25000);
  setTimeout(toggleWon, 27000);
  setTimeout(toggleWon, 29000);
  setTimeout(toggleWon, 31000);
  setTimeout(toggleWon, 33000);
  setTimeout(toggleWon, 35000);
  setTimeout(toggleWon, 37000);
}

function goingHome(){
  document.getElementById('big_b').removeEventListener("click", goingHome);
  document.getElementById('big_b').classList.remove('click-me');
  liftingOff();
  playShooting();
  setTimeout(startingUp, 3000);
  setTimeout(movingAlong, 6000);
  setTimeout(slowingDown, 9000);
  setTimeout(hereAlready, 12000);
  setTimeout(winning, 12000);
  setTimeout(aliens, 12000);
  setTimeout(aliens2, 20200);
  setTimeout(endAll, 45200);
  setTimeout(restartRooms, 50000);
}
