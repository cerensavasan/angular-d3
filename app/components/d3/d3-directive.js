angular.module('myApp', [])
 //camel cased directive name
   //in your HTML, this will be named as bars-chart
   .directive('d3Component', d3Directive);
   
   function d3Directive($parse, TestService) {
    return {
      restrict: 'E',
      replace: false,
      template: { gulp_injection: './d3-component.html'},
      scope: {},
      link: function(scope,element,attrs) {
      scope.myData = [10,20,30,40,60];
      //converting all data passed thru into an array
      scope.data = attrs.chartData.split(',');
      //in D3, any selection[0] contains the group
      //selection[0][0] is the DOM node
      //but we won't need that this time
      scope.chart = d3.select(element[0]);
      //to our original directive markup bars-chart
      //we add a div with out chart stling and bind each
      //data entry to the chart
      scope.chart.append("div").attr("class", "chart") 
          .selectAll('div')
          .data(scope.data).enter().append("div")
          .transition().ease("elastic")
          .style("width", function(d) { return d + "%"; })
          .text(function(d) { return d + "%"; });
          //a little of magic: setting it's width based
          //on the data value (d) 
          //and text all with a smooth transition
          console.log("Did the append to chart");
      } 
   };
} //end of d3Directive