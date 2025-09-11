"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaStreamType = void 0;
var MediaStreamType = /** @class */ (function () {
    function MediaStreamType(titulo, autor, tempoSegundos) {
        this.titulo = titulo;
        this.autor = autor;
        this.tempoSegundos = tempoSegundos;
        this.status = 'Parado';
    }
    MediaStreamType.prototype.play = function () {
        if (this.status !== 'Tocando') {
            this.status = 'Tocando';
            console.log("Tocando ".concat(this.titulo, " de ").concat(this.autor));
        }
    };
    MediaStreamType.prototype.pause = function () {
        if (this.status === 'Tocando') {
            this.status = 'Pausado';
            console.log("".concat(this.titulo, " foi pausado."));
        }
    };
    MediaStreamType.prototype.stop = function () {
        if (this.status !== 'Parado') {
            this.status = 'Parado';
            console.log("".concat(this.titulo, " foi parada."));
        }
    };
    return MediaStreamType;
}());
exports.MediaStreamType = MediaStreamType;
