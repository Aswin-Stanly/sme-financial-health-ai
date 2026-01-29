import pandas as pd

def calculate_financial_health(df: pd.DataFrame):
    avg_revenue = df["revenue"].mean()
    avg_expenses = df["expenses"].mean()
    avg_cash_in = df["cash_inflow"].mean()
    avg_cash_out = df["cash_outflow"].mean()
    avg_loan = df["loan_payment"].mean()

    profit_margin = (avg_revenue - avg_expenses) / avg_revenue
    expense_ratio = avg_expenses / avg_revenue
    cash_flow_gap = avg_cash_in - avg_cash_out
    debt_ratio = avg_loan / avg_revenue

    score = 100

    if profit_margin < 0.1:
        score -= 25
    if expense_ratio > 0.7:
        score -= 20
    if cash_flow_gap < 0:
        score -= 25
    if debt_ratio > 0.3:
        score -= 20

    score = max(score, 0)

    if score >= 80:
        status = "Healthy"
    elif score >= 50:
        status = "Moderate"
    else:
        status = "At Risk"

    return {
        "health_score": score,
        "status": status,
        "metrics": {
            "profit_margin": round(profit_margin, 2),
            "expense_ratio": round(expense_ratio, 2),
            "cash_flow_gap": round(cash_flow_gap, 2),
            "debt_ratio": round(debt_ratio, 2),
        }
    }
