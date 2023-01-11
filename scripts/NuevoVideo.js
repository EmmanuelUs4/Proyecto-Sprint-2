const formulario = document.querySelector('.formulario');


let videos = sessionStorage.getItem("videos")
    ? JSON.parse(sessionStorage.getItem("videos"))
    : [];


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const valuesFormulario = Object.values(formulario);

    const newVid = {};
    // crear el id del nuevo video para poder reproducirlo
    newVid.id = videos.length + 1;
    console.log(newVid.id)
    valuesFormulario.forEach((valueInput) => {
        if (valueInput.id) {
            newVid[valueInput.id] = valueInput.value;
        }
    });



    //Validar las propuedades del nuevo video, si no tienen valor entonces que no permita avanzar
    for (const key in newVid) {
        const propiedadVideo = newVid[key];
        if (!propiedadVideo) {
            alert(`Digite un valor en ${key} antes de continuar`);
            return;
        }
    }
    //Añadir el nuevo video al yutú
    videos.push(newVid);



    //Actualizar videos del yutú
    sessionStorage.setItem("videos", JSON.stringify(videos));
    videos = JSON.parse(sessionStorage.getItem('videos'));

    //Quitar la info de los inputs al enviar
    valuesFormulario.forEach(input => {
        if (input.id) {
            input.value = "";
        }

    })
});

