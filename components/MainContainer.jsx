import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Movies from './Movies.jsx';
import Movie from './Movie.jsx'

class MainContainer extends React.Component {

    render() {

        return (
            <div>
                <Header></Header>
                <Search></Search>
                <Movies></Movies>
                
                <Footer></Footer>
            </div>
        );
        
    }

}

export default MainContainer;
