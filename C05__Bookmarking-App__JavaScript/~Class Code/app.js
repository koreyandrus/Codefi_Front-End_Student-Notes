// * ========== HTML Element Selectors ========== * \\
const bodyEl = document.body;
const inputEl = document.querySelector(".link-input");
const overlayEl = document.querySelector(".overlay");
const formEl = document.querySelector(".link-form");
const linkListEl = document.querySelector(".link-list");

// * ========== Global Variables ========== * \\
const allLinks = JSON.parse(localStorage.getItem("link_list")) || [];

// * ========== Function Declarations ========== * \\
// FUNCTION: Adds the "focus-form" class on the body when the form is in focus
function focusInput() {
  bodyEl.classList.add("focus-form");
}

// FUNCTION: Removes the "focus-form" class on the body when the form is out of focus
function endFocus() {
  bodyEl.classList.remove("focus-form");
}

// FUNCTION: Create a new list-item when the URL/form is submitted
function createLink(e) {
  // Prevent the page from reloading
  e.preventDefault();

  const url = inputEl.value;

  // Add new link to allLinks Array
  allLinks.push(url);

  // Repopulate the HTML List
  populateLinkList(allLinks);

  //   Save list to localStorage
  saveLinkListToLocalStorage(allLinks);

  // Reset the form
  formEl.reset();
}

// FUNCTION: Populate HTML with a list of bookmarks
function populateLinkList(links = []) {
  // Loop over all the links and create a new bookmark for each element
  linkListEl.innerHTML = links
    .map(
      (link, idx) =>
        `<li data-index=${idx}>
	<a class='link' href=${link} target='_blank' >${link}</a>
	<button class='close-btn'>&times;</button>
	</li>`
    )
    .join("");
}

// FUNCTION: Saves link list in LocalStorage
function saveLinkListToLocalStorage(links = []) {
  localStorage.setItem("link_list", JSON.stringify(links));
}

// FUNCTION: Removes a link when the link x button is clicked
function removeLink(e) {
  // If we are NOT clicking on the "x"... don't run anymore code
  if (!e.target.matches(".close-btn")) return;

  // Find the index
  const idx = e.target.parentNode.dataset.index;

  // Remove the link from the global list
  allLinks.splice(idx, 1);

  // Refill the list with updated items
  populateLinkList(allLinks);

  //   Save new changes to localStorage
  saveLinkListToLocalStorage(allLinks);
}

// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listen for "focus" event on the "input" and run "focusInput" function
inputEl.addEventListener("focus", focusInput);

// EVENT LISTENER: Listen for the "click" event on the "overlayEl" and run the "endFocus" function
overlayEl.addEventListener("click", endFocus);

// EVENT LISTENER: Listen for "submit" event on the "formEl" and run a function called "createLink"
formEl.addEventListener("submit", createLink);

// EVENT LISTENER: Listen for a "click" event on the "linkList" and run the "removeLink" function
linkListEl.addEventListener("click", removeLink);

// * ========== On Application Start ========== * \\
populateLinkList(allLinks);
