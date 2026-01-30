SME Financial Health Assessment Tool

An AI-powered web application that helps Small and Medium Enterprises (SMEs) analyze their financial health by uploading CSV data and receiving automated metrics, health scores, and AI-generated insights.

Live Demo

Frontend (Vercel):
https://sme-financial-health-ai.vercel.app

Backend API (Render):
https://sme-financial-health-backend.onrender.com

Swagger Docs: https://sme-financial-health-backend.onrender.com/docs

Problem Statement:

Many SMEs maintain their financial records in spreadsheets but lack the financial expertise to interpret the data effectively.
This makes it difficult for business owners to understand whether their business is financially healthy, at risk, or requires improvement.

Solution Overview:

This application allows users to:

- Upload financial data as a CSV file

- Automatically compute key financial metrics

- Generate a financial health score

- Receive AI-powered, human-readable insights and recommendations

- The system converts raw numerical data into clear, actionable business insights using a Large Language Model (LLM).

Key Features:

- CSV-based financial data upload

- Automated financial metric calculation

- AI-generated insights using LLMs

- REST API-based backend architecture

- Fully deployed with public access

- Secure API key handling via environment variables

Tech Stack
Frontend:

React

HTML, CSS, JavaScript

Deployed on Vercel

Backend:

Python

FastAPI

Pandas

REST APIs

Deployed on Render

AI / ML:

OpenAI GPT (LLM)

Prompt Engineering

NLP-based insight generation

Project Architecture:
financial-health-ai/
│
├── backend/
│   ├── main.py          # FastAPI app & API endpoints
│   ├── analysis.py      # Financial metric calculations
│   ├── ai_insights.py   # LLM integration & prompt engineering
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

How It Works:

User uploads a financial CSV file via the React frontend

Frontend sends the file to the backend using a REST API

Backend processes the data using Pandas

Financial metrics and health score are calculated

Metrics are passed to an LLM using a structured prompt

AI-generated insights are returned and displayed on the UI

Environment Variables:

The backend uses environment variables for secure configuration.

OPENAI_API_KEY="your_api_key_here"


⚠️ API keys are never committed to the repository.

⚠️ Note on Free Hosting

The backend is deployed on a free-tier cloud service.
On first access after inactivity, the backend may take a few seconds to wake up.
Subsequent requests respond normally.

Demo Video:

A detailed project explanation and demo video has been recorded as part of the hackathon submission.

Author:

Aswin
Final-year B.Tech student
Interests: Backend Development, APIs, AI/ML, Cybersecurity

Hackathon Context:

This project was developed as part of the Career Carnival Hackathon, focusing on:

Practical AI applications

REST API development

LLM integration

Full-stack deployment

Future Enhancements:

Financial forecasting using ML models

RAG-based insights with vector databases

Authentication and user dashboards

Integration with accounting or GST APIs

Acknowledgements:

FastAPI

React

OpenAI

Vercel

Render
