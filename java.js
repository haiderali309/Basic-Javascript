function hello(){
    alert("Hello, World!");
}

  display = document.getElementById('display');
  buttons = document.querySelectorAll('.cal-btn');
  equalsButton = document.getElementById('equals');
  clearButton = document.querySelectorAll('.cal-btn')[0];

  let currentInput = "";

  function updateDisplay() {
      display.textContent = currentInput;
  }

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          value = button.textContent;

          if (value === 'C') {
              currentInput = "";
          } else {
              currentInput += value;
          }

          updateDisplay();
      });
  });

  equalsButton.addEventListener('click', () => {
      try {
          currentInput = eval(currentInput);
      } catch (error) {
          currentInput = "Error";  
      }
      updateDisplay();
  });






  function genrateNumber(){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        document.getElementById('numberDisplay').textContent = randomNumber; 
  }



   function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertTemperature(){

    celsiusInput = document.getElementById('celsius').value;
    fahrenheitInput = document.getElementById('fahrenheit').value;
    if (celsiusInput !== "" && fahrenheitInput !== "" ){
        document.getElementById('result').textContent = "Error";
    } 
    else if(celsiusInput !== "") {
        document.getElementById('result').textContent = celsiusToFahrenheit(parseFloat(celsiusInput));
    }else if(fahrenheitInput !== ""){
        document.getElementById('result').textContent = fahrenheitToCelsius(parseFloat(fahrenheitInput));
    }
    else{
        document.getElementById('result').textContent = "";
    }
}

function checkPalindrome() {
    inputText = document.getElementById('inputText').value;
    reversedText = inputText.split('').reverse().join('');
    result = inputText === reversedText;
    if (result) {
        document.getElementById('ans').textContent = "is a palindrome!";
    } else {
        document.getElementById('ans').textContent = " is not a palindrome.";
    }
}

let timerInterval;
    let seconds = 0;    
    let milliseconds = 0;  
    let minit = 0;  

    function startTimer() {
        document.getElementById('startButton').disabled = true;
        document.getElementById('stopButton').disabled = false;
        timerInterval = setInterval(function() {
            milliseconds++;  
            if (milliseconds === 60) {
                milliseconds = 0;
                seconds++; 
            }
            if(seconds === 60){
                seconds=0
                minit++
                
            }
            document.getElementById('timer').textContent = minit + ":" + seconds + ":" + milliseconds;
        }, 10); 
    }

    function stopTimer() {
        document.getElementById('stopButton').disabled = true;
        document.getElementById('startButton').disabled = false;
        clearInterval(timerInterval); 
    }

    function displaySelectedOption() {
        dropdown = document.getElementById("dropdownMenu");
        selectedOption = dropdown.value;
        if(selectedOption == ""){
            document.getElementById("displayArea").textContent = "please select the option";
        }else{
            document.getElementById("displayArea").textContent = "You selected: " + selectedOption;
        }
    }

    function addToDo() {
        inputField = document.getElementById("todoInput");
        taskValue = inputField.value; 
        if (taskValue === "") {
            alert("Please enter a task.");
            return;
        }
        listItem = document.createElement("li");
        span = document.createElement("span");
        span.textContent = taskValue;
        listItem.appendChild(span);
        document.getElementById("todoList").appendChild(listItem);
        inputField.value = "";
    }