const odpocet = document.getElementById('odpocet');
const tlacitko = document.getElementById('prekvapeni');
const zprava = document.getElementById('zprava');
let casovacZpravy;

function aktualizovatOdpocet() {
  const ted = new Date();
  let rok = ted.getFullYear();
  let vanoce = new Date(rok, 11, 24, 0, 0, 0);
  if (ted >= vanoce) vanoce = new Date(rok + 1, 11, 24, 0, 0, 0);

  const rozdil = vanoce - ted;
  const dny = Math.floor(rozdil / 86400000);
  const hodiny = Math.floor((rozdil / 3600000) % 24);
  const minuty = Math.floor((rozdil / 60000) % 60);
  const sekundy = Math.floor((rozdil / 1000) % 60);
  odpocet.textContent = `${dny} dní, ${hodiny} hodin, ${minuty} minut, ${sekundy} sekund`;
}

aktualizovatOdpocet();
setInterval(aktualizovatOdpocet, 1000);

tlacitko.addEventListener('click', () => {
  zprava.textContent = 'George is awaiting you!';
  clearTimeout(casovacZpravy);
  casovacZpravy = setTimeout(() => { zprava.textContent = ''; }, 5000);
});
