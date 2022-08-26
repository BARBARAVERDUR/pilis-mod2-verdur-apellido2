function onClick(event) {
  event.preventDefault();

  const mensaje = {
      nombre: document.getElementById('name').value,
      apellido: document.getElementById('apellido').value,
      dni: document.getElementById('dni').value,
      email: document.getElementById('email').value,
      telefono: document.getElementById('telefono').value
  }
  console.log(mensaje);


  fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
  })
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
          Swal.fire(
              'Enviado correctamente',
              'Gracias',
              'success',
          );
          cleanForm();
      })
      .catch((err) => console.log(err));

}

function cleanForm() {
  let formulario = document.getElementById('formulario');
  formulario.reset();
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick); 

// ------------------seccion clima----------------- 

async function obtenerClimaDia(){
    try{
        let respuesta = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-24.182673866114143&lon=-65.33121206931652&appid=7e0e756c0bb5247d4b74e950b8e8b8b2&units=metric&lang=es')
        let clima = await respuesta.json();
        let {main, name, weather} = clima;
        document.getElementById('clima-grados').textContent =  Math.round(main.temp) + '°C';
        document.getElementById('clima-img').src = 'http://openweathermap.org/img/wn/' + weather[0].icon +'@2x.png';
        document.getElementById('clima-feelslike').textContent = "Sensacion termiaca: " + Math.round(main.feels_like) + "°C";
        document.getElementById('clima-humedad').textContent = "Humedad: " + main.humidity + '%';
        document.getElementById('clima-name').textContent = name;
        document.getElementById('clima-desc').textContent = weather[0].description
        }catch{
            console.log("no se pudo obtener clima: ")
        }
}
obtenerClimaDia()

async function obtenerClima(){
    try{
    let respuesta = await fetch('http://api.openweathermap.org/data/2.5/forecast?lat=-24.182673866114143&lon=-65.33121206931652&appid=bf94524c67d2c84b740df27ed1f3674d&units=metric&lang=es')
    let climas = await respuesta.json();
    console.log(climas)

    let dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']
    document.getElementById('dia-1-nombre').textContent = dias[new Date(climas.list[0].dt_txt).getDay()]  ;
    document.getElementById('dia-1-img').src = 'http://openweathermap.org/img/wn/' + climas.list[0].weather[0].icon +'@2x.png';
    document.getElementById('dia-1-temp').textContent = Math.round(climas.list[0].main.temp) + '°C'
    document.getElementById('dia-1-descrip').textContent = climas.list[0].weather[0].description;

    document.getElementById('dia-2-nombre').textContent = dias[new Date(climas.list[5].dt_txt).getDay()]  ;
    document.getElementById('dia-2-img').src = 'http://openweathermap.org/img/wn/' + climas.list[5].weather[0].icon +'@2x.png';
    document.getElementById('dia-2-temp').textContent = Math.round(climas.list[5].main.temp) + '°C'
    document.getElementById('dia-2-descrip').textContent = climas.list[5].weather[0].description;

    document.getElementById('dia-3-nombre').textContent = dias[new Date(climas.list[14].dt_txt).getDay()]  ;
    document.getElementById('dia-3-img').src = 'http://openweathermap.org/img/wn/' + climas.list[14].weather[0].icon +'@2x.png';
    document.getElementById('dia-3-temp').textContent = Math.round(climas.list[14].main.temp) + '°C'
    document.getElementById('dia-3-descrip').textContent = climas.list[14].weather[0].description;

    document.getElementById('dia-4-nombre').textContent = dias[new Date(climas.list[17].dt_txt).getDay()]  ;
    document.getElementById('dia-4-img').src = 'http://openweathermap.org/img/wn/' + climas.list[15].weather[0].icon +'@2x.png';
    document.getElementById('dia-4-temp').textContent = Math.round(climas.list[15].main.temp) + '°C'
    document.getElementById('dia-4-descrip').textContent = climas.list[15].weather[0].description;

    document.getElementById('dia-5-nombre').textContent = dias[new Date(climas.list[29].dt_txt).getDay()]  ;
    document.getElementById('dia-5-img').src = 'http://openweathermap.org/img/wn/' + climas.list[32].weather[0].icon +'@2x.png';
    document.getElementById('dia-5-temp').textContent = Math.round(climas.list[29].main.temp) + '°C'
    document.getElementById('dia-5-descrip').textContent = climas.list[29].weather[0].description;

    }catch{
        console.log("no se pudo obtener clima")
    }
}
obtenerClima()