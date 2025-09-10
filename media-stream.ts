abstract class MediaStreamType {
    protected titulo: string;
    protected autor: string;
    protected tempoSegundos: number;
    protected status: 'Tocando' | 'Pausado' | 'Parado';

    constructor(titulo: string, autor: string, tempoSegundos: number){
        this.titulo = titulo;
        this.autor = autor;
        this.tempoSegundos = tempoSegundos;
        this.status = 'Parado';

    }

    play(): void {
        if (this.status !== 'Tocando'){
            this.status = 'Tocando';
            console.log(`Tocando ${this.titulo} de ${this.autor}`);
        }
    }

    pause(): void {
        if (this.status === 'Tocando'){
            this.status = 'Pausado';
            console.log(`${this.titulo} foi pausado.`);
        }
    }

    stop(): void {
        if(this.status !== 'Parado'){
            this.status = 'Parado';
            console.log(`${this.titulo} foi parada.`);
        }
    }

    abstract getDetails(): void;
}

export {
    MediaStreamType
}