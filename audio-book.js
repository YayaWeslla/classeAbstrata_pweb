"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioBook = void 0;
var media_stream_1 = require("./media-stream");
var AudioBook = /** @class */ (function (_super) {
    __extends(AudioBook, _super);
    function AudioBook(titulo, autor, tempoSegundos, narrador) {
        var _this = _super.call(this, titulo, autor, tempoSegundos) || this;
        _this.narrador = narrador;
        _this.capituloAtual = 1;
        return _this;
    }
    AudioBook.prototype.proximoCapitulo = function () {
        this.capituloAtual++;
        console.log("\nAvan\u00E7ando para o cap\u00EDtulo ".concat(this.capituloAtual));
    };
    AudioBook.prototype.capituloAnterior = function () {
        if (this.capituloAtual > 1) {
            this.capituloAtual--;
            console.log("\nVoltando para o cap\u00EDtulo ".concat(this.capituloAtual));
        }
    };
    AudioBook.prototype.getDetails = function () {
        console.log("\nDetalhes:");
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Autor: ".concat(this.autor));
        console.log("Narrador: ".concat(this.narrador));
        console.log("Cap\u00EDtulo atual: ".concat(this.capituloAtual));
        console.log("Status: ".concat(this.status));
        console.log("Dura\u00E7\u00E3o: ".concat(this.tempoSegundos, " segundos"));
    };
    return AudioBook;
}(media_stream_1.MediaStreamType));
exports.AudioBook = AudioBook;
