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
    }
    getSaldoCapo() {
        let sconto = (this.prezzoivainclusa * this.saldo) / 100;
        console.log(sconto);
        return sconto;
    }
}
let promise = fetch("../Abbigliamento.json").then((response) => response.json());
console.log(promise);
