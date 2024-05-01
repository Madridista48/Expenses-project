import PropTypes from "prop-types";
import css from './ExpenseItem.module.css'

const ExpenseItem = ({date, title, price, id}) => {
    return (
        <div key={id} className={css.expenseItemContainer}>
            <div className={css.expenseItemDate}>{date.toISOString()}</div>
            <div className={css.expenseItemTitle}>{title}</div>
            <div className={css.expenseItemPrice}>{price}</div>
        </div>
    );
};

export default ExpenseItem;

ExpenseItem.propTypes = {
    date: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
}