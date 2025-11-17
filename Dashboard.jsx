import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("authToken");

  // If not logged in → redirect
  useEffect(() => {
    if (!isLoggedIn) navigate("/signin");
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("loggedInEmail");
    navigate("/signin");
  };

  const handleBudget = () => {
    if (!budget || budget < 0) {
      alert("Enter a valid budget!");
      return;
    }
  };

  const addExpense = () => {
    if (!desc || !amount || amount < 0) {
      alert("Enter valid expense!");
      return;
    }

    const newExpense = { id: list.length + 1, desc, amount: Number(amount) };
    setList([...list, newExpense]);
    setExpenses(expenses + Number(amount));
    setDesc("");
    setAmount("");
  };

  const deleteExpense = (id, amt) => {
    setList(list.filter((item) => item.id !== id));
    setExpenses(expenses - amt);
  };

  const balance = budget - expenses;

  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 min-h-screen flex flex-col font-sans">

      {/* Navbar */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 shadow flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <h1 className="text-2xl font-bold">💸 Expense Tracker</h1>

        <nav>
          <ul className="flex gap-6 text-white font-medium">
            <li>
              <Link
                to="/"
                className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Dashboard
              </Link>
            </li>

            {/* If not logged in → show Sign In */}
            {!isLoggedIn && (
              <li>
                <Link
                  to="/signin"
                  className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
                >
                  Sign In
                </Link>
              </li>
            )}

            {/* Logged in → show Logout */}
            {isLoggedIn && (
              <li>
                <button
                  onClick={handleLogout}
                  className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>

      {/* Main Wrapper */}
      <div className="w-full flex justify-center p-6 md:p-12 mt-24">
        <div className="bg-white shadow rounded-2xl p-8 w-full max-w-6xl border border-gray-200/50">

          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Track Your Expenses
          </h2>

          {/* Input Section */}
          <section className="flex flex-wrap gap-4 justify-center mb-12">
            <input
              type="number"
              placeholder="Enter Your Budget"
              value={budget || ""}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="border px-4 py-2 rounded shadow-md"
            />

            <button
              onClick={handleBudget}
              className="bg-blue-600 text-white px-5 py-2 rounded font-semibold shadow hover:scale-105 transition"
            >
              Calculate
            </button>

            <input
              type="text"
              placeholder="Expense Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border px-4 py-2 rounded shadow-md"
            />

            <input
              type="number"
              placeholder="Expense Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border px-4 py-2 rounded shadow-md"
            />

            <button
              onClick={addExpense}
              className="bg-blue-600 text-white px-5 py-2 rounded font-semibold shadow hover:scale-105 transition"
            >
              Add
            </button>
          </section>

          {/* Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center bg-blue-100 p-4 rounded-xl shadow hover:scale-105 transition">
              <div className="text-3xl mr-3">💰</div>
              <div>
                <p className="text-gray-600">Budget</p>
                <p className="text-xl font-bold text-gray-800">₹{budget}</p>
              </div>
            </div>

            <div className="flex items-center bg-yellow-100 p-4 rounded-xl shadow hover:scale-105 transition">
              <div className="text-3xl mr-3">💳</div>
              <div>
                <p className="text-gray-600">Expenses</p>
                <p className="text-xl font-bold text-gray-800">₹{expenses}</p>
              </div>
            </div>

            <div className="flex items-center bg-green-100 p-4 rounded-xl shadow hover:scale-105 transition">
              <div className="text-3xl mr-3">💵</div>
              <div>
                <p className="text-gray-600">Balance</p>
                <p className="text-xl font-bold text-gray-800">₹{balance}</p>
              </div>
            </div>
          </section>

          {/* Table */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Budget Details
            </h2>

            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="w-full border border-gray-200 text-left bg-white rounded-xl">
                <thead className="bg-gradient-to-r from-blue-200 to-purple-200">
                  <tr className="text-gray-700">
                    <th className="px-4 py-3 border">#</th>
                    <th className="px-4 py-3 border">Detail</th>
                    <th className="px-4 py-3 border">Amount</th>
                    <th className="px-4 py-3 border">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {list.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-3 border">{item.id}</td>
                      <td className="px-4 py-3 border">{item.desc}</td>
                      <td className="px-4 py-3 border">₹{item.amount}</td>
                      <td
                        className="px-4 py-3 border text-center text-red-600 cursor-pointer hover:text-red-800"
                        onClick={() => deleteExpense(item.id, item.amount)}
                      >
                        🗑️
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
