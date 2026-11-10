const seila = document.querySelector("#seila");
const responder = document.querySelector("#responder");


const sortearNumero = () => Math.floor(Math.random() * (3 - 1 + 1)) + 1;


responder.addEventListener("click", () => {
  const numero = sortearNumero();
  seila.textContent = numero === 1 ? "Sim" : numero === 2 ? "Não" : "Talvez";
  setTimeout(() => {
    seila.textContent = "";
  }, 2000);
});