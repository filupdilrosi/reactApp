import React, { Component } from 'react'; 
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';

const produce = [
 {name: "Apple", type: "Fruit"},
 {name: "Pineapple", type: "Fruit"} ,
 {name: "Banana", type: "Fruit"},
 {name: "Pear", type: "Fruit"},
 {name: "Strawberry", type: "Fruit"},
 {name: "Orange", type: "Fruit"},
 {name: "Lettuce", type: "Vegetable"},
 {name: "Cucumber", type: "Vegetable"},
 {name: "Eggplant", type: "Vegetable"},
 {name: "Squash", type: "Vegetable"},
 {name: "Bell pepper", type: "Vegetable"},
 {name: "Onion", type: "Vegetable"},
]; 

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HelloWorld name={'Phillip DelRossi'}/>
        <Counter/>
        <FilteredList items={produce} /> {/* Pass the items to FilteredList */}
      </div>
    );
  }
}

export default App;