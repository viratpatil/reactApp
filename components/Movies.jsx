import React from 'react';

class Movies extends React.Component {

    
    
    render() {
        var myStyle = {
            
                    centerText:{
                        position:'relative',
                        top:'200px',

                        textAlign : 'center',
                        
                    },

                    divStyle:{
                        minHeight:'400px',
                        background: '#ff0000',
                        
                    }
                }
    
        return (
            
               <div style={myStyle.divStyle}>
                <h2 style={myStyle.centerText}>No films found</h2>
               </div>
            
            
         );
    }

}

export default Movies;