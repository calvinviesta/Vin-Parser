function parseData() {
  let text = document.getElementById("inputText").value;
  document.getElementById("inputText").value = text.toUpperCase();
}

function copyData() {
  let textArea = document.getElementById("inputText");
  textArea.select();
  document.execCommand("copy");
}

function clearData() {
  document.getElementById("inputText").value = "";
}
