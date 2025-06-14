# SurpassApp
Surpass utility application

## Settings

The project uses [Pydantic](https://docs.pydantic.dev/) to load configuration from a `.env` file. Create a file named `.env` in the project root with the following variables:

```
SURPASS_USER=<your user>
SURPASS_PASS=<your password>
```

Then you can import `Settings` from `settings.py`:

```python
from settings import Settings

settings = Settings()
print(settings.surpass_user)
```

## Fetching Test Sessions

Use `fetch_test_sessions` to retrieve test sessions from the Surpass API:

```python
from SurpassApp.reporting.client import fetch_test_sessions

sessions = fetch_test_sessions()
for session in sessions:
    print(session.id, session.reference)
```
