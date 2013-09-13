var mongoose = require('mongoose'),
	Article = mongoose.model('Article');

exports.index = function (req, res) {
	Article.find(function (err, articles) {
		if (!articles.length) {
			var foo = new Article({
				title: "Foo title",
				url: "footest",
				text: "Foo text value goes here"
			});
			foo.save(function(err, newfoo) {
				if (err) console.log("Fail!");
				else console.log("Win!");
			});
		}
		if (err) throw new Error(err);
		res.render('home', {
			title: 'Generator-Express MVC',
			articles: articles
		});
		console.log(articles);
	});
};