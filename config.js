function cambiarValor(){
    let valor = document.getElementById("SeleccionClima").value;
    console.log(valor);
    cargarClima(valor);
}

cargarClima();
async function cargarClima(valor) {
    let codigoPostal;
        if (valor=="VillaMaria") {
            codigoPostal="http://api.weatherunlocked.com/api/current/ar.X5900?lang=es&app_id=61966416&app_key=b468dd1f1da4cbc17cbb2a0ecd56244b";
        } else if(valor=="Ushuaia") {
            codigoPostal="http://api.weatherunlocked.com/api/current/ar.V9410?lang=es&app_id=61966416&app_key=b468dd1f1da4cbc17cbb2a0ecd56244b";
        }
        else if(valor=="SantiagodelEstero"){
            codigoPostal="http://api.weatherunlocked.com/api/current/ar.G4200?lang=es&app_id=61966416&app_key=b468dd1f1da4cbc17cbb2a0ecd56244b";
        }
    
        await fetch(codigoPostal)
    .then((response) => response.json()) //Respuesta Cabecera
    .then((data) => {
//Respuesta Body

console.log(data);
console.log(data.temp_c, data.wx_desc);
datosClima(data);
//crear DOM
let contenedor = document.getElementById("data");
//contenedor.innerHTML = data.temp_c + "<br>" + data.wx_desc + "<img src='./img/" + data.wx_icon + "' alt=''>" + "<br>"+ data.lat + "<br>"+ data.lon + "<br>" + data.feelslike_c + "<br>"+data.windspd_kmh + "<br>"+data.humid_pct+"<br>"+obtenerDenominacionDireccion(data.winddir_compass);
temperatura.innerHTML = data.temp_c;
descripcion.innerHTML = data.wx_desc;
imagen.innerHTML = "<img src='./img/" + data.wx_icon + "' alt=''>" ;
latitud.innerHTML =  data.lat;
longitud.innerHTML = data.lon;
sensacion.innerHTML = data.feelslike_c;
velocidadviento.innerHTML = data.windspd_kmh;
humedad.innerHTML = data.humid_pct;
direccionviento.innerHTML = obtenerDenominacionDireccion(data.winddir_compass);

});
}

function datosClima(datos) {
console.log(datos);
}

function obtenerDenominacionDireccion(viento) {
    const puntosCardinales = {
      N: "Norte",
      S: "Sur",
      E: "Este",
      W: "Oeste"
    };
  
    const ordinales = {
      NE: "Noreste",
      NW: "Noroeste",
      SE: "Sureste",
      SW: "Suroeste"
    };

    const convinaciones = {
        NNE: "Norte-Noreste",
        NNO: "Norte-Noroeste",
        SSE: "Sur-Sureste",
        SSO: "Sur-Suroeste",
        ENE: "Este-Noreste",
        ESE: "Este-Sureste",
        ONO: "Oeste-Noroeste",
        OSO: "Oeste-Suroeste",
        WNW: "Oeste-Noroeste",
        NNW: "Norte-Noroeste",
        ENE: "Este-Noreste",
        ESE: "Este-Sureste",
        WSW: "Oeste-Suroeste",
        SSW: "Sur-Suroeste"
    };
    if (viento.length == 1 ) {
        return puntosCardinales[viento];
    } else if(viento.length == 2) {
        return ordinales[viento];
    }else if(viento.length == 3) {
        return convinaciones[viento];
    }
}