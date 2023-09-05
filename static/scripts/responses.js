function getBotResponse(input) {
  if (input.toLowerCase() == "hello" || input.toLowerCase() == "hi") {
    return "Hello there! I'm able to answer your questions about the clinic.";
  }
  else if (input.toLowerCase() == "goodbye" || input.toLowerCase() == "bye") {
    return "Talk to you later!";
  }
  else {
    return "Sorry, I couldnt quite understand. I'm only trained to answer questions regarding the clinic.";
  }
}