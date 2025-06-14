# surpass_app/reporting/client.py
import requests
from typing import List
from SurpassApp.core.config import settings
from SurpassApp.reporting.models import TestSession

BASE_URL = "https://ussharedsandbox.surpass.com/api/v2"

def fetch_test_sessions() -> List[TestSession]:
    auth = (settings.surpass_user, settings.surpass_pass)
    resp = requests.get(f"{BASE_URL}/TestSessions", auth=auth)
    if resp.status_code != 200:
        resp.raise_for_status()
    data = resp.json()
    if isinstance(data, dict):
        items = data.get("response", [])
    else:
        items = data
    return [TestSession(**it) for it in items]
