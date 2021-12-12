import React, {useContext} from 'react';
import { Context } from '../context/Contex';

export default function Bill() {

    const {handleForm, form: {bill}}  = useContext(Context);

    return (
        <div className="mb-4">
            <h3 className="text__h3">Bill</h3>
            <div className="form__input-group dolar">
                <input 
                    type="number" 
                    className="form__input-number" 
                    placeholder="0"
                    name="bill"
                    onChange={handleForm}
                    value={bill}
                />
            </div>
        </div>
    )
}
