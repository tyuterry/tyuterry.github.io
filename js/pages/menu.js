let menuHistoryItem;
window.onload = () => {
  init();
  initMenuPage();
}
initMenuPage = async() => {
  menuHistoryItem = document.getElementById("menuHistoryItem");

  menuHistoryItem.addEventListener("click", () => {
    window.location.href=("./History.html");
  });
}