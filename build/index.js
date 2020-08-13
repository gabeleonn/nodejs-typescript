"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.server = express_1.default();
        this.startRoutes();
        this.server.listen(3000);
    }
    App.prototype.startRoutes = function () {
        this.server.get('/', function (request, response) {
            return response.json({ user: "Gabriel" });
        });
    };
    return App;
}());
exports.default = new App();
