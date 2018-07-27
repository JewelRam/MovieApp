import React, {Component} from "react"
import {FormControl, FormGroup, Button} from "react-bootstrap"

export default class SearchForm extends Component {

    state= {
        searchText: ""
    }

onSearchChange = e => {
    this.setState({searchText: e.target.value});

}
handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
}
render() {
    return (
        <FormGroup>
        <FormControl onSubmit= {this.handleSubmit} id="searchBar" type="text" placeholder="Search Movie" />
        <br></br>
        <Button type= "submit">Add Movie</Button>
        <SearchForm onSearch={this.performSearch}/>
      </FormGroup>
    )
}

}