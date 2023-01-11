const StringVid = sessionStorage.getItem("reproduccion")
    ? JSON.parse(sessionStorage.getItem("reproduccion"))
    : null;

const idVideo = StringVid ? parseInt(StringVid) : null;



const videos = sessionStorage.getItem("videos")
    ? JSON.parse(sessionStorage.getItem("videos"))
    : [];



const video = idVideo
    ? videos.find((video) => video.id === idVideo)
    : {};


const contenedor = document.querySelector(".caracteristicasVid");
const title = document.querySelector(".tituloVid");



contenedor.innerHTML = `
<section class="caracteristicasVid">
                
                <iframe width="725" height="400" src="${video.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                <article class="contInfoVid">
                <article class="contCanal">
                    <img src="/images/miniaturac.jpg" alt="miniaturac" class="miniaturac">
                </article>
                <article class="infoVid">
                    <h2 class="tituloVid">${video.title}</h2>
                    <H4 class="vistasVid">${video.views} Vistas - ${video.date}</H4>
                </article>
                </article>
            </section>
            
`;




const printVideos = (videos, contenedor) => {
    contenedor.innerHTML = '';
    videos.forEach(Video => {
        const article = document.createElement('article');
        article.classList.add('containerVideosSugeridos')
        article.innerHTML = `
        <figure>
            <img src="${Video.Min}" alt="${Video.id}">
        </figure>
        <h5 class="vidDur">13:55</h5>
        <article>
            <h2 class="titulo">${Video.title}</h2>
            <h3 class="canal">${Video.Artist}</h3>
            <H4 class="vistas">${Video.views} Vistas - ${Video.date}</H4>
        </article>
    </article>
        `;

        contenedor.appendChild(article)
    });
};

//capturar Contenedor de los videos sugeridos

const main = document.querySelector(".main");

const sugeridos = document.getElementById("sugeridos");

let videosSug =  sessionStorage.getItem("videos")
? JSON.parse(sessionStorage.getItem("videos"))
:[];

//Al cargar los videos, que el callback sea ejecutado

document.addEventListener("DOMContentLoaded", ()=>{
 
    if(!videos.length){
        sessionStorage.setItem("videos", JSON.stringify(vidYutu));
        videos = JSON.parse(sessionStorage.getItem("videos"))
    }

    printVideos(videos, sugeridos)

})

document.addEventListener('click', (event)=>{
    const { target } = event;

    if (target.classList.contains("miniatura")) {
        sessionStorage.setItem("reproduccion", JSON.stringify(target.id));
        window.location.href = "reproduccion.html";
    }

    
});




document.addEventListener('click', (event) => {

    const { target } = event;

    if (target.classList.contains("logo")) {

        window.location.href = "html/Main.html";
    }


});







































































