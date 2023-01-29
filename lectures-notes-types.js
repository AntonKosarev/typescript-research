"use strict";
/* TIPES: */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Enum paymentStatus может иметь 2 значения и они поименовані что защишает от опечаток
var stat;
(function (stat) {
    stat["success"] = "success";
    stat["failed"] = "failed";
})(stat || (stat = {}));
/* 20) Union */
function LogEl(a) {
    if (typeof a === 'string') {
        console.log(a);
    }
    else if (typeof a === 'number') {
        console.log(a);
    }
    else if (typeof a === 'boolean') {
        console.log(a);
    }
    else if (Array.isArray(a)) {
        console.log(a);
    }
    else if ('x' in a) {
        console.log(a.x);
    }
    else if ('y' in a) {
        console.log(a.y);
    }
}
LogEl({ x: 5 });
/* 21) Literal types */
let method;
let People = {
    name: 'Jack',
    age: 32,
    id: 1,
};
/* 25) */
function multiply(x, y) {
    if (!y) {
        return x * x;
    }
    return x * y;
}
function testPass(user) {
    var _a;
    const t = (_a = user.pasword) === null || _a === void 0 ? void 0 : _a.type; // Если св-во отсутствует вернет undefined
}
function testParam(param) {
    const t = param && multiply(5); // Если св-во отсутствует вернет результат введенной функции
}
/* 27) VOID Функция ничего не возвращает */
const a = undefined;
/* 28) Unknown (Union type with unknown always will be only unknown */
let input; // можно присвоить любое значение и является более строгим чем any
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            // method 1
            if (error instanceof Error) {
                console.log(error.message);
            }
            // method 2 (может упасть если error окажется например строкой)
            let err = error;
            console.log(err.message);
        }
    });
}
/* 29) Never Означает что никогда такого не произойдет */
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) {
    }
}
// infinity recursion:
function rec() {
    return rec();
}
/* 30) Null  */
const r = null;
/* 31) Приведение типов  */
let v = 5;
let w = v.toString();
let f = +w;
let d = parseInt(w);
let q = new Boolean(v).valueOf();
let rs = {
    databaseId: 567,
    sum: 10000,
    from: 2,
    to: 4
};
let rf = Object.assign(Object.assign({}, rs), { errorMessage: "Недостаточно средств", errorCode: 4 });
// 2й способ
function rsToRf(rs) {
    return {
        databaseId: rs.databaseId,
        errorMessage: "Недостаточно средств",
        errorCode: 4
    };
}
/* 32)  Type Guard */
function isString(x) {
    return typeof x === 'string';
}
function isResS(x) {
    return 'sum' in x;
}
function setSum(x) {
    if (isResS(x)) {
        x.sum = 0;
    }
    else {
        throw new Error('x is not resS');
    }
}
