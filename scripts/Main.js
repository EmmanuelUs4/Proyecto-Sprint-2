//Declaro los videos que quiero que se vean en la pagina
const vidYutu = [
    //especifico el titulo del video, género(para el filtro), Artista, miniatura, vistas y posición(por si acaso)
    {
        id: 1,
        title: "pov: your sukeban gang is taking over roppongi from the haitani brothers",
        genre: "Musica",
        Artist: "Grim Salvo",
        Min: "/images/1.jpg",
        views: "23.423",
        link: "https://www.youtube.com/embed/toaCi9_d9Bc",
        date: "10 ene. 2022"
    },
    {
        id: 2,
        title: "Grim Salvo - BLACK RAINBOW (OFFICIAL AUDIO)",
        genre: "Musica",
        Artist: "Grim Salvo",
        Min: "/images/2.jpg",
        views: "23.756.423",
        link: "https://www.youtube.com/embed/3Qpo7vViAXM",
        date: "10 ene. 2022"
    },
    {
        title: "Grim Salvo - BOYSENBERRY SEPSIS (feat. Saliva Grey & 99zed) {prod. HELLMEBABY}",
        genre: "Musica",
        Artist: "Grim Salvo",
        Min: "/images/3.jpg",
        views: "235.423",
        id: 3,
        link: "https://www.youtube.com/embed/eY68I_gvG1k",
        date: "10 ene. 2022"
    },
    {
        title: "Люби меня",
        genre: "Musica",
        Artist: "Hajime&Miyagi",
        Min: "/images/4.jpg",
        views: "123.432",
        id: 4,
        link: "https://www.youtube.com/embed/wfHaH1Xvws8",
        date: "10 ene. 2022"
    },
    {
        title: "Grim Salvo - 1•300•LIQUIDATE (OFFICIAL AUDIO)",
        genre: "Musica",
        Artist: "Grim Salvo",
        Min: "/images/5.jpg",
        views: "12.803",
        id: 5,
        link: "https://www.youtube.com/embed/NXkY1gLTbk8",
        date: "10 ene. 2022"
    }, {
        title: "Grim Salvo - Walt Disney Wormdog (OFFICIAL AUDIO)",
        genre: "Musica",
        Artist: "Grim Salvo",
        Min: "/images/6.jpg",
        views: "12.455",
        id: 6,
        link: "https://www.youtube.com/embed/It8hhWDjP0E",
        date: "10 ene. 2022"
    }, {
        title: "Grim Salvo - HEART OF DARKNESS (OFFICIAL AUDIO)",
        genre: "Musica",
        Artist: "Grim Salvo",
        Min: "/images/7.jpg",
        views: "976.453",
        id: 7,
        link: "https://www.youtube.com/embed/vDjaxGXrb5k",
        date: "10 ene. 2022"
    }, {
        title: "Mind Games",
        genre: "Musica",
        Artist: "S!ckick",
        Min: "/images/8.jpg",
        views: "900 M",
        id: 8,
        link: "https://www.youtube.com/embed/QjQliDFIsnk",
        date: "10 ene. 2022"
    }, {
        title: "ONI INC. x David Grants - Demon Country | Prod. David Grants",
        genre: "Musica",
        Artist: "ONI INC.",
        Min: "/images/9.jpg",
        views: "465 M",
        id: 9,
        link: "https://www.youtube.com/embed/QMbwmD0fnk4",
        date: "2 ene. 2022"
    }, {
        title: "Cam Steady - CHAOS CONTROL! (ft. Kamiyada+)",
        genre: "Musica",
        Artist: "Cam Steady",
        Min: "/images/10.jpg",
        views: "54.645",
        id: 10,
        link: "https://www.youtube.com/embed/y3N_wjhj0PQ",
        date: "2 ene. 2022"
    }, {
        title: "JUDAH! ",
        genre: "Musica",
        Artist: "Nutella Topic",
        Min: "/images/11.jpg",
        views: "2 ene. 2022",
        id: 11,
        link:"/images/11.jpg",
        date: "1 ene. 2022"
    }, {
        title: "Rudeboy",
        genre: "Musica",
        Artist: "Epok",
        Min: "/images/12.jpg",
        views: "123.534",
        id: 12,
        date: "1 ene. 2022",
        link:"/images/12.jpg",
    },
    {
        title: "Grim Salvo - Contact Your Local Liquidator (OFFICIAL AUDIO)",
        genre: "Musica",
        Artist: "Grim Salvo",
        Min: "/images/13.jpg",
        views: "4.356.345",
        id: 13,
        date: "1 ene. 2022",
        link:"/images/13.jpg",
    },
    {
        title: "Patricio en un caballito - 10 horas | Patrick riding a seahorse - 10 hours",
        genre: "Entretenimiento",
        Artist: "M de Mario",
        Min: "/images/14.jpg",
        views: "59.282",
        id: 14,
        date: "1 ene. 2022",
        link:"/images/14.jpg",
    },
    {
        title: "¡AGÓNICA VICTORIA DE LA VECCHIA SIGNORA PARA SEGUIR EN LA PELEA! | Cremonese 0-1 Juventus | RESUMEN",
        genre: "Deporte",
        Artist: "ESPN Fans",
        Min: "/images/15.jpg",
        views: "54.342",
        id: 15,
        date: "11 dic. 2022",
        link:"/images/15.jpg",
    },
    {
        title: "Viaje al principio de los tiempos",
        genre: "Documental",
        Artist: "Kosmo ES",
        Min: "/images/16.jpg",
        views: "544.152",
        id: 16,
        date: "11 dic. 2022",
        link:"/images/16.jpg",
    },
    {
        title: "¡EL NEROAZZURRO SE QUEDÓ CON EL INVICTO DEL LÍDER DE LA SERIE A! | Inter 1-0 Napoli | RESUMEN",
        genre: "Deporte",
        Artist: "ESPN Fans",
        Min: "/images/17.jpg",
        views: "532.463",
        id: 17,
        date: "11 dic. 2022",
        link:"/images/17.jpg",
    },
    {
        title: "Dinosaur Size Comparison 3D - Smallest to Biggest",
        genre: "Documental",
        Artist: "AmazingViz",
        Min: "/images/18.jpg",
        views: "5 M",
        id: 18,
        date: "29 dic. 2022",
        link:"/images/18.jpg",
    },
    {
        title: "ZEUS | Destripando la Historia | Canción",
        genre: "Entretenimiento",
        Artist: "Pascu y Rodri",
        Min: "/images/19.jpg",
        views: "5.1 M",
        id: 19,
        date: "29 dic. 2022",
        link:"/images/19.jpg",
    },
    {
        title: "ARK: Survival Evolved Final Trailer",
        genre: "Gaming",
        Artist: "proteamdirector",
        Min: "/images/20.jpg",
        views: "1.2 M",
        id: 20,
        date: "15 ago. 2022",
        link:"/images/20.jpg",
    },
    {
        title: "BARBIE | Teaser",
        genre: "Entretenimiento",
        Artist: "Warner Bros. Pictures Latinoamérica",
        Min: "/images/21.jpg",
        views: "23 M",
        id: 21,
        date: "15 ago. 2022",
        link:"/images/21.jpg",
    },
    {
        title: "ARK 2™ - Unreal Engine 5",
        genre: "Gaming",
        Artist: "Blakwoodz",
        Min: "/images/22.jpg",
        views: "21.543",
        id: 22,
        date: "15 ago. 2022",
        link:"/images/22.jpg",
    },
    {
        title: "EL ICEBERG DE BEN 10 | DE MENOS A MAS RARO!",
        genre: "Entretenimiento",
        Artist: "MoiTwice",
        Min: "/images/23.jpg",
        views: "54.221",
        id: 23,
        date: "15 ago. 2022",
        link:"/images/23.jpg",
    },
    {
        title: "Después de 18 AÑOS Completaron al Desafió Más Difícil de la Historia de los Videojuegos",
        genre: "Gaming",
        Artist: "Pedrogas",
        Min: "/images/24.jpg",
        views: "12.435",
        id: 24,
        date: "11 dic. 2022",
        link:"/images/24.jpg",
    },
    {
        title: "El Francotirador Más Temido en la Historia del FBI",
        genre: "Entretenimiento",
        Artist: "Fusgo",
        Min: "/images/25.jpg",
        views: "12.664",
        id: 25,
        date: "11 dic. 2022",
        link:"/images/25.jpg",
    },
    {
        title: "SECRETOS DE ESTADO: Dentro del Área 51 l EPISODIO COMPLETO",
        genre: "Documental",
        Artist: "History Latinoamerica",
        Min: "/images/26.jpg",
        views: "754.567",
        id: 26,
        date: "30 dic. 2022",
        link:"/images/26.jpg",
    },
    {
        title: "El hielo que se derrite en el Ártico (1/2) | DW Documental",
        genre: "Documental",
        Artist: "DW Documental",
        Min: "/images/27.jpg",
        views: "765.54",
        id: 27,
        date: "30 dic. 2022",
        link:"/images/27.jpg",
    },
    {
        title: "¿Y si vivieras en Kepler 22 b?",
        genre: "Entretenimiento",
        Artist: "Ridddle ES",
        Min: "/images/28.jpg",
        views: "467.434",
        id: 28,
        date: "30 dic. 2022",
        link:"/images/28.jpg",
    },
    {
        title: "¿Cómo es Marte, el planeta rojo?",
        genre: "Documental",
        Artist: "Odyssey Web",
        Min: "/images/29.jpg",
        views: "636.577",
        id: 29,
        date: "29 dic. 2022",
        link:"/images/29.jpg",
    },
    {
        title: "TOP las 7 cosas más perturbadoras del Universo",
        genre: "Entretenimiento",
        Artist: "DrossRotzank",
        Min: "/images/30.jpg",
        views: "567.532",
        id: 30,
        date: "29 dic. 2022",
        link:"/images/30.jpg",
    },
    {
        title: "¿Quién es la misteriosa persona que amenazó a Kanye West?",
        genre: "Entretenimiento",
        Artist: "DrossRotzank",
        Min: "https://img.youtube.com/vi/BGK21No13A0/maxresdefault.jpg",
        views: "34.566",
        id: 31,
        date: "29 dic. 2022",
        link:"https://img.youtube.com/vi/BGK21No13A0/maxresdefault.jpg",
    },

];
//Mostrar los videos ahora creando sus contenedores y consultando sus respectivos datos
const printVideos = (listVids, contenedor) => {
    contenedor.innerHTML = '';
    listVids.forEach(Video => {
        const article = document.createElement('article');
        article.classList.add('mainVid')
        article.innerHTML = `
        <figure class="medsMiniaturas">
                    <img src=${Video.Min} alt=${Video.Num} class="miniatura" id=${Video.id}>
                </figure>
                
                
                <h5 class="vidDur">13:55</h5>
                
                <article class="contMin">
                    <figure class="MiniaturaCanal">
                        <img src="/images/miniaturac.jpg" alt="miniaturac" class="miniaturac">
                    </figure>
                    <article class="contInfo">
                    <h2 class="titulo">${Video.title}</h2>
                    <h3 class="canal">${Video.Artist}</h3>
                    <H4 class="vistas">${Video.views} vistas - ${Video.date}</H4>
        `;

        contenedor.appendChild(article)
    });
};

