import { Link } from "react-router";
import {
  getAllExpenses,
  getAllBudgets,
  formatCurrency,
  formatDate,
} from "../utils/helpers";
import { useState } from "react";

export default function Expenses() {
  const expenses = getAllExpenses().sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const budgets = getAllBudgets();
  const [selectedBudget, setSelectedBudget] = useState("");

  const getBudgetName = (budgetId) => {
    const budget = budgets.find((b) => b.id === budgetId);
    return budget?.name || "Unknown Budget";
  };

  const filteredExpenses =
    selectedBudget === ""
      ? expenses
      : expenses.filter((exp) => exp.budgetId === selectedBudget);

  const totalExpenses = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="page">
      <div className="page-header">
        <h1>All Expenses</h1>
        <Link to="/" className="btn-primary">
          ← Back to Home
        </Link>
      </div>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <h2>No expenses recorded yet</h2>
          <p>Start by adding a budget and then adding expenses to it.</p>
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      ) : (
        <>
          <div className="expenses-filters">
            <div className="filter-section">
              <label htmlFor="budget-filter">Filter by Budget:</label>
              <select
                id="budget-filter"
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="filter-select"
              >
                <option value="">All Budgets</option>
                {budgets.map((budget) => (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-info">
              <span className="total-label">Total Expenses:</span>
              <span className="total-amount">{formatCurrency(totalExpenses)}</span>
            </div>
          </div>

          {filteredExpenses.length === 0 ? (
            <div className="empty-state">
              <p>No expenses for the selected budget.</p>
            </div>
          ) : (
            <div className="expenses-table">
              <div className="table-header">
                <div className="col-budget">Budget</div>
                <div className="col-description">Description</div>
                <div className="col-amount">Amount</div>
                <div className="col-date">Date</div>
              </div>
              {filteredExpenses.map((expense) => (
                <div key={expense.id} className="table-row">
                  <div className="col-budget">
                    <Link to={`/budgets/${expense.budgetId}`}>
                      {getBudgetName(expense.budgetId)}
                    </Link>
                  </div>
                  <div className="col-description">{expense.description}</div>
                  <div className="col-amount">
                    {formatCurrency(expense.amount)}
                  </div>
                  <div className="col-date">{formatDate(expense.createdAt)}</div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
