import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const analyzeData = async () => {
    if (!file) {
      setError("Please upload a CSV file");
      return;
    }

    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://sme-financial-health-backend.onrender.com/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("API RESPONSE:", data); // debug
      setResult(data);
    } catch (err) {
      setError("Failed to connect to backend");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>SME Financial Health Assessment</h1>
      <p>Upload your financial CSV file to analyze business health.</p>

      <input type="file" accept=".csv" onChange={handleFileChange} />
      <br /><br />

      <button onClick={analyzeData}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>Financial Health Result</h2>

          <p><b>Health Score:</b> {result.analysis.health_score}</p>
          <p><b>Status:</b> {result.analysis.status}</p>

          <h3>Key Metrics</h3>
          <ul>
            <li>Profit Margin: {result.analysis.metrics.profit_margin}</li>
            <li>Expense Ratio: {result.analysis.metrics.expense_ratio}</li>
            <li>Cash Flow Gap: {result.analysis.metrics.cash_flow_gap}</li>
            <li>Debt Ratio: {result.analysis.metrics.debt_ratio}</li>
          </ul>

          {/* 🔥 AI INSIGHTS — THIS WAS MISSING / MISPLACED */}
          {result.ai_insights && (
            <div style={{ marginTop: "20px" }}>
              <h3>AI Insights</h3>
              <pre
                style={{
                  background: "#f4f4f4",
                  padding: "15px",
                  whiteSpace: "pre-wrap",
                  borderRadius: "5px"
                }}
              >
                {result.ai_insights}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
