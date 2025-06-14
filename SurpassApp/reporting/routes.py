# surpass_app/reporting/routes.py
from fastapi import APIRouter, HTTPException
from typing import List
import requests
from SurpassApp.reporting.client import fetch_test_sessions
from SurpassApp.reporting.models import TestSession

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
