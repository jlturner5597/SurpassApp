# surpass_app/reporting/models.py
from pydantic import BaseModel


class Candidate(BaseModel):
    id: int
    href: str


class TestForm(BaseModel):
    id: int
    reference: str
    name: str
    href: str


class Centre(BaseModel):
    id: int
    href: str


class Test(BaseModel):
    id: int
    reference: str
    name: str
    href: str


class TestSession(BaseModel):
    id: int
    reference: str
    href: str
    awaitingMarkingSubmission: bool | None = None
    markingProgressPercent: int | None = None
    candidate: Candidate | None = None
    testForm: TestForm | None = None
    centre: Centre | None = None
    test: Test | None = None
    currentExamState: str | None = None
    downloadedToSecureClient: bool | None = None
    errors: str | None = None
    serverTimeZone: str | None = None
