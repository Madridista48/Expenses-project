import Button from "../UI/button/Button.jsx";
import ExpenseForm from "../expense-form/ExpenseForm.jsx";

const NewExpense = () => {
    return (
        <div>
            <Button text={'Добавить новый расход'}/>
            <ExpenseForm/>
        </div>
    );
};

export default NewExpense;