import React, {useContext} from 'react';
import { Context } from '../context/Contex';

export default function NumPeople() {

    const {handleForm, form: {numPeople}} = useContext(Context);

    return (
        <div>
            <h3 className="text__h3">Number of People</h3>
            <div className="form__input-group person">
                <input 
                    type="number" 
                    className="form__input-number" 
                    placeholder="0"
                    name="numPeople"
                    onChange={handleForm}
                    value={numPeople}
                />
            </div>
        </div>
    )
}
