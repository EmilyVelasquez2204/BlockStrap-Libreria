document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll("a[data-page]");
    const contenedor = document.getElementById("contenido");
  
    enlaces.forEach(enlace => {
      enlace.addEventListener("click", (e) => {
        e.preventDefault();
        const ruta = enlace.getAttribute("data-page");
  
        fetch(ruta)
          .then(res => {
            if (!res.ok) throw new Error("No se pudo cargar el archivo");
            return res.text();
          })
          .then(data => {
            contenedor.innerHTML = data;
          })
          .catch(err => {
            contenedor.innerHTML = `<p>Error al cargar la página: ${ruta}</p>`;
            console.error(err);
          });
      });
    });
  });
  
