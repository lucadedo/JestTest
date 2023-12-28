const caesarCipher = require("./caesarCipher");


test('SINGLE CHAR', () => {
 expect(caesarCipher("a")).toBe("D");
});
test('ONE WORD', () => {
    expect(caesarCipher("Luca")).toBe("OXFD");
});
test('SENTENCE', () => {
    expect(caesarCipher("I love pizza")).toBe("L ORYH SLCCD");
    expect(caesarCipher("I love pizza")).toMatch(/SLCCD/);
    expect(caesarCipher("I love pizza")).not.toMatch(/I/); // just trying..
});
test('PUNCTUATION & WRAPPING', () => {
    expect(caesarCipher("xy.za?")).toBe("AB.CD?");
});
test('NUMBERS', () => {
    expect(caesarCipher("1234")).toBe("1234");
});
 
 