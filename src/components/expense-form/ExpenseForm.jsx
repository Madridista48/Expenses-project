import FormInput from "../UI/form-input/FormInput.jsx";
import Button from "../UI/button/Button.jsx";
import PropTypes from "prop-types";
import css from './ExpenseForm.module.css'

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
        <form className={css.form}>
            <div className={css.formContainer}>
                <FormInput
                    inputType={'text'}
                    label={'Заголовок'}
                    placeholder={'Напишите название расхода'}
                    id={'f1'}
                />
                <FormInput
                    inputType={'number'}
                    label={'Цена'}
                    placeholder={'Введите сколько вы потратили'}
                    id={'f2'}
                />
                <FormInput
                    inputType={'date'}
                    label={'Дата'}
                    placeholder={'MM.DD.YY'}
                    id={'f3'}
                />
            </div>

            <Button text={'Добавить'} onClick={submitHandler}/>
            <Button text={'Отменить'} onClick={cancelHandler}/>
        </form>
    );
};

export default ExpenseForm;

ExpenseForm.propTypes = {
    onShowForm: PropTypes.func.isRequired
}