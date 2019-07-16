import React from 'react';
import {Media } from 'reactstrap';


function Leader({leader}){
    return(
        <Media className="m-3">
            <Media left href="#" className="mr-5 pt-1">
                <Media object src={leader.image} className="rounde-circle" width="100" height="100" alt={leader.name} />
            </Media>
            
            <Media body>
                <Media heading>{leader.name}</Media>
                <div  width="100" className="my-1"><span>{leader.designation}</span></div>
                {leader.description}
            </Media>
        </Media>
    );
}

export default Leader;