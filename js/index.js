var inverted = false;


function Invert(){
    if(inverted){
        document.documentElement.style.setProperty('--bg', "#fff");
        document.documentElement.style.setProperty('--font', "#000");
        inverted = false;
    }
    else{
        document.documentElement.style.setProperty('--bg', "#000");
        document.documentElement.style.setProperty('--font', "#fff");
        inverted = true;
    }
}


function Profile(name, bioText, pictureURL){
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("Home").classList.remove('active');
    document.getElementById("Search").classList.remove('active');
    document.getElementById("Me").classList.add('active');

    var picture = document.createElement("img");
    picture.classList.add("profilePicture");
    picture.setAttribute("src", pictureURL)
    document.getElementById("content").appendChild(picture);

    var info = document.createElement("span");
    title = document.createElement("h2");
    title.innerText = name;
    info.appendChild(title);
    var bio = document.createElement("h3");
    bio.innerText = bioText;
    info.appendChild(bio);
    info.classList.remove("container");
    info.classList.add("profileInfo");
    document.getElementById("content").appendChild(info);

    var mainDiv = document.createElement("div");
    mainDiv.appendChild(button("Seguir", true, ""));
    mainDiv.appendChild(button("Mensaje", false, 'Mensaje("' + name + '", "' + pictureURL + '")'));
    mainDiv.classList.add("profileButtons");
    return mainDiv;
}


function Container(title, text, imgUrl){
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", title);
    var profilePicture = document.createElement("img")
    profilePicture.setAttribute("src", imgUrl);
    var titleHTML = document.createElement("h2");
    titleHTML.innerText = title;

    var topDiv = document.createElement("span");
    topDiv.appendChild(profilePicture);
    topDiv.appendChild(titleHTML);
    topDiv.setAttribute("onclick", 'Perfil("' + title + '", "' + text + '", "' + imgUrl + '")');
    mainDiv.appendChild(topDiv);

    var textHTML = document.createElement("h3");
    textHTML.innerText = text;
    mainDiv.appendChild(textHTML);
    mainDiv.classList.add('container');
    return mainDiv;
}


function imageContainer(title, text, url, ppUrl){
    var mainDiv = document.createElement("div");

    var profilePicture = document.createElement("img")
    profilePicture.setAttribute("src", ppUrl);
    var titleHTML = document.createElement("h2");
    titleHTML.innerText = title;

    var topDiv = document.createElement("span");
    topDiv.appendChild(profilePicture);
    topDiv.appendChild(titleHTML);
    topDiv.setAttribute("onclick", 'Perfil("' + title + '", "' + text + '", "' + ppUrl + '")');
    mainDiv.appendChild(topDiv);

    var textHTML = document.createElement("h3");
    textHTML.innerText = text;
    mainDiv.appendChild(textHTML);
    var imgHTML = document.createElement("img");
    imgHTML.setAttribute("src", url)
    mainDiv.appendChild(imgHTML);
    mainDiv.classList.add('container');
    return mainDiv;
    
}


function Mensaje(name, ppURL){
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("Home").classList.remove('active');
    document.getElementById("Search").classList.remove('active');
    document.getElementById("Me").classList.remove('active');

    var profilePicture = document.createElement("img")
    profilePicture.setAttribute("src", ppURL);
    var titleHTML = document.createElement("h2");
    titleHTML.innerText = name;

    var topDiv = document.createElement("span");
    topDiv.appendChild(profilePicture);
    topDiv.appendChild(titleHTML);
    topDiv.setAttribute("onclick", 'Perfil("' + name + '", "' + '", "' + ppURL + '")');
    topDiv.classList.add('message')
    document.getElementById("content").appendChild(topDiv);

    var botDiv = document.createElement("div");
    var messageInput = document.createElement("input");
    messageInput.setAttribute("type", "text")
    messageInput.placeholder = "Mensaje";

    botDiv.appendChild(messageInput);
    botDiv.appendChild(button(">", true, ""));
    botDiv.classList.add("bottomMessage");

    document.getElementById("content").appendChild(botDiv);
}


function button(text, highlight, link){
    var butt = document.createElement("a");
    if(highlight){ butt.classList.add('highlight'); }
    butt.innerText = text;
    butt.setAttribute("onclick", link);
    return butt;
}


function Inicio(){
    
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("Home").classList.add('active');
    document.getElementById("Search").classList.remove('active');
    document.getElementById("Me").classList.remove('active');
    
    var title = document.createElement("h1");
    title.innerText = "Inicio";
    document.getElementById("content").appendChild(title);
    document.getElementById("content").appendChild(Container("Carnicero", "Hola, soy su carnicero Joel, esta semana igual va a querer arrachera?", "https://st2.depositphotos.com/4403291/7142/v/950/depositphotos_71424065-stock-illustration-meat-logo-design.jpg"));
    document.getElementById("content").appendChild(imageContainer("Verduras", "Hola, sólo para avisar que el cilantro de hoy está especialmente fresco", "https://pbs.twimg.com/media/EJrBYgZU8AE6-lH?format=jpg", "https://dynamic.brandcrowd.com/asset/logo/ab6f2127-10f8-49dd-a8ab-f91915a9bc4f/logo?v=4"));
    document.getElementById("content").appendChild(Container("Zapatero", "Hola, ya quedaron los zapatos para vestir que me trajo el otro día", "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Vans-Old-Skool-Logo-Mix-Black-%26-White-Shoes-_298128.jpg"));
}


function Buscar(){
    
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
    Perfil("Luis Enrique", "el pollo de pollo", "https://pbs.twimg.com/profile_images/1179587726380691456/QymL-7J6_400x400.jpg");
}


function Perfil(nombre, bio, url){
    
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("Home").classList.remove('active');
    document.getElementById("Search").classList.remove('active');
    document.getElementById("Me").classList.remove('active');
    
    document.getElementById("content").appendChild(button("<", true, "Inicio()"));
    document.getElementById("content").appendChild(Profile(nombre, bio, url));
}


function Vegetales(){

}