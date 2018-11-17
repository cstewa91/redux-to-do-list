import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListData } from '../actions';
import NavButton from './nav_button';

class List extends Component {
   componentDidMount() {
      this.props.getListData();
   }
   render() {
      const listElements = this.props.todos.map(item => {
         return <li key={item._id} className="collection-item">{item.title}</li>
      })
      return (
         <div>
            <h1 className="center">To Do List</h1>
            <p className="center grey-text">now with Redux</p>
            <NavButton to="/add-item" text="Add Item" />
            <ul className="collection">
               {listElements}
            </ul>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      todos: state.list.all
   }
}

export default connect(mapStateToProps, {
   getListData: getListData
})(List);