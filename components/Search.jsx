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
             floatRight:{
                
                display:"inline"
             }
             ,
             whiteText: {
                 color: "#ffffff",
                 paddingLeft: '10px',
                 paddingTop: '1px',
                 
             },
            searchButton:{
                position:"absolute",  right:"10px"
            }
             
          }

          
    
          return (
             <div style ={myStyle.whiteText}>
                <h2>FIND YOUR MOVIE</h2>
                <input type="text" name="search"></input>
                <h3>SEARCH BY</h3>
                <div style = {myStyle.floatRight}>
                    <button type="button">Title</button>
                    <button type="button">Director</button>
                </div>
                <button style = {myStyle.searchButton}>Search</button>
             </div>
             
          );
       }
}

export default Search;