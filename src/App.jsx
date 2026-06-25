import { Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Budgets from './pages/Budgets'
import BudgetDetail from './pages/BudgetDetail'
import Expenses from './pages/Expenses'
import AddBudget from './components/AddBudget'
import AddExpense from './components/AddExpense'
import ErrorPage from './pages/ErrorPage'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/budgets/:id" element={<BudgetDetail />} />
          <Route path="/budgets/:id/add-expense" element={<AddExpense />} />
          <Route path="/add-budget" element={<AddBudget />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
