import React, { Component } from 'react'; 
import List from './List'; 
import { DropdownButton, Dropdown } from 'react-bootstrap';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All" 
    };
  }
  // Update the state as the user types 
  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }
  // Update the search state for selected dropdown item
  onSelect = (eventKey) => {
    this.setState({ search: eventKey.toLowerCase() });
  }
  // Filters items 
  filterItem = (item) => {
    if (this.state.search !== "all") {
      return item.type.toLowerCase().includes(this.state.search);
    } else {
      return true; 
    }
  }

  render() {
    return (
      <div className="filter-list">
        <br/>
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title="Type" onSelect={this.onSelect}>
          <Dropdown.Item eventKey="all">All</Dropdown.Item><br/>
          <Dropdown.Item eventKey="Fruit">Fruits</Dropdown.Item><br/>
          <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item><br/>
        </DropdownButton><br/><br/>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
