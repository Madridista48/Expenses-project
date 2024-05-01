import {useState} from "react";
import Button from "../UI/button/Button.jsx";
import ExpenseForm from "../expense-form/ExpenseForm.jsx";

const NewExpense = () => {
    console.log('work')
    const [showForm, setShowForm] = useState(false)

    function showFormHandler() {
        setShowForm(prevState => !prevState)
    }
    return (
        <div>
            {showForm?( <ExpenseForm onShowForm={showFormHandler}/>): (<Button text={'Добавить новый расход'} onClick={showFormHandler}/>)}
        </div>
    );
};

export default NewExpense;