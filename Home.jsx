import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    const isLoggedIn = localStorage.getItem("authToken");
    if (isLoggedIn) navigate("/dashboard");
    else navigate("/signin");
  };

  return (
    <div className="bg-gradient-to-tr from-purple-100 via-indigo-200 to-pink-100 flex flex-col justify-between font-sans">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-20 min-h-screen">
        <h2 className="text-6xl font-extrabold text-gray-900">
          Unlock Financial Clarity
        </h2>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl">
          Know where your money is going. Track how you’re spending and discover
          trends to improve your financial habits.
        </p>

        <button
          onClick={goToDashboard}
          className="m-10 px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-indigo-800 transition"
        >
          Get started
        </button>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-10">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/1161/1161388.png",
              title: "Expense Insights",
              text: "Understand your spending with detailed insights.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/1490/1490859.png",
              title: "Automated Budgeting",
              text: "Track and analyze your expenses effortlessly.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/2164/2164889.png",
              title: "Custom Reports",
              text: "Create personalized financial reports with ease.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/9068/9068970.png",
              title: "Smart Notifications",
              text: "Get instant alerts for overspending or upcoming bills.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-black shadow-lg bg-white/70 hover:scale-105 transition"
            >
              <img src={feature.img} className="w-12 mx-auto mb-4" alt="" />
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-10">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
          Why Choose Expense Tracker?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/4313/4313556.png",
              title: "User-Friendly Dashboard",
              text: "Navigate your expenses easily with our clean design.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/2345/2345336.png",
              title: "Secure & Private",
              text: "Your data is encrypted and never shared with third parties.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/4467/4467515.png",
              title: "Real-Time Sync",
              text: "Access your financial data from any device instantly.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 shadow-lg hover:scale-105 transition"
            >
              <img src={item.img} className="w-14 mx-auto mb-4" alt="" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-center py-20 bg-gradient-to-tr from-indigo-200 to-purple-100">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          Our Achievements
        </h2>
        <div className="flex flex-wrap justify-center gap-16">
          <div>
            <h3 className="text-5xl font-extrabold text-indigo-700">10K+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-indigo-700">₹25L+</h3>
            <p className="text-gray-600">Expenses Tracked</p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-indigo-700">98%</h3>
            <p className="text-gray-600">User Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Empower Section */}
      <section className="m-20 p-8 bg-white/70 rounded-xl shadow-lg">
        <h1 className="m-8 text-center text-3xl font-bold">
          EMPOWERING YOUR FINANCIAL GOALS
        </h1>
        <p className="text-xl p-4 m-4">
          Expense Tracker Pro helps you gain control over your financial
          situation. With our interactive tools, you can effortlessly calculate,
          manage, and edit your expenses anytime.
        </p>
        <div className="m-8 flex flex-col md:flex-row justify-center gap-10 items-center">
          <img
            src="https://img.freepik.com/premium-vector/expenses-vector-illustration-can-be-used-accounting_1237743-80513.jpg"
            alt=""
            className="h-96 w-1/2 rounded-md shadow-xl"
          />
          <div className="m-10">
            <p className="text-md mb-4">
              We believe in making financial planning accessible to everyone.
              Our platform is designed to suit all kinds of users looking to
              improve their budgeting skills.
            </p>
            <button className="border border-gray-800 px-6 py-2 rounded-md hover:scale-105 hover:bg-gray-800 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-tr from-indigo-100 to-pink-100 py-16">
        <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-10 px-10">
          {[
            {
              text: `"Expense Tracker changed how I manage my money. It's simple yet powerful!"`,
              name: "— Aditi Sharma",
            },
            {
              text: `"Love the insights and auto-budgeting feature. Makes saving fun!"`,
              name: "— Rahul Verma",
            },
            {
              text: `"Finally an app that helps me stay financially organized!"`,
              name: "— Sneha Patel",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-xl p-6 rounded-2xl max-w-xs hover:scale-105 transition"
            >
              <p className="italic text-gray-700 mb-4">{t.text}</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-gray-700 text-sm border-t">
        © 2025 Expense Tracker. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
