
parseDataToPage = (veelvlakName) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/static/veelvlakken_info/"+veelvlakName+".xml", false);
    xhttp.send();
    var xmlDoc = xhttp.responseXML;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
    console.log(xhttp.responseText);

    document.getElementById("over-text").innerHTML = xmlDoc.getElementsByTagName("OVER")[0].childNodes[0].nodeValue;
    document.getElementById("persoon-text").innerHTML = xmlDoc.getElementsByTagName("PERSOON")[0].childNodes[0].nodeValue;
    document.getElementById("info-text").innerHTML = xmlDoc.getElementsByTagName("INFO_OVER_FIGUUR")[0].childNodes[0].nodeValue;
    document.getElementById("site-title").innerHTML = xmlDoc.getElementsByTagName("NAAM")[0].childNodes[0].nodeValue;
    try {
        var greekName = xmlDoc.getElementsByTagName("GRIEKSE_NAAM")[0].childNodes[0].nodeValue;
        if(greekName) {
            document.getElementById("site-subtitle").style.display = "inline-block";
            document.getElementById("site-subtitle").innerHTML = greekName;
            
        }
    } catch (e) {

    }

    var vvname = xmlDoc.getElementsByTagName("vvname")[0].childNodes[0].nodeValue
    document.getElementById("title-img").setAttribute("src", "/static/veelvlakken_res/"+vvname+".png");
    document.getElementById("print-uitslag-link").setAttribute("href", "/static/veelvlakken_res/"+vvname+".pdf");

}
parseName = (veelvlakName) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/static/veelvlakken_info/"+veelvlakName+".xml", false);
    xhttp.send();
    var xmlDoc = xhttp.responseXML;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
    console.log(xhttp.responseText);

    console.log(xmlDoc.getElementsByTagName("NAAM"));
    return xmlDoc.getElementsByTagName("NAAM")[0].childNodes[0].nodeValue;
}
parseIndices = (veelvlakName) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/static/veelvlakken_info/"+veelvlakName+".xml", false);
    xhttp.send();
    var xmlDoc = xhttp.responseXML;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
    console.log(xhttp.responseText);

    nodes = xmlDoc.getElementsByTagName("NAAM");
    for(i = 0; i < nodes.length; i++) {
        val = nodes[i].childNodes[0].nodeValue;
        li = document.createElement("LI");
        a = document.createElement("A");
        a.setAttribute("href", "/veelvlak.html?vvname="+val);
        img = document.createElement("IMG");
        img.setAttribute("src", "/static/veelvlakken_res/"+val+".png");
        p = document.createElement("P");
        p.innerHTML=parseName(val);
        a.appendChild(img);
        a.appendChild(p);
        li.appendChild(a);
        document.getElementById("veelvlak-nav").appendChild(li);
    }
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

