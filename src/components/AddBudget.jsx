import { useNavigate } from "react-router";
import { createBudget } from "../utils/helpers";
import Form from "./Form";

export default function AddBudget() {
  const navigate = useNavigate();

  const handleAddBudget = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("newBudget");
    const max = formData.get("newBudgetAmount");

    if (name && max) {
      createBudget({ name, max: parseFloat(max) });
      navigate("/");
    }
  };

  return (
    <div className="form-page">
      <h1>Add New Budget</h1>
      <Form onSubmit={handleAddBudget} btnText="Add Budget">
        <input
          type="text"
          required
          placeholder="Budget name"
          name="newBudget"
          autoComplete="off"
        />
        <input
          type="number"
          required
          placeholder="Budget amount"
          step="0.01"
          inputMode="decimal"
          name="newBudgetAmount"
        />
      </Form>
    </div>
  );
}
