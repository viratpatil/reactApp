import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
//import Movies from './components/Movies.jsx';
import MainContainer from './components/MainContainer.jsx';
import styles from './css/style.css';
import {BrowserRouter, Route} from 'react-router-dom';

//ReactDOM.render(<Search />, document.getElementById('searchContainer'));
//ReactDOM.render(<Movies />, document.getElementById('searchResultContainer'));
// require('./css/style.css');

const About = () => <h1>Virat</h1> 

ReactDOM.render((
<BrowserRouter>
<div>
    <Route path="/" component={MainContainer}/>
    <Route path="/search" component={About}/>
</div>

</BrowserRouter>
),
document.getElementById('mainContainer')
);