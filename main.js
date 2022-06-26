const Basic_Api = "https://moviesmern.herokuapp.com/movies/"
async function getDataFromServer(){
    try{
        return await fetch("https://moviesmern.herokuapp.com/movies/all")
        .then((response) => response.json())
    }
    catch(eror){"somthing went wrong"}
}
function printJsonToScreen(){
    getDataFromServer()
    .then(res => {res.data.forEach(field => {
        document.getElementById("movie_list").innerHTML += `<li> ${field.movieName} 
        <br> <img src=" ${field.image} "> 
        <br> <a href="${field.linkToMovie}"></a> </li><br>`})
        document.getElementById("movie_list").style = 'display: flex;align-content: space-around;flex-direction: column;align-items: center;text-align: center;'
    })
}
// const data = { movie: {
//     date: "2022-08-13T21:33:01.287Z",
//     image: "https://he.wikipedia.org/wiki/%D7%91%D7%9C%D7%A7-%D7%A4%D7%95%D7%9F",
//     linkToMovie: "https://www.imdb.com/title/tt7144666/",
//     movieName: "The Black Phone",
//     rating: 8.2,
//     synopsis: "After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killer's previous victims."
// }}

function creatUserObj(){
     return userAddition = { movie: {
        date: document.getElementById("movie_date").value,
        image: document.getElementById("movie_image").value,
        linkToMovie: document.getElementById("movie_link").value,
        movieName:  document.getElementById("movie_name").value,
        rating: document.getElementById("movie_rate").value ,
        synopsis: document.getElementById("movie_synopsis").value
    }}
}

async function addMovie(){
    try{
        await fetch(`${Basic_Api}`,
        {
            method:"POST" ,
            body:JSON.stringify(creatUserObj()),
            headers: {'Content-Type':'application/json'}
        })
    }
    catch(error){
        console.log(error);
    }
}

async function searchMovieByName(){
    try{
        return await fetch(`${Basic_Api}movie/searchByName/${document.getElementById("search_input").value}`)
        .then(res => res.json())
    }
    catch(err){}
    finally{}
}

function showMovieByName() {
    document.getElementById("print_search").innerHTML = '';
    document.getElementById("search_click").disabled = true;
    searchMovieByName()
    .then(res => res.data.forEach(movieItem =>
        document.getElementById("print_search").innerHTML += `<span> ${movieItem.movieName}</span>`))
}
