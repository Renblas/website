


/* ========================================================================== */
/*                                  Main Menu                                 */
/* ========================================================================== */

/* ----------------------------- Button Handlers ---------------------------- */

// start button
document.getElementById("start-button").children[0].addEventListener("click", function() {
	print("I was clicked!")
	document.getElementsByClassName("menu-main")[0].setAttribute("style", "visibility: hidden")
})

// settings button
document.getElementById("settings-button").addEventListener("click", function() {
	print("I was clicked!")
})