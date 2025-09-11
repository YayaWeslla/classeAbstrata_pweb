import { MediaStreamType } from "./media-stream";
import { MusicStream } from "./audio";
import { PodcastStream } from "./podcast";
import { AudioBook } from "./audio-book";

//Criando um array para lidar com os diferentes tipos de mídia
const mediaList: MediaStreamType[] = [];

//Objetos de Media Stream Types
const musica1 = new MusicStream("Bohemian Rhapsody", "Queen", 360, "A Night at the Opera", "Rock");

const podCast1 = new PodcastStream("IA na Educação #20", "Steve Jobs", 3600, "IA na Educação", 20);

const audioLivro1 = new AudioBook("Harry Potter e o Prisioneiro de Azkaban", "J.K. Rowling", 28880, "Cid Moreira");

//Adicionando os objetos ao array mediaList
mediaList.push(musica1, podCast1, audioLivro1);

//Percorrendo o array
mediaList.forEach((media) => {
    media.play();
    media.getDetails();
    media.pause();
    media.stop();
    console.log('---')
})