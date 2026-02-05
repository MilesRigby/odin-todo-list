// Creates a confirmation window, accepting some text to describe the action the user is taking,
// and a callback to the results of that action if confirmed, running this callback on clicking yes.
const OpenConfirmationModal = (actionText, callback) => {

    // Request for confirmation text
    const displayMessage = "Are you sure you want to " + actionText + "?";

    // Background prevents clicking on other page elements while modal is open
    const background = document.createElement("div");
    background.id = "confirmation-background";

    const modal = document.createElement("div");
    modal.id = "confirmation-modal";
    background.appendChild(modal);

    const message = document.createElement("p");
    message.id = "confirmation-text";
    message.innerText = displayMessage;
    modal.appendChild(message);

    // Buttons used for confirmation of whether the user wants to take the related action
    // Triggers the callback and closes the confirmation window on clicking yes, or simply closes on no.

    const yesButton = document.createElement("button");
    yesButton.className = "confirmation-button";
    yesButton.innerText = "yes";
    yesButton.addEventListener("click", () => {
        callback();
    });
    modal.appendChild(yesButton);

    const noButton = document.createElement("button");
    noButton.className = "confirmation-button";
    noButton.innerText = "no";
    noButton.addEventListener("click", () => {
        CloseConfirmationModal();
    });
    modal.appendChild(noButton);

    document.getElementById("content").appendChild(background);    

}

const CloseConfirmationModal = () => { document.getElementById("confirmation-background").remove(); }

export default OpenConfirmationModal;