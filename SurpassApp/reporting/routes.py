# surpass_app/reporting/routes.py
from fastapi import APIRouter, Request, HTTPException
from typing import List
from SurpassApp.reporting.client import fetch_test_sessions, check_surpass_connection
from SurpassApp.reporting.models import TestSession
import requests
from fastapi.templating import Jinja2Templates
from fastapi.responses import FileResponse
from pathlib import Path

templates = Jinja2Templates(directory="templates")
FRONTEND_DIST = Path(__file__).resolve().parents[2] / "frontend" / "dist"

router = APIRouter(prefix="/reports", tags=["Reporting"])

@router.get("/ping")
def ping_reporting():
    return {"module": "reporting", "status": "ok"}

@router.get(
  "/test-sessions/json",
  response_model=List[TestSession],
  summary="Fetch all test sessions from Surpass"
)
def get_test_sessions():
    try:
        return fetch_test_sessions()
    except requests.HTTPError as e:
        raise HTTPException(status_code=502, detail=str(e))
    
@router.get("/check-connection", summary="Verify Surpass API connectivity")
def check_connection():
    """Ping a lightweight Surpass endpoint to confirm auth."""
    try:
        return check_surpass_connection()
    except requests.HTTPError as e:
        raise HTTPException(status_code=502, detail=f"Auth failed: {e}")
    
@router.get("/test-sessions", summary="Test Sessions (HTML view)")
def view_test_sessions(request: Request):
    try:
        sessions: List[TestSession] = fetch_test_sessions()
    except requests.HTTPError as e:
        raise HTTPException(status_code=502, detail=str(e))
    return templates.TemplateResponse(
        "test_sessions.html",
        {"request": request, "sessions": sessions}
    )

@router.get("/test-sessions/react", summary="Test Sessions React view")
def view_test_sessions_react():
    """Serve the React application for sessions."""
    return FileResponse(FRONTEND_DIST / "index.html")
