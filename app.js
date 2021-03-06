// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure/State
  const data = {
    items: [
      {id:0, name: 'Steak Dinner', calories: 1200},
      {id:1, name: 'Pizza', calories: 900},
      {id:2, name: 'Cookie', calories: 400}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    logData: function() {
      return data;
    }
  }
})();


// UI Controller
const UICtrl = (function() {

  // Public methods
  return {
  }
  
})();



// App Controller
const AppCtrl = (function(ItemCtrl, UICtrl) {

  // Public methods
  return {
    init: function() {
      console.log('init App...')
    }
  }
  
})(ItemCtrl, UICtrl);



// Initialize App
AppCtrl.init();