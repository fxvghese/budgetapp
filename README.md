# 💰 Budget App - React + Vite

A responsive React.js application for budget management that helps you keep track of your financial expenditures. Built with React Router for seamless navigation and localStorage for persistent data storage.

## 🎯 Features

- ✨ **Create Budgets** - Set up multiple budgets with spending limits
- 💵 **Track Expenses** - Add expenses to budgets and monitor spending
- 📊 **Progress Visualization** - View budget progress with interactive progress bars
- 🔍 **Expense Filtering** - Filter expenses by budget across all categories
- 💾 **Persistent Storage** - All data is saved in browser's localStorage
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 🗑️ **Delete Functions** - Remove budgets and expenses with confirmation dialogs

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd budgetapp
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5174/`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── AddBudget.jsx          # Budget creation form
│   ├── AddExpense.jsx         # Expense creation form
│   ├── BudgetCard.jsx         # Budget card component
│   ├── BudgetItem.jsx         # Expense item component
│   ├── Form.jsx               # Reusable form component
│   ├── Navigation.jsx         # Navigation bar
│   └── Navigation.css         # Navigation styles
├── pages/
│   ├── Home.jsx               # Home page with budget overview
│   ├── Budgets.jsx            # All budgets page
│   ├── BudgetDetail.jsx       # Individual budget detail page
│   ├── Expenses.jsx           # All expenses page
│   └── ErrorPage.jsx          # Error page for 404s
├── utils/
│   └── helpers.js             # Utility functions and localStorage helpers
├── App.jsx                    # Main App component with routing
├── App.css                    # Application styles
├── index.css                  # Global styles
└── main.jsx                   # React DOM entry point
```

## 🎨 Key Components

### Navigation
- Persistent navigation bar across all pages
- Active page highlighting
- Quick links to all major sections

### Budget Management
- Create budgets with custom names and spending limits
- Visual progress bars showing budget utilization
- Budget cards displaying spent amount vs. limit
- Color coding for over-budget alerts

### Expense Tracking
- Add expenses to specific budgets
- View detailed expense list with dates
- Filter expenses by budget
- Delete individual expenses

### Responsive Layout
- Mobile-first design approach
- Adaptive grid layouts
- Touch-friendly buttons and interactions
- Optimized for all screen sizes

## 💾 Data Storage

All data is stored in the browser's localStorage with the following structure:

**Budgets:**
```javascript
{
  id: "unique_id",
  name: "Budget Name",
  max: 1000,
  createdAt: "2026-06-25T12:00:00.000Z"
}
```

**Expenses:**
```javascript
{
  id: "unique_id",
  budgetId: "budget_id",
  description: "Expense Description",
  amount: 50.25,
  createdAt: "2026-06-25T12:00:00.000Z"
}
```

## 🗺️ Routing

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Dashboard with budget overview |
| `/budgets` | All Budgets | List of all budgets |
| `/budgets/:id` | Budget Detail | Individual budget with expenses |
| `/budgets/:id/add-expense` | Add Expense | Form to add expense to budget |
| `/add-budget` | Add Budget | Form to create new budget |
| `/expenses` | All Expenses | View all expenses across budgets |

## 🎯 Usage Guide

### Creating a Budget
1. Click on **"+ Create Budget"** button
2. Enter the budget name (e.g., "Groceries", "Entertainment")
3. Enter the budget limit amount
4. Click **"Add Budget"**

### Adding an Expense
1. Click **"+ Add Expense"** on any budget card or from budget detail page
2. Enter expense description (e.g., "Milk", "Movie tickets")
3. Enter the expense amount
4. Click **"Add Expense"**

### Viewing Budget Details
1. Click on a budget card or budget name
2. See total spent vs. budget limit
3. View all expenses for that budget
4. Add more expenses or delete existing ones

### Filtering Expenses
1. Go to **"All Expenses"** page
2. Use the dropdown to filter by budget
3. View filtered expenses and total

### Deleting Data
- Click the **×** button on budget cards to delete budgets (also deletes all related expenses)
- Click the **×** button on expense items to delete individual expenses
- Confirmation dialog will appear before deletion

## 🎨 Design Features

### Color Scheme
- Primary: #667eea (Indigo)
- Secondary: #764ba2 (Purple)
- Danger: #e74c3c (Red)
- Success: #27ae60 (Green)

### Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

### Animations & Transitions
- Smooth card hover effects
- Fade-in animations for content
- Progress bar transitions
- Button press animations

## 🛠️ Technologies Used

- **React 19** - UI framework
- **React Router 8** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **localStorage** - Client-side data persistence

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Performance Optimizations

- Minified CSS and JavaScript
- Optimized asset loading
- Efficient re-renders with React
- localStorage for fast data access
- Responsive image handling

## 🐛 Known Limitations

- Data is stored locally in the browser (not synced across devices)
- No user authentication system
- No data export functionality
- Limited to browser storage capacity

## 🔮 Future Enhancements

- User authentication and multi-device sync
- Data export (CSV, JSON, PDF)
- Budget categories and subcategories
- Recurring expenses
- Monthly/yearly reports and analytics
- Budget notifications and alerts
- Dark mode theme
- Multi-currency support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## 📞 Support

For issues or questions, please open an issue in the repository or contact the development team.

---

**Happy budgeting! 💰**
