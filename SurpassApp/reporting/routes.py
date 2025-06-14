# surpass_app/reporting/routes.py
from fastapi import APIRouter

router = APIRouter(prefix="/reports", tags=["Reporting"])

@router.get("/ping")
def ping_reporting():
    return {"module": "reporting", "status": "ok"}
