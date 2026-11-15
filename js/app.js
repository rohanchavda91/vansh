// data.js ka nested FAMILY tree seedha UI ko deta hai.
angular.module('vansh', []).controller('TreeCtrl', function () {
  var vm = this;
  vm.roots = [FAMILY.root];
});
