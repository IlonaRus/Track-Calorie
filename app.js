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
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  }
})();


// UI Controller
const UICtrl = (function() {
  const UISelectors =  {
    itemList: '#item-list',
    addButton: '.add-btn'
  }

  // Public methods
  return {
    populateItemList: function(items) {
      let html = '';

      items.forEach(function(item) {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        `;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();



// App Controller
const AppCtrl = (function(ItemCtrl, UICtrl) {
  // Load event listeners
  const loadEvenListeners = function() {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addButton).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e) {
    console.log('Add');
    e.preventDefault();
  }


  // Public methods
  return {
    init: function() {
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);
      
    }
  }
  
})(ItemCtrl, UICtrl);



// Initialize App
AppCtrl.init();