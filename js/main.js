// ===== JS para catálogo seguro =====
document.addEventListener("DOMContentLoaded", () => {

    // --- Buscador de productos ---
    const buscador = document.getElementById("buscador");
    const productos = document.querySelectorAll(".producto-card");

    if (buscador) { // Aseguramos que el input exista
        buscador.addEventListener("input", () => {
            const texto = buscador.value.toLowerCase();

            productos.forEach(producto => {
                const nombre = producto.querySelector("h3").textContent.toLowerCase();
                const descripcion = producto.querySelector("p").textContent.toLowerCase();

                if (nombre.includes(texto) || descripcion.includes(texto)) {
                    producto.style.display = "block";
                } else {
                    producto.style.display = "none";
                }
            });
        });
    }

    // --- Emojis decorativos ---
    const emojis = ["🎂","🍪","🧁","🍫"];
    const cantidad = 8; // Menos cantidad, más sutil

    for (let i = 0; i < cantidad; i++) {
        const span = document.createElement("span");
        span.className = "emoji-fondo";
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        span.style.position = "fixed";
        span.style.zIndex = "0";
        span.style.top = Math.random() * window.innerHeight + "px";
        span.style.left = Math.random() * window.innerWidth + "px";
        span.style.fontSize = "24px";
        span.style.pointerEvents = "none"; // Para que no interfiera con clicks

        document.body.appendChild(span);

        let dx = (Math.random() - 0.5) * 0.3;
        let dy = (Math.random() - 0.5) * 0.3;

        function mover() {
            let top = parseFloat(span.style.top);
            let left = parseFloat(span.style.left);

            top += dy;
            left += dx;

            if(top < 0 || top > window.innerHeight - 30) dy *= -1;
            if(left < 0 || left > window.innerWidth - 30) dx *= -1;

            span.style.top = top + "px";
            span.style.left = left + "px";

            requestAnimationFrame(mover);
        }

        mover();
    }

});
