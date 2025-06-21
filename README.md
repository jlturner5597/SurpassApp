# SurpassApp
Surpass utility application

## Home Screen

Start the FastAPI app using `python main.py` and navigate to `http://localhost:8000/`.
The home page provides a short overview of the available modules and links to key routes.

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

## Building the Frontend

Windows users may encounter `EMFILE: too many open files` when installing
frontend dependencies. The repository includes a Dockerfile that can be used
to build the frontend without running Node locally.

```bash
docker build -t surpass-frontend -f Dockerfile .
docker run --rm -v "$(pwd)/frontend:/app/frontend" surpass-frontend
```

After the container finishes, a `dist` folder will be created inside
`frontend/`.
