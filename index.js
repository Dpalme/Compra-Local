function Inicio(){
    document.getElementById("Home").classList.add('active');
    document.getElementById("Search").classList.remove('active');
    document.getElementById("Me").classList.remove('active');

    var title = document.createElement("div").appendChild(document.createElement("h2"));
    title.innerText = "Carnicero Joel"
    document.getElementsByClassName("content").appendChild(title);
}

function Buscar(){
    document.getElementById("Home").classList.remove('active');
    document.getElementById("Search").classList.add('active');
    document.getElementById("Me").classList.remove('active');
}

function Yo(){
    document.getElementById("Home").classList.remove('active');
    document.getElementById("Search").classList.remove('active');
    document.getElementById("Me").classList.add('active');
}

function Carnicero(){
    document.getElementById("Carnicero").classList.remove('clicked');
    document.getElementById("Carnicero").classList.add('container');
    document.getElementById("Verduras").classList.remove('container');
    document.getElementById("Verduras").classList.add('clicked');
    document.getElementById("Mac").classList.remove('container');
    document.getElementById("Mac").classList.add('clicked');
}

function Verduras(){
    document.getElementById("Carnicero").classList.remove('container');
    document.getElementById("Carnicero").classList.add('clicked');
    document.getElementById("Verduras").classList.remove('clicked');
    document.getElementById("Verduras").classList.add('container');
    document.getElementById("Mac").classList.remove('container');
    document.getElementById("Mac").classList.add('clicked');
}

function Mac(){
    document.getElementById("Carnicero").classList.remove('container');
    document.getElementById("Carnicero").classList.add('clicked');
    document.getElementById("Verduras").classList.remove('container');
    document.getElementById("Verduras").classList.add('clicked');
    document.getElementById("Mac").classList.remove('clicked');
    document.getElementById("Mac").classList.add('container');
}