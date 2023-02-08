import 'mocha';
import { assert } from 'chai';

import npmPackage from '../src/index';

describe('NPM Package', () => {
    it('should be an object', () => {
        assert.isObject(npmPackage);
    });
    it('should have a helloWorld property', () => {
        assert.property(npmPackage, 'helloWorld');
    });
});

// describe('CHeck Exported Functions', () => {
//     const these = [ 
//         BlockSection,
//         BubbleContainer,
//         FootNote,
//         IconicTitle,
//         PageTitle 
//     ]
//     these.map(item => {
//         it('should be a function', () => {
//             assert.isFunction(item)
//         })
//     })
// })