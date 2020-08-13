"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.startRoutes();
    }
    App.prototype.startRoutes = function () {
        this.express.get('/', function (request, response) {
            return response.json({ user: "Gabriel" });
        });
    };
    App.prototype.setPort = function (PORT) {
        this.express.set("port", PORT);
    };
    App.prototype.getServer = function () {
        return this.express;
    };
    return App;
}());
exports.default = new App();
