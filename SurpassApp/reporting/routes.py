# surpass_app/reporting/routes.py
from fastapi import APIRouter, HTTPException
from typing import List
from SurpassApp.core.auth import get_basic_auth_header
from SurpassApp.reporting.client import fetch_test_sessions, check_surpass_connection
from SurpassApp.reporting.models import TestSession
import requests

router = APIRouter(prefix="/reports", tags=["Reporting"])

@router.get("/ping")
def ping_reporting():
    return {"module": "reporting", "status": "ok"}

@router.get(
  "/test-sessions",
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
