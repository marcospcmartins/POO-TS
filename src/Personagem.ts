export default class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}

  status(): void {
    console.log('+==============Status===============+');
    console.log(`     Personagem: ${this.nome}`);
    console.log(`     Vida: ${this.vida}`);
    console.log(`     Energia: ${this.energia}`);
    console.log(`     Ataque: ${this.ataque}`);
    console.log(`     Defesa: ${this.defesa}`);
    console.log('+===================================+\n');
  }

  isDead(): void {
    if (this.energia < 0) {
      console.log('Ops! Você morreu!');
    }
  }

  treinarAtaque(): void {
    this.ataque += Math.floor(Math.random() * 7);
    this.energia -= Math.floor(Math.random() * 10);
    this.isDead();
    this.status();
  }

  treinarDefesa(): void {
    this.defesa += Math.floor(Math.random() * 5);
    this.energia -= Math.floor(Math.random() * 10);
    this.isDead();
    if (this.defesa > 100) {
      this.defesa = 0;
    }
    this.status();
  }

  descansar(): void {
    this.energia += Math.floor(Math.random() * 10);
    if (this.energia > 100) {
      this.energia = 100;
    }
    this.status();
  }

  batalhar(): void {
    this.energia -= Math.floor(Math.random() * 100);
    this.isDead();
    this.status();
  }
}
