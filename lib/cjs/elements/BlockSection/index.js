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
exports.BlockSection = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const BlockSection = (_a) => {
    var { legend, children } = _a, rest = __rest(_a, ["legend", "children"]);
    return (react_1.default.createElement(react_2.Box, Object.assign({ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', bgSize: 'cover', bgColor: 'white', alignContent: 'center', position: 'relative', px: { base: 4, md: 8 }, py: { base: 6, md: 6 }, mb: 6, role: 'group', w: 'full', borderWidth: '2px', borderBottomWidth: '2px', borderColor: 'gray.200', borderStyle: 'solid', rounded: 'xl', shadow: 'sm', _hover: {
            borderColor: 'green.200',
            shadow: 'lg'
        }, _focus: {
            borderColor: 'green.200',
            boxShadow: 'md'
        }, transition: '0.3s ease all' }, rest),
        legend &&
            react_1.default.createElement(react_2.Text, { position: 'absolute', fontSize: 12, fontWeight: 700, letterSpacing: 0.5, color: 'gray.700', bg: 'whiteAlpha.800', top: -3, px: 2, py: 0.5, borderWidth: '1px', borderBottomWidth: '2px', borderColor: 'gray.200', borderStyle: 'solid', rounded: 'lg', _groupHover: {
                    borderColor: 'green.200'
                }, _groupFocus: {
                    borderColor: 'green.200'
                }, transition: '0.3s ease all' }, legend),
        children));
};
exports.BlockSection = BlockSection;
