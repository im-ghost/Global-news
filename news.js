
var load=new Loader();
load.start();
load.addText();
load.animateText();

function getNews(){
const marquee=document.querySelector("marquee");
let url2="https://newsapi.org/v2/everything?q=Apple&from=2022-03-18&sortBy=recent&apiKey=efccfeb7138d4fa3849625cafc3d4294";
fetch(url2).then(response=>
       response.json()).then(data=>{
      
  
               console.log(data);
               for(datum of data["articles"]){
                    marquee.textContent+=datum["title"]+". ";   }
});
let url="https://newsapi.org/v2/everything?q=Apple&from=2022-03-18&sortBy=popularity&apiKey=efccfeb7138d4fa3849625cafc3d4294";

const main=document.querySelector("main");

fetch(url).then(response=>
       response.json()).then(data=>{
       	setTimeout(()=>{
          load.remove(5000);
               console.log(data);

for(datum of data["articles"]){

	let container=document.createElement("div");

	container.classList.add("container");

	container.innerHTML=`

	<header>

	<h2 id="datum_title">${datum["title"]}</h2>

	<h6 id="author">By ${datum["author"]}</h6>

	</header>

	<articles id="datum"><img src="${datum["urlToImage"]}" class="img"/><p><a href="${datum['url']}">	${datum["description"]}</a></p>



	</articles>

	

	`

	container.addEventListener("click",()=>{

	       

	})

	main.appendChild(container);

	}





});


},5000);
}



window.addEventListener("load",getNews);
window.beforeload=()=>{load.start()}

