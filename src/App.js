import React, {Component} from 'react';
import {connect} from "react-redux";
import {setBooks} from "./actions/books";
import axios from 'axios';
import {Container} from 'semantic-ui-react'
import MainMenu from "./components/MainMenu";


class App extends Component {


  componentWillMount() {
    const {setBooks} = this.props;
    axios.get('/books.json')
          .then(({data}) => {
            setBooks(data)
          })
  }


  render() {
    const {books, isReady} = this.props;

    return (
          <Container>
            <MainMenu/>
            <ul>
              {
                !isReady
                      ? 'Загрузка...'
                      : books.map((book) => (<li key={book.id}>{book.title}</li>)
                      )
              }
            </ul>
          </Container>
    );
  }
}


const mapStateToProps = ({books}) => {
  return {
    books: books.items,
    isReady: books.isReady
  }
};

const mapDispatchToProps = (dispatch) => (
      {setBooks: (books) => dispatch(setBooks(books))}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
