"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTitle = exports.IconicTitle = exports.FootNote = exports.BubbleContainer = exports.BlockSection = void 0;
const BlockSection_1 = __importDefault(require("./elements/BlockSection"));
exports.BlockSection = BlockSection_1.default;
const BubbleContainer_1 = __importDefault(require("./elements/BubbleContainer"));
exports.BubbleContainer = BubbleContainer_1.default;
const FootNote_1 = __importDefault(require("./elements/FootNote"));
exports.FootNote = FootNote_1.default;
const IconicTitle_1 = __importDefault(require("./elements/IconicTitle"));
exports.IconicTitle = IconicTitle_1.default;
const PageTitle_1 = __importDefault(require("./elements/PageTitle"));
exports.PageTitle = PageTitle_1.default;
function helloWorld() {
    const message = 'Hello World!';
    return message;
}
exports.default = helloWorld;
