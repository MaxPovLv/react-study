import {useReducer} from "react";

const init = (initCounter) => {
    return {
        counter1: initCounter,
        counter2: initCounter,
        counter3: initCounter
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, counter1: state.counter1 + 1}
        case 'dec':
            return {...state, counter1: state.counter1 - 1}
        case 'reset':
            return {...state, counter1: 0}
    }switch (action.type) {
        case 'inc1':
            return {...state, counter2: state.counter2 + 1}
        case 'dec1':
            return {...state, counter2: state.counter2 - 1}
        case 'reset1':
            return {...state, counter2: 0}
    }switch (action.type) {
        case 'inc2':
            return {...state, counter3: state.counter3 + 1}
        case 'dec2':
            return {...state, counter3: state.counter3 - 1}
        case 'reset2':
            return {...state, counter3: 0}
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            <div>
                {state.counter1}
                <button onClick={() => dispatch({type:'inc'})}>inc</button>
                <button onClick={() => dispatch({type:'dec'})}>dec</button>
                <button onClick={() => dispatch({type:'reset'})}>reset</button>
            </div>
            <div>
                {state.counter2}
                <button onClick={() => dispatch({type:'inc1'})}>inc</button>
                <button onClick={() => dispatch({type:'dec1'})}>dec</button>
                <button onClick={() => dispatch({type:'reset1'})}>reset</button>
            </div>
            <div>
                {state.counter3}
                <button onClick={() => dispatch({type:'inc2'})}>inc</button>
                <button onClick={() => dispatch({type:'dec2'})}>dec</button>
                <button onClick={() => dispatch({type:'reset2'})}>reset</button>
            </div>
        </div>
    );
}

export default App;
