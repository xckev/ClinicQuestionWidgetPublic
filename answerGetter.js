let questionForm = document.getElementById("questionForm");

questionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let question = document.getElementById("question-input");

  if (question.value == "") {
    alert("Ensure you input a value!");
  } else {
    // perform operation with form input
    let output = document.createElement("p");
    
    output.textContent = "<QUESTION ANSWER>";
    document.body.appendChild(output);
    question = "";
  }
});