console.log("hello guys");
// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// // initializing the variable
source = "bbc-news";
apiKey = 'f648b05682814cf5941aa66a927251d3';

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = ""
        articles.forEach(function (element, index) {
            let news = `
            <div class="card">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                        <button class="btn btn-link btn-block collapsed text-left" type="button" data-toggle="collapse" 
                            data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                            <b>Breaking News ${index+1}:</b>  ${element.title}
                        </button>
                        </h2>
                    </div>
    
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                        <div class="card-body">${element.content} <a href="${element.url}" target="_blank">Read More</a>
                        </div>
                    </div>
            </div> `
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();








// console.log("This is my index js file");

// // Initialize the news api parameters
// let source = 'the-times-of-india';
// // let apiKey = 'd093053d72bc40248998159804e0e67d'

// // Grab the news container
// let newsAccordion = document.getElementById('newsAccordion');

// // Create an ajax get request
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d093053d72bc40248998159804e0e67d', true);

// // What to do when response is ready
// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         let articles = json.articles;
//         console.log(articles);
//         let newsHtml = "";
//         articles.forEach(function(element, index) {
//             // console.log(element, index)
//             let news = `<div class="card">
//                             <div class="card-header" id="heading${index}">
//                                 <h2 class="mb-0">
//                                 <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                                     aria-expanded="false" aria-controls="collapse${index}">
//                                    <b>Breaking News ${index+1}:</b> ${element["title"]}
//                                 </button>
//                                 </h2>
//                             </div>

//                             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//                                 <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
//                             </div>
//                         </div>`;
//             newsHtml += news;
//         });
//         newsAccordion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some error occured")
//     }
// }

// xhr.send()


