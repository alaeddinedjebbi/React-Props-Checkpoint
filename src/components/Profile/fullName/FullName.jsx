import React from 'react'


function FullName(props) {
    
    
    return (
        <div>
         <h2>{`Bonjour à tous, je m'appelle :`} </h2>
         <h1>{props.name}</h1>  
         <br/>
         <img src="https://www.golden-artkom.com/wp-content/uploads/2020/06/35923493_1981354965510838_6144162394391183360_o-225x225.jpg" alt="ALAEDDINE DJEBBI" />
         
        </div>
    )
}

export default FullName
