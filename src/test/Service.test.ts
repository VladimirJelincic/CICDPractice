import { getCoolName } from '../app/Service';

describe('Service test suite', () => {
    
    test('Name should be CoolName', () => {
        const actual = getCoolName();
        const expected = 'CoolName';
        expect(actual).toBe(expected);
    })
})