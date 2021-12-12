import React, {useContext, useState, useEffect} from 'react';
import {Context} from '../context/Contex';

export default function Display() {

    const {form: {bill, tip, numPeople}, initialState, setForm} = useContext(Context);

    const [tipPerson, setTipPerson] = useState(0);
    const [totalAmout, setTotalAmout] = useState(0);

    useEffect(() => {

        if(tip && bill && numPeople){
            let tipPerPerson;
            let total; 
            let ntip =  parseInt(tip);
            let nbill =  parseInt(bill);
            let nnumPeople =  parseInt(numPeople);

            const tipAmountPerson = () =>{
                tipPerPerson = ((ntip*nbill/100)/nnumPeople);
                return setTipPerson(tipPerPerson); 
            }

            const totalAmount = () =>{
                total =  tipPerPerson*nnumPeople + nbill; 
                return setTotalAmout(total); 
            }

            tipAmountPerson();
            totalAmount();
        }

    }, [bill, tip, numPeople]);

    const handleReset = () => {
        setTipPerson(0);
        setTotalAmout(0);
        setForm(initialState);
    }

    return (
        <>
            <div>
                <div className="display__row mb-2">
                    <div>
                        <h2 className="text__h2">Tip Amount</h2>
                        <p className="text__p">/ person</p>
                    </div>
                    <h2 className="text__amount">${tipPerson}</h2>
                </div>
                <div className="display__row">
                    <div>
                        <h2 className="text__h2">Total</h2>
                        <p className="text__p">/ person</p>
                    </div>
                    <h2 className="text__amount">${totalAmout}</h2>
                </div>
            </div>
            <button 
                className="btn btn-block btn-reset"
                onClick={handleReset}
                >RESET</button>
        </>
    )
}
