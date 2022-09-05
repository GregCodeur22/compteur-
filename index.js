// ajouter 1 au compteur quaund increase

let display = document.querySelector(".result");
let compteur = 0;

function increaseCompteur() {
  let add = document.querySelector(".add");
  display.textContent = compteur;
  add.addEventListener("click", () => {
    compteur++;
    display.textContent = compteur;
    console.log(compteur);
  });
}
increaseCompteur();

function reset() {
  let reset = document.querySelector(".sup");
  reset.addEventListener("click", () => {
    compteur = 0;
    display.textContent = compteur;
  });
}
reset();

function decrease() {
  let minus = document.querySelector(".minus");
  minus.addEventListener("click", () => {
    compteur--;
    display.textContent = compteur;
  });
}
decrease();
