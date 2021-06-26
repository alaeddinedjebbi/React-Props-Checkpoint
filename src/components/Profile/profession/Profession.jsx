import React from 'react'

function Profession(props) {
    return (
        <div>
            <h2> Mission </h2>
            <p>Le développeur full-stack est amené à intervenir dès la phase {props.mision},
                où il va concevoir de nouvelles fonctionnalités et les spécifier.
                Il va ensuite participer activement à la phase d’implémentation de la solution (codage),
                ainsi qu’aux étapes de tests unitaires et fonctionnels.
            </p>
            
        </div>
    )
}

export default Profession
