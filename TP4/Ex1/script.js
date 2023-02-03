const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const content = document.getElementById("content");
const about = document.getElementById("about");

btn2.addEventListener("click", () => {
  btn2.style.backgroundColor = "white";
  btn1.style.backgroundColor = " rgb(226 232 240)";
  btn3.style.backgroundColor = " rgb(226 232 240)";
  content.textContent = "Vision";
  about.textContent =
    "Our vision is to create a better everyday life for many people.That's aspirational, short and to the point. More than that, it sets the tone for the company and makes it clear that they're in the market to offer low-priced good furnishings that suit everyone's lifestyle.";
});
btn1.addEventListener("click", () => {
  content.textContent = "History";
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = " rgb(226 232 240)";
  btn3.style.backgroundColor = " rgb(226 232 240)";
  about.textContent =
    " History is an umbrella term comprising past events as well as thememory, discovery, collection, organization, presentation, and interpretation of these events. Historians seek knowledge of the past using historical sources such as written documents, oral accounts, art and material artifacts, and ecological markers.";
});
btn3.addEventListener("click", () => {
  content.textContent = "Goal";
  btn3.style.backgroundColor = "white";
  btn2.style.backgroundColor = " rgb(226 232 240)";
  btn1.style.backgroundColor = " rgb(226 232 240)";
  about.textContent =
    " I will learn new sales techniques to increase sales at work. Measurable: My goal is to double my sales in four months. Attainable: I've been a sales associate for two years now. I know the basics, and I'm ready to learn more. Relevant: I want to feel more confident at my job and learn new skills.";
});
