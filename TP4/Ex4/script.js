class color {
  colorType = "";
  records = [];
  constructor(type) {
    this.colorType = type;
    localStorage.getItem("colorList");
  }
  gennerate() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.colorType = randomColor;
  }
  getRandomNumber() {
    return this.colorType;
  }
  getRecord() {
    this.records.push(this.getRandomNumber());
    localStorage.setItem("colorList", this.records);
    return this.records;
  }
  reset() {
    this.records.splice(0, this.records.length);
    return "";
  }
}
var color1 = new color();

document.getElementById("btnGen").addEventListener("click", () => {
  color1.gennerate();
  var newColor = color1.getRandomNumber();

  document.getElementById("processPlace").style.backgroundColor = newColor;

  document.getElementById("processPlace1").style.backgroundColor = newColor;

  var ListColor = color1.getRecord();
  document.getElementById("currentcolor").textContent = newColor;

  document.getElementById("colorList").innerHTML += `<div>${
    ListColor[ListColor.length - 1]
  }</div>`;
});
