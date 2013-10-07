AWM.factory('localstorage', function() {
	
	var update = function(array) {
		localStorage.setItem('widgets', JSON.stringify(array));
	};

	var getAll = function() {
		if(localStorage.getItem('widgets') !== null) {
			return JSON.parse(localStorage.getItem('widgets'));
		}

		return false;
	};

	return {
		update: update,
		getAll: getAll
	};
});