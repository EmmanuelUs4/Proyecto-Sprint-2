const StringVid = sessionStorage.getItem("reproduccioncopy")
    ? JSON.parse(sessionStorage.getItem("reproduccioncopy"))
    : null;

const idVideo = StringVid ? parseInt(StringVid) : null;

console.log(idVideo);
console.log(StringVid)

const videos = sessionStorage.getItem("videos")
    ? JSON.parse(sessionStorage.getItem("videos"))
    : [];
console.log(videos)


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

        <figure class="medsMiniaturas">
        <img src="${Video.Min}" alt="${Video.id}" class="miniatura" id=${Video.id}>
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
//Guardar el id de la imagen en un session storage para que la pag de reproduccion busque el id y repro
// duzca el video clicado
document.addEventListener('click', (event)=>{
    const { target } = event;

    if (target.classList.contains("miniatura")) {
        sessionStorage.setItem("reproduccion", JSON.stringify(target.id));
        window.location.href = "/html/reproduccion.html";
    }

    
});



//al hacer click en el logo, debbe enviar a la pagina principal
document.addEventListener('click', (event) => {

    const { target } = event;

    if (target.classList.contains("logo")) {

        window.location.href = "/index.html";
    }


});

