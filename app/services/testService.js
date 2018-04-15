angular
.module('myApp.services')
.service('TestService', testService);

function testService() {

  var testVar = {};
  testVar.name="test";

  testVar.testFunction = function(){
    console.log("Inside test service.");
    return testVar.name;
  }

  return testVar;
} // end of testService()