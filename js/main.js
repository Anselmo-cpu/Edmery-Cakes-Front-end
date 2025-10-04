// ===== Buscador de productos =====
document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("buscador");
    const productos = document.querySelectorAll(".producto-card");

    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();

        productos.forEach(producto => {
            const nombre = producto.querySelector("h3").textContent.toLowerCase();
            const descripcion = producto.querySelector("p").textContent.toLowerCase();

            // Mostrar producto si coincide con nombre o descripción
            if (nombre.includes(texto) || descripcion.includes(texto)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    });
});
