import React, { useState } from 'react';
import Todo from './Todo'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  let myTodos = []
  let [todos, setTodos] = useState(myTodos); //Hook du tableau myTodos

  let [value, setValue] = useState(''); // Hook permettant de recupere la valeur du champ text
  let [id, setId] = useState(1); // Hook permettant de générer l'id du todo

  function handleSubmit(e){ // Fonction qui recupere les donne lors du submit
    if (value){
      e.preventDefault();
      setId(id + 1)
      addTodo(value)
    }else{
      
    }
  }

  function addTodo(text){
    let obj = {identifiant: id, label:text, creationDate:new Date(), complete:false}
    const newTodos = [...todos, obj] // Ajout de l'obj dans le tableau
    setTodos(newTodos) // Appel du hook
    setValue('') // Réinitialise le champ
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>Ma ToDo Liste</h1>
      </div>

      <div className='container'>
        <ul>{
          todos.map((todo, index)=> {
            function removeTodo(ID) {
              const newList = todos.filter((todo) => todo.identifiant !== ID);
              setTodos(newList);
            }
            return(<li key={index}>
                    <div>
                      <Todo identifiant={todo.identifiant} label={todo.label} creationDate={todo.creationDate} complete={todo.complete}/>
                       <button type='submit' onClick={() => removeTodo(todo.identifiant)} style={{color:'red', backgroundColor:'darkred'}}>Supprimer</button>
                    </div>
                  </li>
            );})
          }
        </ul>
      </div>

      <div className='container' style={{margin:"0 auto"}}>
        <form onSubmit={handleSubmit}>
          <input type='text' value={value} onChange={e => setValue(e.target.value)} placeholder="Entrer la task"/>
          <button type='submit'>Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default App;
