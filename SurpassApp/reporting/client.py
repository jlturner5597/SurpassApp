# surpass_app/reporting/client.py
import requests
from typing import List
from SurpassApp.core.auth import get_basic_auth_header
from SurpassApp.reporting.models import TestSession

BASE_URL = "https://ussharedsandbox.surpass.com/api/v2"

def fetch_test_sessions() -> List[TestSession]:
    headers = get_basic_auth_header()
    resp = requests.get(f"{BASE_URL}/TestSession", headers=headers)
    if resp.status_code != 200:
        resp.raise_for_status()
    data = resp.json()
    if isinstance(data, dict):
        items = data.get("response", [])
    else:
        items = data
    return [TestSession(**it) for it in items]

def check_surpass_connection():
    url = f"{BASE_URL}/TestSession?top=1"
    resp = requests.get(url, headers=get_basic_auth_header(), timeout=5)
    resp.raise_for_status()
    return {"status": "connected", "code": resp.status_code}
