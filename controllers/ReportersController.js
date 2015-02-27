newspaperBeat.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)

  $scope.addReporter = function() {
    $scope.beat.reporter.push({ name: $scope.reporterName, yearsEmployed: $scope.yearsEmployed, birthday: $scope.birthday });
    $scope.reporterName = null;
    $scope.yearsEmployed = null;
    $scope.birthday = null;
  }
});
