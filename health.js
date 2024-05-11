let main = document.getElementById("main-txt");

let data ;
let datalength = 0;
async function getData(){
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d3c1020d2f634bbe905a2b53af580ec4");
    const result  = await res.json();
    data = result.articles;
    datalength = data.length;
    console.log(data);
    renderUI();
}

getData();

function renderUI() {
  for (let i = 0; i < datalength; i++) {
    let article = document.createElement("article");
    article.innerHTML = `<article class="main">
    <img src="${data[i].urlToImage}" alt="news">
    <div class="art1">
        <h2>${data[i].title}</h2>
        <p>${data[i].description}</p>
        <a href = "${data[i].url}" target = "_blank">Read More..</a>
    </div>
    
    </article>`;
main.appendChild(article);
  }
}
