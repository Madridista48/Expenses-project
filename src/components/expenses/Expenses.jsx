import PropTypes from "prop-types";
import ExpenseItem from "../expense-item/ExpenseItem.jsx";
import css from './Expenses.module.css'


const Expenses = ({ data }) => {
    return (
        <ul className={css.ul}>
            {data.map(({date,id,title,price})=>(
                <ExpenseItem
                    key={id}
                    price={price}
                    title={title}
                    date={date}
                    id={id}
                />
            ))}
        </ul>
    );
};

export default Expenses;

Expenses.propTypes = {
    data: PropTypes.array.isRequired
}
// ExpenseItem.propTypes = {
//     data: PropTypes.array.isRequired
// }

