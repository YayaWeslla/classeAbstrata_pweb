import { MediaStreamType } from "./media-stream";

class PodcastStream extends MediaStreamType {
    private nomePrograma: string;
    private numeroEp: number;

    constructor(titulo: string, autor: string, tempoSegundos: number, nomePrograma: string, numeroEp: number){
        super(titulo, autor, tempoSegundos);
        this.nomePrograma = nomePrograma;
        this.numeroEp = numeroEp;
    }

    getDetails(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Programa: ${this.nomePrograma}`);
        console.log(`Episódio: ${this.numeroEp}`);
        console.log(`Status: ${this.status}`);
        console.log(`Duração: ${this.tempoSegundos} segundos`);
    }
}

export { PodcastStream };