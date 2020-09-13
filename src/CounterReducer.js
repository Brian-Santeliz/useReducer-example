import React,{useReducer} from 'react';

function CounterReducer() {
 
const acciones = {
  incrementar:'Incrementar',
  decrementar:'Decrementar',
  reset:'Reset'
}
  //funcion reducer, recibe el estado y acciones
  const reducer = (state,action)=>{
    //tipos de acciones
    switch (action.type){
      case acciones.incrementar:
        return {cuenta: state.cuenta + 1}
      case acciones.decrementar:
        return {cuenta: state.cuenta - 1}
      case acciones.reset:
        return {cuenta:0}
      default:
        return state;
    }
  }
  //retorna el estado y dispatch(función que llama a reducer)
 const [state, dispatch] = useReducer(reducer,{ cuenta:0  }) //por lo general el estado es un objeto

  return (
    <div>
        <button onClick={()=>dispatch({type: acciones.incrementar})}> Incrementar </button>
        <button onClick={()=>dispatch({type:acciones.decrementar})}> Decrementar </button>
        <button onClick={()=>dispatch({type: acciones.reset})}> Reset </button>
        <p>{state.cuenta}</p>
    </div>
  );
}

export default CounterReducer;
