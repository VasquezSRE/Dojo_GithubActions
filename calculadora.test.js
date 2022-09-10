const cal = require('./calculator');
//Commit
describe('Add Operator',() => {
    test('adds 1 + 1 to equals 2',() => {
        var result = cal.add(1,1);
        expect(result).toBe(2);
    });
    
    test('adds 2 + 2 to equals 4',() => {
        var result = cal.add(2,2);
        expect(result).toBe(4);
    }); 
});

describe('Subtract Operator',() => {
    test('Subtract 2 - 1 to equals 1',() => {
        var result = cal.subtract(2,1);
        expect(result).toBe(1);
    });
});
