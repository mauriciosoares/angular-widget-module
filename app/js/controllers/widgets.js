AWM.controller('widgetsCtrl', function($scope, localstorage) {
	var firstLocalStorage = true;
	$scope.widgets = [];
	$scope.hover = false;

	// listeners for the drag'n drop (sorry but this was the way i find out to do it)
	document.addEventListener('dragstart', function() {
		$scope.hover = false;
		
	}, false);

	document.addEventListener('dragenter', function( event ) {
		if ( event.target.className === 'widget-container' ) {
			$scope.hover = true;
			event.target.style.background = 'gray';
		}
	}, false);

	document.addEventListener('dragleave', function( event ) {
		if ( event.target.className === 'widget-container' ) {
			$scope.hover = false;
			event.target.style.background = '';
		}
	}, false);

	document.addEventListener('dragover', function( event ) {
		event.preventDefault();
	}, false);

	document.addEventListener('drop', function( event ) {
		if ( event.target.className === 'widget-container' ) {
			event.target.style.background = '';
		}
	}, false);

	// some random directives
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
		console.log($scope.hover);
		if($scope.hover) {
			$scope.widgets.push({
				name: e[0].innerHTML
			});

			$scope.$apply();
		}
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