// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitMessage);

//REPLACE "Main" with a single "p"

function submitMessage(){

    const main = document.getElementById("contact-page");
    main.innerHTML = "";
    const message = document.createElement("p");
    message.textContent = "Thank you for your message";

    message.style.fontSize = "24px";
    message.style.textAlign = "center";
    main.appendChild(message);
}