import FormInput from "../UI/form-input/FormInput.jsx";
import Button from "../UI/button/Button.jsx";
import PropTypes from "prop-types";

const ExpenseForm = ({onShowForm}) => {


    function submitHandler(e) {
        e.preventDefault()
        alert('submit')
    }

    function cancelHandler(e) {
        e.preventDefault()
        onShowForm()
    }
    return (
        <form>
            <FormInput
                inputType={'text'}
                label={'Заголовок'}
                placeholder={'Напишите расход'}
                id={'f1'}
            />
            <FormInput
                inputType={'number'}
                label={'Цена'}
                placeholder={'Напишите цену'}
                id={'f2'}
            />
            <FormInput
                inputType={'date'}
                label={'Дата'}
                placeholder={'MM.DD.YY'}
                id={'f3'}
            />
            <Button text={'Добавить'} onClick={submitHandler}/>
            <Button text={'Отменить'} onClick={cancelHandler}/>
        </form>
    );
};

export default ExpenseForm;

ExpenseForm.propTypes = {
    onShowForm: PropTypes.func.isRequired
}