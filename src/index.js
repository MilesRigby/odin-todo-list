// Load css for the project
import "./styles.css";

// Set up the permanent navigation section in template.html
import "./navigation/NavHeaderSetup.js"

// Use the page loader to load the projects page on start-up
import PageLoader from "./pages/PageLoader.js";

PageLoader("projects");