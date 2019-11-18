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
    document.getElementById("content").appendChild(Container("Verduras", "Hola, sólo para avisar que el perejil de hoy está especialmente fresco"));
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

    var mainDiv = document.createElement("div");

    var follow = document.createElement("a");
    follow.classList.add('highlight');
    follow.innerText = "Seguir";

    var mensaje = document.createElement("a");
    mensaje.innerText = "Mensaje";

    mainDiv.appendChild(follow);
    mainDiv.appendChild(mensaje);
    mainDiv.classList.add("profileButtons");
    document.getElementById("content").appendChild(mainDiv);
}