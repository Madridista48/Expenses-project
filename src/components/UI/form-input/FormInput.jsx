import PropTypes from "prop-types";
import css from './FormInput.module.css'

const FormInput = ({label, inputType, placeholder, id}) => {
    return (
        <div>
            <label htmlFor={id} className={css.formLabel}>{label}</label>
            <input id={id} type={inputType} className={css.formInput} placeholder={placeholder || '...'}/>
        </div>
    );
};

export default FormInput;

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}