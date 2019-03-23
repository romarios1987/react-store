import React, {Component} from 'react';
import {connect} from "react-redux";
import {setBooks} from "./actions/books";


class App extends Component {
  render() {

    const {books} = this.props.books;
    console.log(books);
    const {setBooks} = this.props;
    const newBooks = [{id: 0, title: 'Simple Book 222'}];

    return (
          <div>
            <h1>{books[0].title}</h1>
            <button onClick={setBooks.bind(this, newBooks)}>Set Books</button>
          </div>


    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => (
      {setBooks: (books) => dispatch(setBooks(books))}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
