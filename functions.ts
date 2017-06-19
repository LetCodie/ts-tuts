function getSum(num1: number, num2:number):number {
  return num1 + num2;
}

console.log(getSum(2,3));

function getConcat(str1:string, str2:string): string {
  return `${str1} ${str2}`;
}
console.log(getConcat("Hello", 'World'));

function getAny(sth1:any, sth2:any): number {

  return sth1 * sth2;
}

console.log( getAny("34", 5) );

function myVoid():void {
  console.log('This is my void;');
  return;
}

myVoid();
