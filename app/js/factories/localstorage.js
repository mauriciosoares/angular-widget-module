AWM.factory('localstorage', function() {
	
	var update = function() {
		console.log('update');
	};

	return {
		update: update
	};
});