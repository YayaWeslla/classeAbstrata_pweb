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
exports.PodcastStream = void 0;
var media_stream_1 = require("./media-stream");
var PodcastStream = /** @class */ (function (_super) {
    __extends(PodcastStream, _super);
    function PodcastStream(titulo, autor, tempoSegundos, nomePrograma, numeroEp) {
        var _this = _super.call(this, titulo, autor, tempoSegundos) || this;
        _this.nomePrograma = nomePrograma;
        _this.numeroEp = numeroEp;
        return _this;
    }
    PodcastStream.prototype.getDetails = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Autor: ".concat(this.autor));
        console.log("Programa: ".concat(this.nomePrograma));
        console.log("Epis\u00F3dio: ".concat(this.numeroEp));
        console.log("Status: ".concat(this.status));
        console.log("Dura\u00E7\u00E3o: ".concat(this.tempoSegundos, " segundos"));
    };
    return PodcastStream;
}(media_stream_1.MediaStreamType));
exports.PodcastStream = PodcastStream;
