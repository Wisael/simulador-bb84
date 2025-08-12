let eveActiva = false;

function iniciarSimulacion() {
  const canal = document.getElementById("canal");
  canal.innerHTML = ""; // Limpiar canal

  const bit = Math.random() < 0.5 ? 0 : 1;
  const baseAlice = Math.random() < 0.5 ? "plus" : "cross";
  const baseBob = Math.random() < 0.5 ? "plus" : "cross";

  const foton = document.createElement("div");
  foton.classList.add("foton", baseAlice);
  foton.textContent = bit;

  canal.appendChild(foton);

  let bitTransmitido = bit;

  // Si Eve está activa
  if (eveActiva) {
    const baseEve = Math.random() < 0.5 ? "plus" : "cross";
    const medidaEve = baseEve === baseAlice ? bit : Math.random() < 0.5 ? 0 : 1;
    bitTransmitido = medidaEve;
    foton.textContent = medidaEve;
    foton.style.border = "2px dashed black"; // Marca de intervención
  }

  // Medición de Bob
  const medidaBob = baseBob === baseAlice ? parseInt(bitTransmitido) : Math.random() < 0.5 ? 0 : 1;

  // Mostrar resultado
  setTimeout(() => {
    alert(`Bit original: ${bit}
Base de Alice: ${baseAlice === "plus" ? "+" : "×"}
Base de Bob: ${baseBob === "plus" ? "+" : "×"}
${eveActiva ? "Eve intervino" : "Sin intervención"}
Medida de Bob: ${medidaBob}
${medidaBob === bit ? "✅ Medición correcta" : "❌ Error detectado"}`);
  }, 3000);

  // Animación
  foton.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(90vw)' }
  ], {
    duration: 3000,
    iterations: 1
  });
}