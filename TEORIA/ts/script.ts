class Clothes {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;
  saldoNumero: number;
  costoTotale: number;

  constructor(
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number
  ) {
    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantita = quantita;
    this.colore = colore;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.prezzoivainclusa = prezzoivainclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
    this.saldoNumero = this.getSaldoCapo();
    this.costoTotale = this.getAcquistoCapo();
  }
  getSaldoCapo(): number {
    this.saldoNumero = (this.prezzoivainclusa * this.saldo) / 100;
    return this.saldoNumero;
  }

  getAcquistoCapo(): number {
    this.costoTotale = this.prezzoivainclusa - this.saldoNumero;
    return this.costoTotale;
  }
}

let promise = fetch("../../Abbigliamento.json").then((response) =>
  response.json()
);
console.log(promise);

let clothesArray: Clothes[] = [];
promise.then((json) => {
  for (let capo of json) {
    capo = new Clothes(
      capo.id,
      capo.codprod,
      capo.collezione,
      capo.capo,
      capo.modello,
      capo.quantita,
      capo.colore,
      capo.prezzoivaesclusa,
      capo.prezzoivainclusa,
      capo.disponibile,
      capo.saldo
    );
    clothesArray.push(capo);
  }
});

console.log(clothesArray);
