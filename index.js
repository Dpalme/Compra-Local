function Container(title, text, onclick){
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("onclick", onclick);
    mainDiv.setAttribute("id", title);
    mainDiv.classList.add('clicked')
    var titleHTML = document.createElement("h2");
    titleHTML.innerText = title;
    mainDiv.appendChild(titleHTML);
    var textHTML = document.createElement("h3");
    textHTML.innerText = text;
    mainDiv.appendChild(textHTML);
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
    
    document.getElementById("content").appendChild(Container("Carnicero", "Hola, soy su carnicero Joel, esta semana igual va a querer arrachera?", "Carnicero()"));
    document.getElementById("content").appendChild(Container("Verduras", "Hola, sólo para avisar que el perejil de hoy está especialmente fresco", "Verduras()"));
    document.getElementById("content").appendChild(Container("Zapatero", "Hola, ya quedaron los zapatos para vestir que me trajo el otro día", "Zapatero()"));
    
    document.getElementById("content").firstChild.classList.remove('clicked');
    document.getElementById("content").firstChild.classList.add('container');
}

function Buscar(){
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("Home").classList.remove('active');
    document.getElementById("Search").classList.add('active');
    document.getElementById("Me").classList.remove('active');

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
}

function Carnicero(){
    document.getElementById("Carnicero").classList.remove('clicked');
    document.getElementById("Carnicero").classList.add('container');
    document.getElementById("Verduras").classList.remove('container');
    document.getElementById("Verduras").classList.add('clicked');
    document.getElementById("Zapatero").classList.add('clicked');
    document.getElementById("Zapatero").classList.remove('container');
}

function Verduras(){
    document.getElementById("Carnicero").classList.remove('container');
    document.getElementById("Carnicero").classList.add('clicked');
    document.getElementById("Verduras").classList.remove('clicked');
    document.getElementById("Verduras").classList.add('container');
    document.getElementById("Zapatero").classList.add('clicked');
    document.getElementById("Zapatero").classList.remove('container');
}

function Zapatero(){
    document.getElementById("Carnicero").classList.remove('container');
    document.getElementById("Carnicero").classList.add('clicked');
    document.getElementById("Verduras").classList.remove('container');
    document.getElementById("Verduras").classList.add('clicked');
    document.getElementById("Zapatero").classList.remove('clicked');
    document.getElementById("Zapatero").classList.add('container');
}