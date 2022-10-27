"use strict";
class Clothes {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    getSaldoCapo() {
        this.saldoNumero = (this.prezzoivainclusa * this.saldo) / 100;
        return this.saldoNumero;
    }
    getAcquistoCapo() {
        this.costoTotale = this.prezzoivainclusa - this.saldoNumero;
        return this.costoTotale;
    }
}
let promise = fetch("../../Abbigliamento.json").then((response) => response.json());
console.log(promise);
let clothesArray = [];
promise.then((json) => {
    for (let capo of json) {
        capo = new Clothes(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoivaesclusa, capo.prezzoivainclusa, capo.disponibile, capo.saldo);
        clothesArray.push(capo);
    }
});
console.log(clothesArray);
