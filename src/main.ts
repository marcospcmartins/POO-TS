import prompt from 'prompt-sync';
import Personagem from './Personagem';

let person: Personagem = new Personagem('Sansa Stark', 100, 40, 20, 20);

let teclado = prompt();
let option: number = 0;

while (option !== 9) {
  console.log('+==============Personagem==============+');
  console.log('|1. Treinar ataque                     |');
  console.log('|2. Treinar defesa                     |');
  console.log('|3. Descansar                          |');
  console.log('|4. Entrar em batalha                  |');
  console.log('|8. Imprimir atributos                 |');
  console.log('|9. sair                               |');
  console.log('+======================================+\n');

  option = Number(teclado(`Escolha uma ação ==>   `));

  switch (option) {
    case 1:
      person.treinarAtaque();
      break;
    case 2:
      person.treinarDefesa();
      break;
    case 3:
      person.descansar();
      break;
    case 4:
      person.batalhar();
      break;
    case 8:
      person.status();
      break;
    default:
      break;
  }
}
