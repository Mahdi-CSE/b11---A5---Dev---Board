const clear = gettingElementById("clear-btn");

clear.addEventListener("click", function () {
    const history = gettingElementById("history-bar");
    history.innerText = "";
});
