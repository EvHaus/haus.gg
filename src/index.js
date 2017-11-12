import app from './server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000);

if (module.hot) {
	// eslint-disable-next-line no-console
	console.log('✅  Server-side HMR Enabled!');

	module.hot.accept('./server', () => {
		// eslint-disable-next-line no-console
		console.log('🔁  HMR Reloading `./server`...');
		server.removeListener('request', currentApp);
		const newApp = require('./server').default;
		server.on('request', newApp);
		currentApp = newApp;
	});
}
