import { MediaStreamType } from "./media-stream";

class AudioBook extends MediaStreamType {
    private narrador: string;
    private capituloAtual: number;

    constructor(titulo: string, autor: string, tempoSegundos: number, narrador: string){
        super(titulo, autor, tempoSegundos);
        this.narrador = narrador;
        this.capituloAtual = 1;
    }

    proximoCapitulo(): void{
        this.capituloAtual++;
        console.log(`\nAvançando para o capítulo ${this.capituloAtual}`);
    }

    capituloAnterior(): void{
        if (this.capituloAtual > 1){
            this.capituloAtual--;
            console.log(`\nVoltando para o capítulo ${this.capituloAtual}`);
        }
    }

    getDetails(): void {
        console.log(`\nDetalhes:`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Narrador: ${this.narrador}`);
        console.log(`Capítulo atual: ${this.capituloAtual}`);
        console.log(`Status: ${this.status}`);
        console.log(`Duração: ${this.tempoSegundos} segundos`);
    }

}

export { AudioBook };