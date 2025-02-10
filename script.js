let button = "";
const resultBox = document.querySelector(".resultBox");
const inputBox = document.querySelector("#input");

function dropDownBox() {
  const keywords = data.map((value) => {
    return value.name;
  });

  inputBox.addEventListener("keyup", (event) => {
    if (event.key !== "Enter") {
      let result = [];
      let input = inputBox.value;
      if (input.length) {
        result = keywords.filter((value) => {
          return value.toLowerCase().includes(input.toLowerCase());
        });
      }

      display(result);

      if (!result.length) {
        resultBox.innerHTML = "";
      }
    }
  });

  function display(result) {
    const content = result.map((value) => {
      return "<li onclick =  selectInput(this)>" + value + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
  }
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
  inputBox.focus();
}

function clicked(id) {
  const previousButton = document.querySelector(".clicked");

  if (previousButton) {
    previousButton.classList.remove("clicked");
  }

  button = document.querySelector(`#${id}`);
  button.classList.add("clicked");
}

function display() {
  if (button.innerText === "Search by Question Name") {
    dropDownBox();
  }
}

function search() {
  let html = "";
  if (button.innerText === "Search by Question Number") {
    const questionNumber = document.getElementById("input").value;

    for (let i = 0; i < data.length; i++) {
      if (data[i].number === Number(questionNumber)) {
        data[i].language.forEach((value, index) => {
          const link = data[i].solution[index];
          html += `
          
            <p><span class="changeColor">Solution in ${value}:</span><a href="${link}" target="_blank" >${value}</a></p>
            
          
            `;
        });

        document.querySelector(
          ".display"
        ).innerHTML = `<div class ="results"><p> <span class="changeColor">Problem Number:</span><span class="queDetail">${data[i].number}</span></p> 
        <p><span class="changeColor">Problem Name:</span><span class="queDetail">${data[i].name}</span></p>
         ${html}</div>
       
        `;
      }
    }

    if (html === "") {
      document.querySelector(
        ".display"
      ).innerHTML = `<div class="errors">Search not found </div>`;
    }
  } else if (button.innerText === "Search by Question Name") {
    const questionName = document.getElementById("input").value.toLowerCase();

    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toLowerCase() === questionName) {
        data[i].language.forEach((value, index) => {
          const link = data[i].solution[index];
          html += `
         
            <p><span class="changeColor">Solution in ${value}:</span><a href="${link}" target="_blank">${value}</a></p>
            
          
            `;
        });

        document.querySelector(
          ".display"
        ).innerHTML = `<div class ="results"><p> <span class="changeColor">Problem Number:</span><span class="queDetail">${data[i].number}</span></p> 
        <p><span class="changeColor">Problem Name:</span><span class="queDetail">${data[i].name}</span></p>
         ${html}</div>
       
        `;
      }
    }

    if (html === "") {
      document.querySelector(
        ".display"
      ).innerHTML = `<div class="errors">Search not found </div>`;
    }
  } else {
    document.querySelector(
      ".display"
    ).innerHTML = `<div class="errors">Select the above options first </div>`;
  }
}

const modeButton = document.querySelector(".lightMode");

const body = document.querySelector(".body");

modeButton.addEventListener("click", () => {
  body.classList.toggle("darkMode");
  document.querySelector(".circle").classList.toggle("animate");
});
