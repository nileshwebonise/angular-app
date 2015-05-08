(function () {
    angular
        .module('app')
        .controller('ProductController', ProductController);
    
    function ProductController() {
        // var vm = this;
        // vm.addItem = addItem;
        // vm.removeItem = removeItem;
        // vm.total = total;
        // vm.invoice = {
        //   items: [{
        //     qty: 10,
        //     description: 'item',
        //     cost: 9.95}]
        // };

        // vm.addItem = function() {
        //   vm.invoice.items.push({
        //     qty: 1,
        //     description: '',
        //     cost: 0
        //   });
        // },

        // vm.removeItem = function(index) {
        //    vm.invoice.items.splice(index, 1);
        // },

        // vm.total = function() {
        //   var total = 0;
        //   angular.forEach(vm.invoice.items, function(item) {
        //     total += item.qty * item.cost;
        //   })
        //   return total;
        // }
    }

})();