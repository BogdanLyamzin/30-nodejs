/*
1. Принимает год в виде целого числа.
2. Возвращает true, если год высокосный, и false - если нет.

- делиться без остатка на 4;
- если делится без остатка на 100 - невысокосный;
- если делится без остатка на 400 - высокосный;
- считается с 42 года.

2008 - true
2003 - false
2000 - true
1900 - false

41 - ошибка с текстом 'Год не может быть меньше 42'
2008.4 - ошибка с текстом 'Год должен быть целым числом'
 - ошибка с текстом 'Год должен быть обязательно указан'

"2008" - ошибка с текстом 'Год должен быть number'
null - ошибка с текстом 'Год должен быть number'
false - ошибка с текстом 'Год должен быть number'
true - ошибка с текстом 'Год должен быть number'
()=>{} - ошибка с текстом 'Год должен быть number'
{} - ошибка с текстом 'Год должен быть number'
[] - ошибка с текстом 'Год должен быть number'
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=>{
    test("2008 - true", ()=>{
        expect(isLeapYear(2008)).toBe(true); // isLeapYear(2008) === true
    });

    test("2003 - false", ()=>{
        expect(isLeapYear(2003)).toBe(false); 
    });

    test("2000 - true", ()=>{
        expect(isLeapYear(2000)).toBe(true); 
    });

    it("1900 - false", ()=>{
        expect(isLeapYear(1900)).toBe(false); 
    });

    test("41 - error 'Год не может быть меньше 42' ", ()=>{
        expect(()=>isLeapYear(41)).toThrow('Год не может быть меньше 42'); 
    });

    test("2008.4 - error 'Год должен быть целым числом' ", ()=>{
        expect(()=>isLeapYear(2008.4)).toThrow('Год должен быть целым числом'); 
    });

    test(" - error 'Год должен быть обязательно указан' ", ()=>{
        expect(()=>isLeapYear()).toThrow('Год должен быть обязательно указан'); 
    });

    test("'2008' - error 'Год должен быть number' ", ()=>{
        expect(()=>isLeapYear("2008")).toThrow('Год должен быть number'); 
    });

    test("null - error 'Год должен быть number' ", ()=>{
        expect(()=>isLeapYear(null)).toThrow('Год должен быть number'); 
    });

    test("false - error 'Год должен быть number' ", ()=>{
        expect(()=>isLeapYear(false)).toThrow('Год должен быть number'); 
    });

    test("true - error 'Год должен быть number' ", ()=>{
        expect(()=>isLeapYear(true)).toThrow('Год должен быть number'); 
    });

    test("()=>{}- error 'Год должен быть number' ", ()=>{
        expect(()=>isLeapYear(()=>{})).toThrow('Год должен быть number'); 
    });

    test("{} - error 'Год должен быть number' ", ()=>{
        expect(()=>isLeapYear({})).toThrow('Год должен быть number'); 
    });

    test("[] - error 'Год должен быть number' ", ()=>{
        expect(()=>isLeapYear([])).toThrow('Год должен быть number'); 
    });
});