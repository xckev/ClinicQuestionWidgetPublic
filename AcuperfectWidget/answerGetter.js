let submitBtn = document.getElementById("qa-submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let question = document.getElementById("question-input");

  if (question.value == "") {
    alert("Ensure you input a value!");
  } else {
    // perform operation with form input
    let output = document.createElement("p");

    output.textContent = "<QUESTION ANSWER>";
    document.getElementById('qa-container').appendChild(output);
    question = "";
    return false;
  }
});