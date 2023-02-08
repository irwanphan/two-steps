"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTitle = exports.IconicTitle = exports.FootNote = exports.BubbleContainer = exports.BlockSection = exports.goodBye = exports.helloWorld = void 0;
const BlockSection_1 = require("./elements/BlockSection");
Object.defineProperty(exports, "BlockSection", { enumerable: true, get: function () { return BlockSection_1.BlockSection; } });
const BubbleContainer_1 = __importDefault(require("./elements/BubbleContainer"));
exports.BubbleContainer = BubbleContainer_1.default;
const FootNote_1 = __importDefault(require("./elements/FootNote"));
exports.FootNote = FootNote_1.default;
const IconicTitle_1 = __importDefault(require("./elements/IconicTitle"));
exports.IconicTitle = IconicTitle_1.default;
const PageTitle_1 = __importDefault(require("./elements/PageTitle"));
exports.PageTitle = PageTitle_1.default;
function helloWorld() {
    const message = 'Hello World from my example modern npm package!';
    return message;
}
exports.helloWorld = helloWorld;
function goodBye() {
    const message = 'Goodbye from my example modern npm package!';
    return message;
}
exports.goodBye = goodBye;
exports.default = {
    helloWorld,
    goodBye
};
