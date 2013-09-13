var mongoose = require('mongoose'),
	Article = mongoose.model('Article');

exports.index = function (req, res) {
	Article.find(function (err, articles) {
		if (err) throw new Error(err);
		res.render('home', {
			title: 'Generator-Express MVC',
			articles: articles
		});
	});
};