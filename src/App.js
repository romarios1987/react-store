import React, {Component} from 'react';
import {connect} from "react-redux";
import {setBooks} from "./actions/books";
import axios from 'axios';


class App extends Component {


  componentWillMount() {
    const {setBooks} = this.props;
    axios.get('/books.json')
          .then(({data}) => {
            setBooks(data)
          })
  }


  render() {
    const {books} = this.props;

    return (
          <ul>
            {
              !books
                    ? 'Загрузка...'
                    : books.map((book) => (<li key={book.id}>{book.title}</li>)
                    )
            }
          </ul>


    );
  }
}


const mapStateToProps = ({books}) => {
  return {books: books.items}
};

const mapDispatchToProps = (dispatch) => (
      {setBooks: (books) => dispatch(setBooks(books))}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
