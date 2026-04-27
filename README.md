<div align="center">

  [![Typing SVG](https://readme-typing-svg.demolab.com/?font=Inter&weight=800&size=50&pause=1000&color=38B2AC&center=true&vCenter=true&width=600&height=80&lines=Debt+IQ;Track+Your+Loans;Visualize+EMIs;Avoid+Late+Fees)](https://git.io/typing-svg)

  <p><b>Intelligent Command Centre for Debt & Credit</b></p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Zustand-4D4D4E?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
  </p>

  <p>
    <i>A smart dashboard that helps users track loans, visualize EMI payments, and avoid late fees using predictive alerts and visual insights.</i>
  </p>

</div>

---

<h2>🎯 About The Project</h2>
<p>
  Managing multiple loans can be confusing. Scattered EMIs lead to missed payments, averaging ₹4,200/year in late fees and severe credit score drops. <strong>Debt IQ</strong> (formerly CreditFlow) solves this by providing a unified, intelligent dashboard to track, visualize, and alert users about their financial obligations—all in one place.
</p>

<br />

<h2>✨ Key Features</h2>
<table>
  <tr>
    <td>📊 <b>Smart Dashboard</b></td>
    <td>View total active loans, total monthly EMI, next due dates, and overall loan progress at a glance.</td>
  </tr>
  <tr>
    <td>📂 <b>Loan Manager</b></td>
    <td>Seamlessly add new loans and view a comprehensive list of all ongoing debts and EMI details.</td>
  </tr>
  <tr>
    <td>📅 <b>EMI Calendar</b></td>
    <td>Track upcoming payments with color-coded urgency alerts (🔴 Urgent, 🟡 Near, 🟢 Safe).</td>
  </tr>
  <tr>
    <td>📈 <b>Visual Insights</b></td>
    <td>Interactive charts breaking down Interest vs. Principal and tracking loan payoff progress over time.</td>
  </tr>
  <tr>
    <td>🔔 <b>Predictive Alerts</b></td>
    <td>Stay ahead of due dates with smart notifications like <i>"Next EMI due in 3 days"</i>.</td>
  </tr>
</table>

<br />

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><strong>Frontend framework:</strong> React (via Vite for lightning-fast builds)</li>
  <li><strong>Styling:</strong> Tailwind CSS (for rapid, modern, responsive UI)</li>
  <li><strong>State Management:</strong> Zustand (lightweight and simple global state)</li>
  <li><strong>Data Visualization:</strong> Recharts (for beautiful SVG charts)</li>
  <li><strong>Storage:</strong> LocalStorage (seamless data persistence without backend overhead)</li>
</ul>

<br />

<h2>🚀 Getting Started</h2>
<p>Follow these steps to run the project locally on your machine.</p>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js installed on your machine</li>
  <li>npm or yarn package manager</li>
</ul>

<h3>Installation</h3>
<pre><code># 1. Clone the repository
git clone https://github.com/yourusername/debt-iq.git

# 2. Navigate into the project directory
cd debt-iq

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
</code></pre>

<br />

<h2>🧮 Core Logic: The EMI Formula</h2>
<p>Debt IQ relies on standard financial mathematics to calculate monthly EMI. The logic is handled in the <code>utils/emiCalculator.js</code> file using the following formula:</p>

<pre><code>EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]

Where:
P = Principal loan amount
R = Monthly interest rate (Annual Rate / 12 / 100)
N = Loan duration in months
</code></pre>

<br />

<h2>📂 Project Structure</h2>
<pre><code>src/
 ├── components/       # Reusable UI parts
 │    ├── Navbar.jsx   
 │    ├── Sidebar.jsx  
 │    └── LoanCard.jsx 
 ├── pages/            # Main application views
 │    ├── Dashboard.jsx
 │    ├── Loans.jsx    
 │    └── Calendar.jsx 
 ├── store/            # Global state management
 │    └── loanStore.js # Zustand store for loans
 ├── utils/            # Helper functions
 │    └── emiCalculator.js
 ├── App.jsx
 └── main.jsx
</code></pre>

<br />

<h2>🔮 Future Scope</h2>
<ul>
  <li>🤖 <b>AI Recommendations:</b> Smart suggestions on which loan to pay off first based on interest rates.</li>
  <li>🏦 <b>Real Bank Integration:</b> Plaid/Account Aggregator integration for live bank syncing.</li>
  <li>⭐ <b>Credit Score Tracking:</b> Visualizing how on-time payments improve credit scores.</li>
</ul>

<hr />

<div align="center">
  <p>Built with ❤️ for better financial health.</p>
</div>
