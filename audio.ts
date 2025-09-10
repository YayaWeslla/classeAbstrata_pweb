import { MediaStreamType } from "./media-stream"; 

class MusicStream extends MediaStreamType {
    private album: string;
    private genero: string;

    constructor(titulo: string, autor: string, tempoSegundos: number, album: string, genero: string){
        super(titulo, autor, tempoSegundos);
        this.album = album;
        this.genero = genero;
    }

    getDetails(): void{
        console.log(`\nDetalhes:`)
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Álbum: ${this.album}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Status: ${this.status}`);
        console.log(`Duração: ${this.tempoSegundos} segundos`);
    }
}

export { MusicStream }