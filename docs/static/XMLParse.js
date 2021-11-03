
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
    
}

