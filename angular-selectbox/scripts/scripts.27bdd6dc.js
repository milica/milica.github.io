"use strict";angular.module("selectbox",[]).filter("contains",[function(){return function(a,b){return-1!==a.indexOf(b)}}]).controller("SelectBoxCtrl",["$scope","$document",function(a,b){a.view={},a.view.show=!1,a.view.instanceId="inst-"+Date.now();var c=function(b){var c=angular.element(b.target),d=c.attr("id"),e=a.multi&&"undefined"==typeof d&&c.hasClass("mad-selectbox-item");return a.view.instanceId===d||e?!1:(a.view.show=!1,void a.$apply())},d=function(){"undefined"!=typeof a.list&&(a.view.selected=a.multi?a.index:a.list[a.index])};a.toggleList=function(){a.view.show=!a.view.show,a.view.show?b.bind("click",c):b.unbind("click",c)},a.selectItem=function(b){if(a.multi){var c=a.list[b].id,d=a.view.selected.indexOf(c);if(-1!==d){if(a.view.selected.length<=parseInt(a.min,10))return!1;a.view.selected.splice(d,1)}else a.view.selected.push(c);a.index=a.view.selected}else a.view.selected=a.list[b],a.index=b;a.handler()},d(),a.$watch("list.length",function(a,b){a!==b&&d()}),a.$watch("index",function(a,b){a!==b&&d()}),a.$on("$destroy",function(){b.unbind("click",c)})}]).directive("selectbox",[function(){return{restrict:"E",replace:!0,scope:{list:"=",index:"=ngModel",multi:"@",title:"@",min:"@",handler:"&"},controller:"SelectBoxCtrl",template:'<div class="mad-selectbox" ng-class="{\'mad-selectbox-multi\': multi}"><a href id="{{ view.instanceId }}"class="mad-selectbox-toggle"ng-click="toggleList()"ng-class="{active: view.show}">{{ multi ? (title || \'Select\') : (view.selected.name || view.selected || \'Select\') }}</a><ul class="mad-selectbox-dropdown" ng-show="view.show"><li ng-repeat="item in list track by $index"ng-class="{active: multi ? (view.selected | contains:item.id) : ($index === index)}"><a href class="mad-selectbox-item" ng-click="selectItem($index)">{{ item.name || item }}</a></li></ul></div>'}}]),angular.module("selectboxAppApp",["ngResource","selectbox"]),angular.module("selectboxAppApp").controller("MainCtrl",["$scope",function(a){a.view={},a.view.list1=[10,134,43,10093],a.view.list2=[{id:1,name:"Apple"},{id:2,name:"Pear"},{id:3,name:"Peach"},{id:4,name:"Banana"},{id:5,name:"Watermelon"},{id:6,name:"Walnut"}],a.view.selected2=1,a.view.list3=[{id:1,name:"Mercury"},{id:2,name:"Venus"},{id:3,name:"Earth"},{id:4,name:"Mars"},{id:5,name:"Jupiter"},{id:6,name:"Saturn"},{id:7,name:"Uranus"},{id:8,name:"Neptune"}],a.view.selected3=[0,2]}]);