import { useParams, Link } from "react-router";
import {
  getBudgetById,
  getExpensesByBudgetId,
  calculateSpentAmount,
  calculateRemainingAmount,
  formatCurrency,
} from "../utils/helpers";
import BudgetItem from "../components/BudgetItem";

export default function BudgetDetail() {
  const { id } = useParams();
  const budget = getBudgetById(id);
  const expenses = getExpensesByBudgetId(id);
  const spent = calculateSpentAmount(id);
  const remaining = calculateRemainingAmount(id);
  const isOverBudget = spent > budget?.max;

  if (!budget) {
    return (
      <div className="page">
        <div className="error-state">
          <h2>Budget not found</h2>
          <Link to="/" className="btn-primary">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="budget-detail-header">
        <Link to="/" className="btn-back">
          ← Back
        </Link>
        <h1>{budget.name}</h1>
      </div>

      <div className="budget-summary">
        <div className="summary-card">
          <h3>Budget Limit</h3>
          <p className="amount">{formatCurrency(budget.max)}</p>
        </div>
        <div className="summary-card">
          <h3>Total Spent</h3>
          <p className={`amount ${isOverBudget ? "over-budget" : ""}`}>
            {formatCurrency(spent)}
          </p>
        </div>
        <div className={`summary-card ${isOverBudget ? "over-budget-card" : ""}`}>
          <h3>Remaining</h3>
          <p className={`amount ${isOverBudget ? "over-budget" : ""}`}>
            {formatCurrency(remaining)}
          </p>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-bar-large">
          <div
            className={`progress ${isOverBudget ? "over-budget" : ""}`}
            style={{ width: `${Math.min((spent / budget.max) * 100, 100)}%` }}
          ></div>
        </div>
        <p className="progress-text">
          {isOverBudget
            ? `⚠️ Over budget by ${formatCurrency(spent - budget.max)}`
            : `${Math.round((spent / budget.max) * 100)}% of budget spent`}
        </p>
      </div>

      <div className="expenses-section">
        <div className="section-header">
          <h2>Expenses ({expenses.length})</h2>
          <Link to={`/budgets/${id}/add-expense`} className="btn-secondary">
            + Add Expense
          </Link>
        </div>

        {expenses.length === 0 ? (
          <div className="empty-state">
            <p>No expenses yet. Start adding expenses to track your spending.</p>
            <Link to={`/budgets/${id}/add-expense`} className="btn-primary">
              Add First Expense
            </Link>
          </div>
        ) : (
          <div className="expenses-list">
            {expenses
              .sort(
                (a, b) =>
                  new Date(b.createdAt) - new Date(a.createdAt)
              )
              .map((expense) => (
                <BudgetItem key={expense.id} expense={expense} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
