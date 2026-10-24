const app = require('./app');
const config = require('./config');
// Local fixture only; bind to loopback rather than a public interface.
app.listen(config.port, '127.0.0.1', () => console.log(`OrderFlow listening on 127.0.0.1:${config.port}`));
