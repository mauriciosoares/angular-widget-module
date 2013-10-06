AWM.controller('widgetsCtrl', function($scope, localstorage) {
	$scope.widgets = [];

	$scope.widgetDirectives = [{
		name: 'AngularJS',
		hide: false
	},
	{
		name: 'HTML5',
		hide: false
	},
	{
		name: 'CSS3',
		hide: false
	},
	{
		name: 'Javascript',
		hide: false
	}];

	$scope.addWidget = function(e) {
		$scope.widgets.push({
			name: e[0].innerHTML
		});

		var wDirectivesLength = $scope.widgetDirectives.length;

		for(var i = 0; i <= wDirectivesLength; i++) {
			console.log($scope.widgetDirectives[i].name);
			if($scope.widgetDirectives[i].name == e[0].innerHTML) {
				$scope.widgetDirectives[i].hide = true;
			}
		}

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