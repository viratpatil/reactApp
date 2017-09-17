import React from 'react';

class Movie extends React.Component {

    render (){

        var movieStyle = {
            imageStyle : {
                height: "200px",
                width: "150px",
                background: 'red'
            },

            textContainerStyle : {
                width: "150px",
                backgroundColor: "green",
            }

        }

        return (
            <div>
                <div id="imageContainer" style={movieStyle.imageStyle}></div>
                <div style={movieStyle.textContainerStyle}>
                    <span id="movieName">KILL BILL</span>
                    <span id="date">2004</span>
                </div>
                <p id="category">Test</p>
            </div>
        );
       
    }
}

export default Movie;