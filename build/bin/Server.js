"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("../App"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.onError = function (error) {
            if (error.syscall !== "listen") {
                throw error;
            }
            var bind = typeof _this.port === "string" ? "Pipe " + _this.port : "Port " + _this.port;
            // handle specific listen errors with friendly messages
            switch (error.code) {
                case "EACCES":
                    console.error(bind + " requires elevated privileges");
                    process.exit(1);
                case "EADDRINUSE":
                    console.error(bind + " is already in use");
                    process.exit(1);
                default:
                    throw error;
            }
        };
        this.onListening = function () {
            var addr = "http://localhost:" + _this.port;
            console.log("Listening on " + addr);
        };
        this.port = this.normalizePort(process.env.PORT || "8080");
        this.app = App_1.default;
        this.app.setPort(this.port);
        this.startServer();
    }
    Server.prototype.normalizePort = function (val) {
        var port = parseInt(val, 10);
        if (isNaN(port)) {
            // named pipe
            return val;
        }
        if (port >= 0) {
            // port number
            return port;
        }
        return false;
    };
    Server.prototype.startServer = function () {
        var server = this.app.getServer();
        server.listen(this.port);
        server.on("error", this.onError);
        server.on("listening", this.onListening);
    };
    return Server;
}());
exports.default = new Server();
