/* TIPES: */

// Enum paymentStatus может иметь 2 значения и они поименовані что защишает от опечаток
enum stat {
  success = 'success',
  failed = 'failed',
}

/* 20) Union */
function LogEl(a: string | number | boolean | string[] | { x: number } | { y: number }) {
  if(typeof a === 'string') {
    console.log(a);
  } else if(typeof a === 'number') {
    console.log(a);
  } else if(typeof a === 'boolean') {
    console.log(a);
  } else if(Array.isArray(a)) {
    console.log(a);
  } else if('x' in a) {
    console.log(a.x);
  } else if('y' in a) {
    console.log(a.y);
  }
}

LogEl({x: 5});
/* 21) Literal types */
let method: 'post' | 'get';
/* 22) Type Aliases */
type User = {
  name: string,
  age: number,
}
type Role = {
  name: string,
  id: number,
}
type Men = User & Role;
let People: Men = {
  name: 'Jack',
  age: 32,
  id: 1,
};

/* 23) Interfaces */
interface Roles {
  name: string,
  id: number,
  log: (id: number) => string;
}

interface Skin {
  face: string,
  hand?: string, // ? make parameter optional
}

interface Developer extends Roles, Skin {
  skills: string[],
}

// The bjects with any count of values which key is number and value is Developer:
interface UserDic {
  [index: number]: Developer;
}

// or that is equal
type UserDic2 = {
  [index: number]: Developer;
}

/* 25) */
function multiply(x: number, y?: number): number {
  if(!y) {
    return x * x;
  }
  return x * y;
}

interface UserPro {
  login: string;
  pasword?: {
    type: 'primary' | 'secondary'
  };
}

function testPass(user: UserPro) {
  const t = user.pasword?.type; // Если св-во отсутствует вернет undefined
}

function testParam(param?: string) {
  const t = param && multiply(5); // Если св-во отсутствует вернет результат введенной функции
}

/* 27) VOID Функция ничего не возвращает */
const a: void = undefined;
/* 28) Unknown (Union type with unknown always will be only unknown */
let input: unknown; // можно присвоить любое значение и является более строгим чем any
async function getData() {
  try {
    await fetch('');
  } catch(error) {
    // method 1
    if(error instanceof Error) {
      console.log(error.message);
    }
    // method 2 (может упасть если error окажется например строкой)
    let err = error as Error;
    console.log(err.message);
  }
}

/* 29) Never Означает что никогда такого не произойдет */
function generateError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  while(true) {
  }
}

// infinity recursion:
function rec(): never {
  return rec();
}

/* 30) Null  */
const r: null = null;
/* 31) Приведение типов  */
let v: number = 5;
let w: string = v.toString();
let f: number = +w;
let d: number = parseInt(w);
let q: boolean = new Boolean(v).valueOf();

interface resS {
  databaseId: number
  sum: number
  from: number
  to: number
}

interface resF {
  databaseId: number
  errorMessage: string
  errorCode: number
}

let rs: resS = {
  databaseId: 567,
  sum: 10000,
  from: 2,
  to: 4
}
let rf: resF = {
  ...rs,
  errorMessage: "Недостаточно средств",
  errorCode: 4
}

// 2й способ
function rsToRf(rs: resS): resF {
  return {
    databaseId: rs.databaseId;
    errorMessage: "Недостаточно средств",
    errorCode: 4
  }
}

/* 32)  Type Guard */
function isString(x: number | string): x is string /*(тоесть boolean)*/ {
  return typeof x === 'string';
}
function isResS(x: resS | resF): x is resS /*(тоесть boolean)*/ {
  return 'sum' in x;
}
function setSum(x: resS | resF) {
  if(isResS(x)) {
    x.sum = 0;
  } else {
    throw new Error('x is not resS')
  }
}
/* 28)  */
/* 28)  */
/* 28)  */
/* 28)  */
/* 28)  */
/* 28)  */
/* 28)  */
/* 28)  */
/* 28)  */
/* 28)  */
/* 28)  */
/* 28)  */
