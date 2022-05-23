// Select the switch
const toggleSwitch = document.querySelector("#flexSwitchToggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for change on switch
toggleSwitch.addEventListener("change", function () {
    if (theme.getAttribute("href") == "styles/index.css") {
        // switch it to "dark" mode
        theme.href = "styles/index-dark.css";
    } else {
        // back to "light" mode
        theme.href = "styles/index.css";
    }
});

