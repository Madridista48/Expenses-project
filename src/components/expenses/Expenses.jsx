import PropTypes from "prop-types";
import ExpenseItem from "../expense-item/ExpenseItem.jsx";


const Expenses = ({ data }) => {
    return (
        <ul>
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

