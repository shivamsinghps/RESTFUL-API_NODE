const rateLimit = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 calls max
  message:'Reached api call limit try after a minute'
});
