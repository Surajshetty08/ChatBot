function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    if (input == "hello how are you") {
        return "Hi there im fine how are you!!";
    } else if (input == "Im fine"){
        return "good to hear!!!";
    }

    if (input == "hey") {
        return "hey there!!";
    }else if (input == "how are you"){
        return "Im fine thank you"
    }else if (input == "bye"){
        return "bye see you soon"
    }else if (input == "HELLO how are you!!"){
        return "Im fine thank you"
    }

    
    if (input == "hi") {
        return "Hi there!!";
    }else if (input == "fuck"){
        return "Not good to use harse words";
    }else if (input == "bitch"){
        return "Not good to use harse words";
    }else if (input == "asshole"){
        return "Not good to use harse words";
    }
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "See you soon!";
    } else {
        return "Try asking something else!";
    }
    
}