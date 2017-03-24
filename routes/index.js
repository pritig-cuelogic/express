var controller = require('../controllers/mainController');

exports.index = function(app) {
		app.get('/', controller.index);
}
	
exports.about = function(app) {
	app.get('/about', controller.about);
}
