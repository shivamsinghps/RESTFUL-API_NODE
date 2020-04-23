const bcrypt = require('bcrypt')
const data = require('./data/Initial_User_data')


let password = '';
const hashPassword = (pass) => {
  password = bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
  return password;
};

data2 =[]


data.map(d=> d.password = hashPassword(d.password))

console.log(data);
