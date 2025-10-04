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





document.addEventListener("DOMContentLoaded", () => {
    const emojis = ["🎂","🍪","🧁","🍫"];
    const cantidad = 10; // menos cantidad, menos invasivo

    for (let i = 0; i < cantidad; i++) {
        const span = document.createElement("span");
        span.className = "emoji-fondo";
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        // posición inicial aleatoria
        span.style.top = Math.random() * window.innerHeight + "px";
        span.style.left = Math.random() * window.innerWidth + "px";

        document.body.appendChild(span);

        // movimiento
        let dx = (Math.random() - 0.5) * 0.5; // velocidad horizontal
        let dy = (Math.random() - 0.5) * 0.5; // velocidad vertical

        function mover() {
            let top = parseFloat(span.style.top);
            let left = parseFloat(span.style.left);

            top += dy;
            left += dx;

            // rebote
            if(top < 0 || top > window.innerHeight - 30) dy *= -1;
            if(left < 0 || left > window.innerWidth - 30) dx *= -1;

            span.style.top = top + "px";
            span.style.left = left + "px";

            requestAnimationFrame(mover);
        }

        mover();
    }
});
