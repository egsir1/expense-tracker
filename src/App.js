import "./App.css";
import Balance from "./Balance";
import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
