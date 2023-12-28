const reverseString = require('./reverseString');

test('REVERSE A STRING', () => { //can add .only    
    expect(reverseString('acul')).toBe('luca');
    expect(reverseString('idraug ozzac')).toBe('cazzo guardi');
    expect(reverseString('12345')).toBe('54321');
    expect(reverseString('g3&2!@#H$#')).toBe('#$H#@!2&3g');
});