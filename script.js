	var bookA = require('./book.js')();
	var bookB = require('./book.js')();

	bookA.rate(10);
	bookB.rate(20);

	console.log(bookA.getPoints(), bookB.getPoints());
	``
