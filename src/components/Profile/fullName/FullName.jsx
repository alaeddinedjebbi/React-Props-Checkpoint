import React from 'react'
import './Fullname.css'


function FullName(props) {
    
    const handleName = name => alert(name)   
    return (
        <div className="FullName">
        <button
            onClick={() => handleName (`The Name Of The User Is : ${props.name}`)}
            variant="dark"
        >
            Check Name User
        </button>
        <h2>{`Bonjour à tous, je m'appelle :`} </h2>
        <h1>{props.name}</h1>
        <img src="https://www.golden-artkom.com/wp-content/uploads/2020/06/35923493_1981354965510838_6144162394391183360_o-225x225.jpg" alt="ALAEDDINE DJEBBI" />
         
        </div>
    )
}

export default FullName
