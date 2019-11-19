function Container(title, text){
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", title);
    var titleHTML = document.createElement("h2");
    titleHTML.innerText = title;
    mainDiv.appendChild(titleHTML);
    var textHTML = document.createElement("h3");
    textHTML.innerText = text;
    mainDiv.appendChild(textHTML);
    mainDiv.classList.add('container');
    return mainDiv;
}

function imageContainer(title, text, url){
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", title);
    var titleHTML = document.createElement("h2");
    titleHTML.innerText = title;
    mainDiv.appendChild(titleHTML);
    var imgHTML = document.createElement("img");
    imgHTML.setAttribute("src", url)
    mainDiv.appendChild(imgHTML);
    var textHTML = document.createElement("h3");
    textHTML.innerText = text;
    mainDiv.appendChild(textHTML);
    mainDiv.classList.add('container');
    return mainDiv;
    
}


function button(text, highlight, link){
    var butt = document.createElement("a");
    if(highlight){ butt.classList.add('highlight'); }
    butt.innerText = text;
    butt.setAttribute("href", link);
    return butt;
}


function Inicio(){
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("Home").classList.add('active');
    document.getElementById("Search").classList.remove('active');
    document.getElementById("Me").classList.remove('active');
    
    var title = document.createElement("h1");
    title.innerText = "Inicio";
    document.getElementById("content").appendChild(title);
    document.getElementById("content").appendChild(Container("Carnicero", "Hola, soy su carnicero Joel, esta semana igual va a querer arrachera?"));
    document.getElementById("content").appendChild(imageContainer("Verduras", "Hola, sólo para avisar que el cilantro de hoy está especialmente fresco", "https://pbs.twimg.com/media/EJrBYgZU8AE6-lH?format=jpg"));
    document.getElementById("content").appendChild(Container("Zapatero", "Hola, ya quedaron los zapatos para vestir que me trajo el otro día"));
}

function Buscar(){
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("Home").classList.remove('active');
    document.getElementById("Search").classList.add('active');
    document.getElementById("Me").classList.remove('active');
    
    var title = document.createElement("h1");
    title.innerText = "Buscar";
    document.getElementById("content").appendChild(title);

    var mainDiv = document.createElement("div");
    var searchBar = document.createElement("input");
    searchBar.setAttribute("type", "text")
    searchBar.placeholder = "Buscar";
    mainDiv.appendChild(searchBar);
    mainDiv.classList.add("searchBar");
    document.getElementById("content").appendChild(mainDiv);
}

function Yo(){
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("Home").classList.remove('active');
    document.getElementById("Search").classList.remove('active');
    document.getElementById("Me").classList.add('active');

    var title = document.createElement("h1");
    title.innerText = "Yo";
    document.getElementById("content").appendChild(title);

    var picture = document.createElement("img");
    picture.classList.add("profilePicture");
    picture.setAttribute("src", "https://pbs.twimg.com/profile_images/1179587726380691456/QymL-7J6_400x400.jpg")
    document.getElementById("content").appendChild(picture);

    var info = Container("Luis Enrique", "el pollo del arroz con pollo");
    info.classList.remove("container");
    info.classList.add("profileInfo");
    document.getElementById("content").appendChild(info);

    var mainDiv = document.createElement("div");
    mainDiv.appendChild(button("Seguir", true, "#"));
    mainDiv.appendChild(button("Mensaje", false, "#"));
    mainDiv.classList.add("profileButtons");
    document.getElementById("content").appendChild(mainDiv);
}

Inicio();