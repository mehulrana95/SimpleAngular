var MyApp = angular
    .module("MyApp", [])
    .controller("myController", function($scope) {

      var courseData = [
        {name:'HTML', likes:0, dislikes:0,},
        {name:'CSS', likes:0, dislikes:0,},
        {name:'Bootstrap', likes:0, dislikes:0,},
        {name:'SASS', likes:0, dislikes:0,},
        {name:'Angular', likes:0, dislikes:0,}
      ];
      $scope.courseData = courseData;

      $scope.courseLike = function(course){
        course.likes++;
      }

      $scope.courseDislike = function(course){
        course.dislikes++;
      }
    })

    .controller("salary", function($scope){
        var employees = [
          {name:"John", doj:new Date("November 12, 2008"), gender:"Male", salary:"50000"},
          {name:"Steve", doj:new Date("January 12, 2010"), gender:"Male", salary:"65000"},
          {name:"Jake", doj:new Date("May 12, 2015"), gender:"Male", salary:"78526"},
          {name:"Stake", doj:new Date("June 12, 2012"), gender:"Male", salary:"10222"},
          {name:"Ben", doj:new Date("July 12, 2001"), gender:"Male", salary:"99999"}
        ];

        $scope.employees = employees;
        $scope.rowCtrl = 3;
        $scope.sortBy = "name";
    });
