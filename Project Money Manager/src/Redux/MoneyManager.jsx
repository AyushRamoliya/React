import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../feature/IncomeSlice';
import { addExpense } from '../feature/ExpenseSlice';

export default function MoneyManager() {
    const [income, setIncome] = useState("");
    const [expense, setExpense] = useState("");
    const [description, setDescription] = useState("");

    const incomeAmt = useSelector((state) => state.incomeKey.data1) || 0;
    const expense1 = useSelector((state) => state.expenseKey.expense1) || [];
    const dispatch = useDispatch();

    const handleAmount = () => {
        if (income) {
            dispatch(addIncome(income));
        }
    };

    const handleExpense = () => {        
            dispatch(addExpense({ expense, description }));        
    };

    return (
        <div>
            <h1 className='txt1'>Money Manager</h1>
            <div className='main1'>
            <div className="incomeAmount">
                <input 
                    type="number" 
                    placeholder="Enter Income" 
                    value={income} 
                    onChange={(e) => setIncome(e.target.value)} 
                />
                <button onClick={handleAmount}>Add Income</button>
                <p>Your Budget: {incomeAmt}</p>
            </div>

            <div className="expenseAmount">
                <input 
                    type="number" 
                    placeholder="Enter Amount" 
                    value={expense} 
                    onChange={(e) => setExpense(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Enter Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <button onClick={handleExpense}>Add Expense</button>
            </div>
            </div>

            <div className="expenseList">
                {
                    
                        expense1.map((e, i) => (
                            <div key={i}>
                                <p>Amount: {e.expense}</p>
                                <p>Description: {e.description}</p>
                            </div>
                        ))
                    
                }
            </div>
        </div>
    );
}
