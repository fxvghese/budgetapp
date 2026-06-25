// Local storage keys
const BUDGETS_KEY = "budgets";
const EXPENSES_KEY = "expenses";

// Generate unique ID
export const generateId = () => Math.random().toString(36).substr(2, 9);

// Budgets
export const getAllBudgets = () => {
  const budgets = localStorage.getItem(BUDGETS_KEY);
  return budgets ? JSON.parse(budgets) : [];
};

export const createBudget = ({ name, max }) => {
  const id = generateId();
  const newBudget = { id, name, max, createdAt: new Date().toISOString() };
  const budgets = getAllBudgets();
  localStorage.setItem(BUDGETS_KEY, JSON.stringify([...budgets, newBudget]));
  return newBudget;
};

export const getBudgetById = (id) => {
  const budgets = getAllBudgets();
  return budgets.find((budget) => budget.id === id);
};

export const deleteBudget = (id) => {
  const budgets = getAllBudgets();
  const updatedBudgets = budgets.filter((budget) => budget.id !== id);
  localStorage.setItem(BUDGETS_KEY, JSON.stringify(updatedBudgets));
  
  // Delete all expenses for this budget
  const expenses = getAllExpenses();
  const updatedExpenses = expenses.filter((expense) => expense.budgetId !== id);
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(updatedExpenses));
};

// Expenses
export const getAllExpenses = () => {
  const expenses = localStorage.getItem(EXPENSES_KEY);
  return expenses ? JSON.parse(expenses) : [];
};

export const addExpense = ({ budgetId, description, amount }) => {
  const id = generateId();
  const newExpense = {
    id,
    budgetId,
    description,
    amount: parseFloat(amount),
    createdAt: new Date().toISOString(),
  };
  const expenses = getAllExpenses();
  localStorage.setItem(EXPENSES_KEY, JSON.stringify([...expenses, newExpense]));
  return newExpense;
};

export const getExpensesByBudgetId = (budgetId) => {
  const expenses = getAllExpenses();
  return expenses.filter((expense) => expense.budgetId === budgetId);
};

export const deleteExpense = (id) => {
  const expenses = getAllExpenses();
  const updatedExpenses = expenses.filter((expense) => expense.id !== id);
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(updatedExpenses));
};

// Calculate totals
export const calculateSpentAmount = (budgetId) => {
  const expenses = getExpensesByBudgetId(budgetId);
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const calculateRemainingAmount = (budgetId) => {
  const budget = getBudgetById(budgetId);
  if (!budget) return 0;
  const spent = calculateSpentAmount(budgetId);
  return budget.max - spent;
};

// Format currency
export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

// Format date
export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
