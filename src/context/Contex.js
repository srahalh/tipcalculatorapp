import React, {createContext, useState} from 'react';

export const Context = createContext();

const ContextProvider = (props) => {

    const initialState =  {
        bill: '',
        tip: '',
        numPeople: ''
    }

    const [form, setForm] = useState(initialState); 
    

    //Manage change on the form
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <Context.Provider
        value={{
            form,
            initialState,
            setForm,
            handleForm
        }}
        >
            {props.children}
        </Context.Provider>
     );
}
 
export default ContextProvider;