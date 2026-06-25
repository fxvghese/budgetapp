import { deleteExpense, formatCurrency, formatDate } from "../utils/helpers";

export default function BudgetItem({ expense }) {
  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete "${expense.description}"?`
      )
    ) {
      deleteExpense(expense.id);
    }
  };

  return (
    <div className="budget-item">
      <div className="item-info">
        <p className="item-description">{expense.description}</p>
        <p className="item-date">{formatDate(expense.createdAt)}</p>
      </div>
      <div className="item-actions">
        <span className="item-amount">{formatCurrency(expense.amount)}</span>
        <button className="btn-delete-item" onClick={handleDelete} title="Delete expense">
          ×
        </button>
      </div>
    </div>
  );
}
