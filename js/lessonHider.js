angular.module('directivePractice').directive('lessonHider', function(){
  return {
      restrict: 'E',
      templateUrl: './html/lessonHider.html',
      scope: {
        ourLesson: '=',
        dayAlert: '&',
        deleteLesson: '&'
      },
      controller: function($scope, lessonService){
        $scope.getSchedule = lessonService.getSchedule();
      },
      link: function(scope, element, attrs){
        scope.getSchedule.then(function(response){
          scope.schedule = response.data

          scope.schedule.forEach(function(scheduleDay, index){
            console.log(attrs)
            console.log(element)
            if(scheduleDay.lesson === scope.ourLesson){
              element.css('text-decoration', 'line-through');
              scope.lessonDay = scheduleDay.weekday
              return;
            }
          })
        });
      }
  }

});
