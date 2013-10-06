AWM.directive('widget', function () {
	return {
		restrict: 'A',
		// templateUrl: 'js/directives/templates/widget.html',
		link: function (scope, elem) {

			function removeElement(element) {
				element && element.parentNode && element.parentNode.removeChild(element);
			}

			elem.bind('dragend', function(e) {
				if(e.y > 50) {
					scope.addWidget(elem);
					// removeElement(elem[0]);
				}
			});
		}
	};
});