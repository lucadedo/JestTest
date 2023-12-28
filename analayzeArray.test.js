const analayzeArray = require('./analyzeArray');

test('ANALYZE ARRAY test 1', () => {
    let array = [1,8,3,4,2,6];
    expect(analayzeArray(array)).toEqual({average: 4,min: 1,max: 8,length: 6});
});

test('ANALYZE ARRAY test 2', () => {
    let array2 = [11,7,9,4,3,5,20];
    expect(analayzeArray(array2)).toEqual({average: 4,min: 3,max: 20,length: 7});
});