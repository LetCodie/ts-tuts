class User {
  name: string;
  email: string;
  age: number;

  constructor( name: string, email: string, age: number ) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log( `User created: ${this.name}` );
  }

  getInvoice():string {
    return 'get invoice';
  }
}

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  getInvoice():string {
    return super.getInvoice();
  }
}

//let radin = new User( 'radin', 'radin@gmail.com', 27 );
let romdual = new Member(1, 'romdual', 'romdual@romchong.com', 21);
console.log( romdual.id );
console.log( romdual.getInvoice() );
