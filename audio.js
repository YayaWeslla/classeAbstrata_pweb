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
exports.MusicStream = void 0;
var media_stream_1 = require("./media-stream");
var MusicStream = /** @class */ (function (_super) {
    __extends(MusicStream, _super);
    function MusicStream(titulo, autor, tempoSegundos, album, genero) {
        var _this = _super.call(this, titulo, autor, tempoSegundos) || this;
        _this.album = album;
        _this.genero = genero;
        return _this;
    }
    MusicStream.prototype.getDetails = function () {
        console.log("\nDetalhes:");
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Autor: ".concat(this.autor));
        console.log("\u00C1lbum: ".concat(this.album));
        console.log("G\u00EAnero: ".concat(this.genero));
        console.log("Status: ".concat(this.status));
        console.log("Dura\u00E7\u00E3o: ".concat(this.tempoSegundos, " segundos"));
    };
    return MusicStream;
}(media_stream_1.MediaStreamType));
exports.MusicStream = MusicStream;
