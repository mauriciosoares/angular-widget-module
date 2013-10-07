AWM.directive('widget', function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
			elem.bind('dragend', function(e) {
				if(e.y > 50) {
					scope.addWidget(elem);
				}
			});
		}
	};
});