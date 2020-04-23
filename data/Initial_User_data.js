const bcrypt=require('bcrypt');

let password = '';
const hashPassword = (pass) => {
  password = bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
  return password;
};

const data = [{
  "email": "vpina0@webs.com",
  "password": "yA9BPi1"
}, {
  "email": "esears1@unblog.fr",
  "password": "EYNyGjt"
}, {
  "email": "gbosden2@4shared.com",
  "password": "jMHieDZPO2Fw"
}, {
  "email": "delen3@kickstarter.com",
  "password": "weDNcnG"
}, {
  "email": "ltinklin4@uol.com.br",
  "password": "UjHYfHBjHcSW"
}, {
  "email": "lrockwill5@slashdot.org",
  "password": "9zvaEHSPL"
}, {
  "email": "hgingell6@kickstarter.com",
  "password": "IzpaIh"
}, {
  "email": "haverall7@reverbnation.com",
  "password": "PMlYpj5JJ5"
}, {
  "email": "dprebble8@huffingtonpost.com",
  "password": "Ko4TTr5"
}, {
  "email": "yszymanek9@tumblr.com",
  "password": "pNV2ry1oMe"
}, {
  "email": "cpatingtona@disqus.com",
  "password": "35jbaWpm"
}, {
  "email": "ejeremiahb@creativecommons.org",
  "password": "7OuKK3"
}, {
  "email": "gprevettc@mozilla.org",
  "password": "K6ZbcO"
}, {
  "email": "dheavysided@artisteer.com",
  "password": "jtiRycN"
}, {
  "email": "hlapleye@va.gov",
  "password": "dLzIVKwSttXm"
}, {
  "email": "jshonef@xrea.com",
  "password": "LhOKFzJvl"
}, {
  "email": "tfarrellg@cmu.edu",
  "password": "31q2o4Rs6NuC"
}, {
  "email": "jovitzh@rambler.ru",
  "password": "bdaNRZCQZ"
}, {
  "email": "rwithulli@foxnews.com",
  "password": "8mv9YI5ht"
}, {
  "email": "srogerotj@twitter.com",
  "password": "a4j67Kw"
}]

data.map(d=> d.password = hashPassword(d.password))

module.exports = data
