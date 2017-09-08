import React from 'react';

class Search extends React.Component {
//    render() {
    
//     var myStyle = {
//         color: 0xff0000

//      }

//     return (
//          <div>
//             <h2>FIND YOUR MOVIE</h2>
//             <input type="text" name="search"></input>
//             <h3 style = {myStyle}>SEARCH BY</h3>
//             <div>
//                 <button type="button">Title</button>
//                 <button type="button">Director</button>
//             </div>
//          </div>
//       );
//    }

render() {
    
          var myStyle = {
             
             float: 'right'
          }
    
          return (
             <div>
                <h2>FIND YOUR MOVIE</h2>
                <input type="text" name="search"></input>
                <h3>SEARCH BY</h3>
                <div style = {myStyle}>
                    <button type="button">Title</button>
                    <button type="button">Director</button>
                </div>
             </div>
             
          );
       }
}

export default Search;