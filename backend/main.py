from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

from analysis import calculate_financial_health
from ai_insights import generate_ai_insights   # ✅ IMPORTANT

app = FastAPI(title="SME Financial Health Assessment API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://sme-financial-health-ai.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze_financial_data(file: UploadFile = File(...)):
    df = pd.read_csv(file.file)

    analysis_result = calculate_financial_health(df)

    # 🔥 AI CALL (THIS WAS MISSING OR COMMENTED BEFORE)
    ai_summary = generate_ai_insights(analysis_result)

    return {
        "analysis": analysis_result,
        "ai_insights": ai_summary   # ✅ MUST BE PRESENT
    }
