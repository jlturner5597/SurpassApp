# surpass_app/reporting/models.py
from pydantic import BaseModel


class Candidate(BaseModel):
    id: int
    href: str


class TestForm(BaseModel):
    __test__ = False
    id: int
    reference: str
    name: str
    href: str


class Centre(BaseModel):
    id: int
    href: str


class Test(BaseModel):
    __test__ = False
    id: int
    reference: str
    name: str
    href: str


class TestSession(BaseModel):
    __test__ = False
    id: int
    candidate_name: str | None = None
    score: float | None = None
    status: str | None = None
    reference: str | None = None
    href: str | None = None
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
