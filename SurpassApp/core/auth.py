# surpass_app/core/auth.py
import base64
from SurpassApp.core.config import settings

def get_basic_auth_header() -> dict[str, str]:
    creds = f"{settings.surpass_user}:{settings.surpass_pass}"
    token = base64.b64encode(creds.encode()).decode()
    return {"Authorization": f"Basic {token}"}
