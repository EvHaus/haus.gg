/* eslint-disable flowtype/require-valid-file-annotation, import/no-commonjs */
/* eslint-disable flowtype/require-return-type, flowtype/require-parameter-type */

require('@babel/register')({
	presets: ['@babel/preset-env'],
	ignore: ['node_modules', '.next'],
});

// Import the rest of our application.
module.exports = require('./server.js');
