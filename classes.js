var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created: " + this.name);
    }
    User.prototype.getInvoice = function () {
        return 'get invoice';
    };
    return User;
}());
var Member = (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.getInvoice = function () {
        return _super.prototype.getInvoice.call(this);
    };
    return Member;
}(User));
//let radin = new User( 'radin', 'radin@gmail.com', 27 );
var romdual = new Member(1, 'romdual_', 'romdual@romchong.com', 21);
console.log(romdual.id);
console.log(romdual.getInvoice());
