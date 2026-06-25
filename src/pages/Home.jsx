import { Link } from "react-router";
import { getAllBudgets, formatCurrency } from "../utils/helpers";
import BudgetCard from "../components/BudgetCard";

export default function Home() {
  const budgets = getAllBudgets();
  const totalBudget = budgets.reduce((sum, budget) => sum + budget.max, 0);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Your Budget App</h1>
        <p>Manage your finances with ease. Create budgets and track your expenses.</p>
      </div>

      {budgets.length === 0 ? (
        <div className="empty-state">
          <h2>No budgets yet!</h2>
          <p>Create your first budget to get started.</p>
          <Link to="/add-budget" className="btn-primary">
            + Create Budget
          </Link>
        </div>
      ) : (
        <div className="home-content">
          <div className="stats-section">
            <div className="stat-card">
              <h3>Total Budget</h3>
              <p className="stat-value">{formatCurrency(totalBudget)}</p>
            </div>
            <div className="stat-card">
              <h3>Active Budgets</h3>
              <p className="stat-value">{budgets.length}</p>
            </div>
          </div>

          <div className="budgets-section">
            <div className="section-header">
              <h2>Your Budgets</h2>
              <Link to="/add-budget" className="btn-secondary">
                + Add Budget
              </Link>
            </div>
            <div className="budgets-grid">
              {budgets.map((budget) => (
                <BudgetCard key={budget.id} budget={budget} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
