import { Link } from "react-router";
import { getAllBudgets } from "../utils/helpers";
import BudgetCard from "../components/BudgetCard";

export default function Budgets() {
  const budgets = getAllBudgets();

  return (
    <div className="page">
      <div className="page-header">
        <h1>All Budgets</h1>
        <Link to="/add-budget" className="btn-primary">
          + Create New Budget
        </Link>
      </div>

      {budgets.length === 0 ? (
        <div className="empty-state">
          <h2>No budgets created yet</h2>
          <p>Start by creating a new budget to track your spending.</p>
          <Link to="/add-budget" className="btn-primary">
            Create Your First Budget
          </Link>
        </div>
      ) : (
        <div className="budgets-grid">
          {budgets.map((budget) => (
            <BudgetCard key={budget.id} budget={budget} />
          ))}
        </div>
      )}
    </div>
  );
}
