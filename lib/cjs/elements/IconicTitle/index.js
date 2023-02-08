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
const IconicTitle = (_a) => {
    var { icon, hoverColor, children } = _a, rest = __rest(_a, ["icon", "hoverColor", "children"]);
    return (react_1.default.createElement(react_2.Box, Object.assign({ position: 'absolute', top: 4, role: 'group' }, rest),
        react_1.default.createElement(react_2.HStack, null,
            react_1.default.createElement(react_2.Circle, { as: icon, transition: '.4s ease all', borderStyle: 'solid', borderColor: 'gray.800', borderWidth: '1px 2px 3px 1px', size: 8, p: 1, bg: { base: `${hoverColor}`, md: 'white' }, position: 'relative', top: { base: '-1.5', md: '0' }, _groupHover: {
                    bg: `${hoverColor}`,
                    top: '-1.5'
                } }),
            react_1.default.createElement(react_2.Text, { fontSize: 20, fontWeight: 700, position: 'relative', top: -2, letterSpacing: 1 }, children))));
};
exports.default = IconicTitle;
