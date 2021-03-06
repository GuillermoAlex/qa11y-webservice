// This file is part of Qa11y Webservice.
//
// Qa11y Webservice is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Qa11y Webservice is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Qa11y Webservice.  If not, see <http://www.gnu.org/licenses/>.
// Developed by Guillermo Alexis Lemunao Carrasco and Pa11y Guys

'use strict';

var chalk = require('chalk');
var env = (process.env.NODE_ENV || 'development');
var config = require('./config');

process.on('SIGINT', function() {
	console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
	process.exit();
});

require('./app')(config, function(error, app) {
	console.log('');
	console.log(chalk.underline.cyan('Qa11y Webservice started'));
	console.log(chalk.grey('mode: %s'), env);
	console.log(chalk.grey('uri:  %s'), app.server.info.uri);

	if (error) {
		console.error('');
		console.error(chalk.red('Error starting Qa11y Webservice:'));
		console.error(error.message);
	}
});
