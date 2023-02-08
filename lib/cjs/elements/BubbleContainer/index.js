"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const BubbleContainer = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (react_1.default.createElement(react_2.Box, Object.assign({ borderRadius: '2rem', borderStyle: 'solid', borderColor: 'gray.800', borderWidth: '1px 2px 3px 1px', bg: 'whiteAlpha.700', role: 'group', transition: '.3s ease all', p: 8, _hover: {
            shadow: 'lg'
        } }, rest), children));
};
exports.default = BubbleContainer;
