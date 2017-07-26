angular.module('directivePractice').controller('lessonCtrl',function($scope){
  $scope.test = 'Two-way data binding!'
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo']
  $scope.announceDay = function(lesson,day){
    if(!day){
        alert(lesson + ' is not scheduled')
    }
    else{
    alert(lesson + ' is active on ' + day + '.' )
    }
  }
  $scope.lessonDelete = function(lesson){
    $scope.lessons.forEach(function(value,index){
      if(value == lesson){
        $scope.lessons.splice(index,1)
      }
    })
  }


})
