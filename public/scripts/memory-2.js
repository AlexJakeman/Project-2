var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
var lastKnownButtonId = undefined;
var lastKnownButtonNumber = undefined;
var wait = false;
var matches = 0;
var score = 0;
let feedback = "Select two cards to find out."
 
document.querySelector(".matches").textContent = matches;
document.querySelector(".feedback").textContent = feedback;
document.querySelector(".memory-score").textContent = score;

//elements
var buttons = document.querySelectorAll("button");
 
//code
shuffle(numbers);
distributeNumbers();
 
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (e) {
    var turnable = e.target.dataset.turnable;
 
    //first click
    if (!wait && lastKnownButtonId == undefined && lastKnownButtonNumber == undefined && turnable == 'true') {
      e.target.dataset.turnable = 'false';
      e.target.innerHTML = getgImage(event.target.dataset.number);
      e.target.style.backgroundColor = 'orange';
 
      lastKnownButtonId = e.target.id;
      lastKnownButtonNumber = e.target.dataset.number;
      
      
    }
 
    //second click
    else if (!wait && lastKnownButtonId != undefined && lastKnownButtonNumber != undefined && turnable == 'true' && e.target.id != lastKnownButtonId) {
      e.target.dataset.turnable = 'false';
 
      e.target.innerHTML = getgImage(event.target.dataset.number);
 
      //match
      if (e.target.dataset.number == lastKnownButtonNumber) {
        e.target.style.backgroundColor = 'green';
        document.getElementById(lastKnownButtonId).style.backgroundColor = 'green';
 
        lastKnownButtonId = undefined;
        lastKnownButtonNumber = undefined;
 
        document.querySelector(".feedback").textContent = "Yes";
        score++;
        matches++;
        pairs++;
        
        console.log(matches, score);

        if (matches == 6) {
          showWinScreen();
        }

        document.querySelector(".matches").textContent = matches;
        document.querySelector(".memory-score").textContent = score;
      }
 
      //no match
      else {
        document.getElementById(lastKnownButtonId).style.backgroundColor = 'red';
        e.target.style.backgroundColor = 'red';
        wait = true;


        document.querySelector(".feedback").textContent = "No";
        score++;
        document.querySelector(".memory-score").textContent = score;

        setTimeout(() => {
          e.target.dataset.turnable = 'true';
          e.target.style.backgroundColor = 'white'
          e.target.innerHTML = getgImage(0);
 
 
          var tempLastClickedButton = document.getElementById(lastKnownButtonId);
 
          tempLastClickedButton.dataset.turnable = 'true';
          tempLastClickedButton.style.backgroundColor = 'white';
          tempLastClickedButton.innerHTML = getgImage(0);
 
          lastKnownButtonId = undefined;
          lastKnownButtonNumber = undefined;
          wait = false;
        }, 1000);
 
 
      }
    }
 
  });
}
 
// showWinScreen();
 
 
//functions
function reset() {
  lastKnownButtonId = undefined;
  lastKnownButtonNumber = undefined;
  wait = false;
  shuffle(numbers);
  distributeNumbers();
  matches = 0;
  score = 0;
  feedback = "Select two cards to find out."
 
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = getgImage(0);
    buttons[i].style.backgroundColor = '#333A2F';
 
    document.querySelector('.win-container').style.display = 'none';
 
    document.getElementById("6").style.display = 'block';
    document.getElementById("7").style.display = 'block';
    document.getElementById("10").style.display = 'block';
    document.getElementById("11").style.display = 'block';
 
  }
}
 
 
function showWinScreen() {
  document.querySelector('.win-container').style.display = 'flex';
 
  document.getElementById("6").style.display = 'none';
  document.getElementById("7").style.display = 'none';
  document.getElementById("10").style.display = 'none';
  document.getElementById("11").style.display = 'none';
}
 
function getgImage(number) {
  switch (number) {
    case '1':
      return '<img src="/public/images/memory-cards/dark-arcade-card.png">';
    case '2':
      return '<img src="/public/images/memory-cards/light-arcade-card.png">';
    case '3':
      return '<img src="/public/images/memory-cards//dark-controller-card.png">';
    case '4':
      return '<img src="/public/images/memory-cards/light-controller-card.png">';
    case '5':
      return '<img src="/public/images/memory-cards/dark-monitor-card.png">';
    case '6':
      return '<img src="/public/images/memory-cards/light-monitor-card.png">';
    default:
      return '<img src="/public/images/memory-cards/rearside-card.png">';
 
  }
}
 
function distributeNumbers() {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].dataset.number = numbers[i];
  }
}
 
function shuffle(array) {
  var j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}