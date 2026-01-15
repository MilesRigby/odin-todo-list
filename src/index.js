import "./styles.css";

// Test code for checking node/webpack setup works for a simple case
const contentArea = document.getElementById("#content");

const testText = document.createElement("p");
testText.className = "test-dynamic";
contentArea.appendChild(testText);