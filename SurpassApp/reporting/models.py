# surpass_app/reporting/models.py
from pydantic import BaseModel

class TestSession(BaseModel):
    id: str
    candidate_name: str
    score: float
    status: str
