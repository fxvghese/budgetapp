import { useNavigate, useParams } from "react-router";
import { addExpense, getBudgetById } from "../utils/helpers";
import Form from "./Form";

export default function AddExpense() {
  const navigate = useNavigate();
  const { id } = useParams();
  const budget = getBudgetById(id);

  if (!budget) {
    return <div>Budget not found</div>;
  }

  const handleAddExpense = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const description = formData.get("newExpense");
    const amount = formData.get("newExpenseAmount");

    if (description && amount) {
      addExpense({
        budgetId: id,
        description,
        amount: parseFloat(amount),
      });
      navigate(`/budgets/${id}`);
    }
  };

  return (
    <div className="form-page">
      <h1>Add Expense to "{budget.name}"</h1>
      <Form onSubmit={handleAddExpense} btnText="Add Expense">
        <input
          type="text"
          required
          placeholder="Expense description"
          name="newExpense"
          autoComplete="off"
        />
        <input
          type="number"
          required
          placeholder="Expense amount"
          step="0.01"
          inputMode="decimal"
          name="newExpenseAmount"
        />
      </Form>
    </div>
  );
}
