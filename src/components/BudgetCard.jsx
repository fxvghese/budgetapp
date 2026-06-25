import { Link } from "react-router";
import { deleteBudget, calculateSpentAmount, formatCurrency } from "../utils/helpers";

export default function BudgetCard({ budget }) {
  const spent = calculateSpentAmount(budget.id);
  const isOverBudget = spent > budget.max;
  const percentSpent = (spent / budget.max) * 100;

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${budget.name}"?`)) {
      deleteBudget(budget.id);
    }
  };

  return (
    <div className="budget-card">
      <div className="card-header">
        <Link to={`/budgets/${budget.id}`}>
          <h2>{budget.name}</h2>
        </Link>
        <button className="btn-delete" onClick={handleDelete} title="Delete budget">
          ×
        </button>
      </div>

      <div className="budget-info">
        <div className="amount">
          <span className={isOverBudget ? "over-budget" : ""}>
            {formatCurrency(spent)}
          </span>
          <span> / {formatCurrency(budget.max)}</span>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className={`progress ${isOverBudget ? "over-budget" : ""}`}
          style={{ width: `${Math.min(percentSpent, 100)}%` }}
        ></div>
      </div>

      <Link to={`/budgets/${budget.id}/add-expense`} className="btn-add-expense">
        + Add Expense
      </Link>
    </div>
  );
}
