AWM.controller('widgetsCtrl', function($scope, localstorage) {
	var firstLocalStorage = true;
	$scope.widgets = [];

	$scope.widgetDirectives = [{
		name: 'AngularJS'
	},
	{
		name: 'HTML5'
	},
	{
		name: 'CSS3'
	},
	{
		name: 'Javascript'
	}];

	$scope.addWidget = function(e) {
		$scope.widgets.push({
			name: e[0].innerHTML
		});

		$scope.$apply();
	};

	$scope.removeWidget = function(item) {
		var i = $scope.widgets.indexOf(item);
		$scope.widgets.splice(i, 1);
	};

	$scope.$watch('widgets', function() {
		if(firstLocalStorage === true) {
			firstLocalStorage = false;
			var widgets = localstorage.getAll();
			if(widgets !== false) {
				for(var i = 0; i < widgets.length; i++) {
					$scope.widgets.push({
						name: widgets[i].name
					});
				}
			}
		} else {
			localstorage.update($scope.widgets)	;
		}
	}, true);
});