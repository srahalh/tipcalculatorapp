import React, {useContext} from 'react';
import { Context } from '../context/Contex';

export default function Buttons() {
    

    const {handleForm, form: {tip}} = useContext(Context);
    

    function toogleActiveStyle(value){
        let ntip = parseInt(tip)
        if (value === ntip){
            return "btn btn-block btn-secondary btn-active"
        }else{
            return "btn btn-block btn-secondary"
        }
    }
    
    return (
        <div className="mb-4">
            <h3 className="text__h3 mb-0">Select Tip %</h3>
            <div className="form__button-group">
                <button 
                    className={toogleActiveStyle(5)}
                    name="tip"
                    value="5"
                    onClick={handleForm}
                    >5%</button>
                <button 
                    className={toogleActiveStyle(10)}
                    name="tip"
                    value="10"
                    onClick={handleForm}
                    >10%</button>
                <button 
                    className={toogleActiveStyle(15)}
                    name="tip"
                    value="15"
                    onClick={handleForm}
                    >15%</button>
                <button 
                    className={toogleActiveStyle(25)}
                    name="tip"
                    value="25"
                    onClick={handleForm}
                    >25%</button>
                <button 
                    className={toogleActiveStyle(50)}
                    name="tip"
                    value="50"
                    onClick={handleForm}
                    >50%</button>
                <input 
                    className="btn btn-block btn-light"
                    name="tip"
                    type="number"
                    placeholder="Custom"
                    value={tip}
                    onChange={handleForm}
                    />
            </div>          
        </div>
    )
}
