const accountId = 1254
let accountEmmail = "Harsh@gmail.com"
var accountNo ="123"
accountCity = "bhilai"
let accountState

// accountId = 54   // this is not allowed as const cannot be reassigned/changed..
console.log(accountId);

accountEmmail = "harshu@gmail.com"
accountNO = "0541";
console.table([accountId , accountNo , accountEmmail , accountCity , accountState])

/*
Prefer not to use "var" because of the issue in block_scope and functional_scope 
*/