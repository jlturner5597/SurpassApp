# surpass_app/users/routes.py
from fastapi import APIRouter

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/ping")
def ping_users():
    return {"module": "users", "status": "ok"}
