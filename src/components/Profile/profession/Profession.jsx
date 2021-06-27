import React from 'react'
import './Profession.css'

function Profession(props) {
    return (
        <div className="Profession">
            <h2> Mission </h2>
            <p>Le développeur full-stack est amené à intervenir dès la phase {props.mission},
                où il va concevoir de nouvelles fonctionnalités et les spécifier.
                Il va ensuite participer activement à la phase d’implémentation de la solution (codage),
                ainsi qu’aux étapes de tests unitaires et fonctionnels.
            </p>
            
        </div>
    )
}

export default Profession
