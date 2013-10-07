AWM.controller('widgetsCtrl', function($scope, localstorage) {
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
		// console.log('teste');
	}, true);
});