"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var audio_1 = require("./audio");
var podcast_1 = require("./podcast");
var audio_book_1 = require("./audio-book");
//Criando um array para lidar com os diferentes tipos de mídia
var mediaList = [];
//Objetos de Media Stream Types
var musica1 = new audio_1.MusicStream("Bohemian Rhapsody", "Queen", 360, "A Night at the Opera", "Rock");
var podCast1 = new podcast_1.PodcastStream("IA na Educação #20", "Steve Jobs", 3600, "IA na Educação", 20);
var audioLivro1 = new audio_book_1.AudioBook("Harry Potter e o Prisioneiro de Azkaban", "J.K. Rowling", 28880, "Cid Moreira");
//Adicionando os objetos ao array mediaList
mediaList.push(musica1, podCast1, audioLivro1);
//Percorrendo o array
mediaList.forEach(function (media) {
    media.play();
    media.getDetails();
    media.pause();
    media.stop();
    console.log('---');
});
