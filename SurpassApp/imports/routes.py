# surpass_app/imports/routes.py
from fastapi import APIRouter

router = APIRouter(prefix="/imports", tags=["Imports"])

@router.get("/ping")
def ping_imports():
    return {"module": "imports", "status": "ok"}
