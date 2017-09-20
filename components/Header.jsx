import React from "react";

class Header extends React.Component {

    render(){
     
        var headerStyle = {

            headerName: {
                display:'inline',
                position:'relative',
                top:'10px',
                left:'10px'
            },

            searchButton: {
                display:'inline',
                position:'absolute',
                right:'10px',
                top:'10px'
            }

        }
        
        return (

            <header id="header">
                <h3 style={headerStyle.headerName}>netflixroulette</h3>
                <button style={headerStyle.searchButton}>Search</button>
           </header>

        );

    }

}

export default Header;