//Llamo la función, obteniéndolos

const main = document.querySelector('.main');

const contenedorVids = document.getElementById("contenedorVids");

printVideos(vidYutu, contenedorVids);

//Actualizando
let videos = sessionStorage.getItem("videos") 
? JSON.parse(sessionStorage.getItem("videos")) 
: [];

document.addEventListener('DOMContentLoaded', () => {


    if (!videos.length) {
        sessionStorage.setItem('videos', JSON.stringify(vidYutu));
        videos = JSON.parse(sessionStorage.getItem("videos"));

    }
    printVideos(videos, contenedorVids);
});

//Parte de filtrado
//Filtrado por categoría

const bTodo = document.getElementById("Todo");
const bMusica = document.getElementById("Musica");
const bEntretenimiento = document.getElementById("Entretenimiento");
const bDocumental = document.getElementById("Documental");
const bGaming = document.getElementById("Gaming");
const bDeporte = document.getElementById("Deporte");


//Filtrado

const bFiltrado = [bTodo, bMusica, bEntretenimiento, bDocumental, bGaming, bDeporte];

bFiltrado.forEach(button => {
    button.addEventListener("click", (event) => {


        let vidsFiltrados = [];

        if (button.id === "Todo") {
            vidsFiltrados = vidYutu;
        }
        else {
            vidsFiltrados = vidYutu.filter(
                (Video) => Video.genre === button.id);
        };


        printVideos(vidsFiltrados, contenedorVids);
    });
});

// redirección a la página de reproducción y características del video.

document.addEventListener('click', (event)=>{

    const { target } = event;

    if (target.classList.contains("miniatura")) {

        sessionStorage.setItem("reproduccion", JSON.stringify(target.id));
        window.location.href = "/html/reproduccion.html";
    }

    
});
