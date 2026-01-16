import PageLoader from "../pages/PageLoader.js";

// Handles setup of the navigation section at the head of the page. 
// Requires no modification to add new navigation buttons to the nav section.
const NavHeaderSetup = () => {

    // Get all HTML elements in the template (permanent links) with the "data-nav-dest" attribute
    const navList = document.querySelectorAll("[data-nav-dest]");

    for (let i=0; i<navList.length; i++) {

        // Get an element with the data-nav-dest attribute and read the attribute's data
        const navLink = navList[i];
        const destination = navLink.dataset.navDest;

        // Set up event listener on the element to load requested page on click
        navLink.addEventListener( "click", () => { PageLoader(destination); } );
    
    }  

}

// Initialise navigation section automatically on load
NavHeaderSetup();