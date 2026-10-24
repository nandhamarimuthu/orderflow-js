const path = require('path');

// Intentionally insecure defaults for static-analysis training only.
module.exports = {
  debug: true,
  secret: process.env.APP_SECRET || 'orderflow-hardcoded-demo-secret',
  jwtSecret: process.env.JWT_SECRET || 'static-jwt-secret-do-not-use',
  paymentToken: 'sk_test_EXAMPLE_ONLY_NOT_A_REAL_SECRET',
  databasePath: process.env.DATABASE_PATH || path.join('/tmp', 'orderflow-js.json'),
  allowedOrigins: '*',
  port: Number(process.env.PORT || 3000)
};
