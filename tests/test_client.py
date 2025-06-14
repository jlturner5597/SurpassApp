# tests/test_client.py
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

import pytest
import requests
from requests_mock import Mocker
from SurpassApp.reporting.client import fetch_test_sessions
from SurpassApp.reporting.models import TestSession
from SurpassApp.core.auth import get_basic_auth_header
from SurpassApp.reporting.routes import check_connection


@pytest.fixture(autouse=True)
def set_env(monkeypatch):
    # ensure creds are dummy but present
    monkeypatch.setenv("surpass_user", "u")
    monkeypatch.setenv("surpass_pass", "p")

def test_fetch_success(requests_mock: Mocker):
    sample = [{"id":"1","candidate_name":"Alice","score":95.0,"status":"complete"}]
    requests_mock.get(
        "https://ussharedsandbox.surpass.com/api/v2/TestSessions",
        json=sample, status_code=200
    )
    sessions = fetch_test_sessions()
    assert isinstance(sessions, list)
    assert sessions[0] == TestSession(**sample[0])

def test_fetch_error(requests_mock: Mocker):
    requests_mock.get(
        "https://ussharedsandbox.surpass.com/api/v2/TestSessions",
        status_code=500, text="Server error"
    )
    with pytest.raises(requests.HTTPError):
        fetch_test_sessions()

def test_basic_auth_header():
    hdr = get_basic_auth_header()
    assert "Authorization" in hdr and hdr["Authorization"].startswith("Basic ")

def test_check_connection_success(monkeypatch, requests_mock: Mocker):
    # stub the /testsessions?top=1 call
    requests_mock.get(
        "https://ussharedsandbox.surpass.com/api/v2/testsessions?top=1",
        status_code=200, json=[]
    )
    resp = check_connection()
    assert resp["status"] == "connected"

def test_check_connection_fail(monkeypatch, requests_mock: Mocker):
    requests_mock.get(
        "https://ussharedsandbox.surpass.com/api/v2/testsessions?top=1",
        status_code=401, text="Unauthorized"
    )
    with pytest.raises(requests.HTTPError):
        check_connection()