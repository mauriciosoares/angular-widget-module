AWM.directive('widget', function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
			elem.bind('dragend', function(e) {
				scope.addWidget(elem);
			});
		}
	};
});