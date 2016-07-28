console.clear()

angular.module('carApp', [])
  .controller('CarListController', function() {
    var carList = this;
    carList.cars = [
      // {name:'merc', model:'s-class'},
      // {name:'toyota', model:'vios'},
      // {name:'merc2', model:'s-class'},
      // {name:'toyota2', model:'vios'},
      // {name:'merc3', model:'s-class'},
      // {name:'toyota3', model:'vios'}
    ]

    carList.addCar = function() {
      carList.cars.push({name:carList.carName, model:carList.carModel})
      carList.carName = ''
      carList.carModel = ''
    };

    carList.delete = function(index) {
      carList.cars.splice(index, 1)
      // console.log(index)
    }

     carList.edit = function(index) {
      carList.carName = carList.cars[index].name
      carList.carModel = carList.cars[index].model
      carList.cars.splice(index, 1)
    }
  })
