import React, { useState } from 'react';
import './../App.css';

function Todo(props) {
    let [complete, setComplete] = useState(props.complete)
    let styleTexte 
    
    function isComplete(){
        complete =! complete // La nouvelle valeur est l'opposé de l'ancienne
        setComplete(complete)
    }

    if (complete === true ){
        styleTexte = {
            color : "black",
            backgroundColor:"white",
            margin:"15px", 
            border:"solid green"
        }
    }else{
        styleTexte = {
            color : "white",
            backgroundColor:"grey",
            margin:"15px",
            border:"solid green"
        }
    }

    return (
        <div>
            <div onClick={() => isComplete()}>
                <p style={styleTexte}>
                    {/*{props.identifiant}{" "}*/}
                    {props.label}{" "}
                    {props.creationDate.toLocaleDateString("fr-FR")}
                </p>
            </div>
        </div>
    );
  }


  
  export default Todo;
  