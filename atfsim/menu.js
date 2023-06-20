


/* ========================================================================== */
/*                                  Main Menu                                 */
/* ========================================================================== */

/* ----------------------------- Button Handlers ---------------------------- */

// start button
document.getElementById("start-button").children[0].addEventListener("click", function () {
	print("START-BUTTON was clicked!");
	document.getElementById("menu-main").setAttribute("style", "visibility: hidden");

	startGame();
});

// settings button
document.getElementById("settings-button").addEventListener("click", function () {
	print("SETTINGS-BUTTON was clicked!");
	if (menuSettingsEnabled == true) {
		document.getElementById("menu-settings").setAttribute("style", "visibility: hidden")
		menuSettingsEnabled = false;
	} else {
		document.getElementById("menu-settings").setAttribute("style", "visibility: visible")
		menuSettingsEnabled = true;
	}
});