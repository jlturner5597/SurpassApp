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

## Frontend Setup

The web UI is implemented with React. Ensure Node.js **18** or newer is
installed and then install the frontend dependencies:

```bash
cd frontend
npm install
```

Build the production assets:

```bash
npm run build
```

The build output should be copied to the `static/` directory so FastAPI can
serve the compiled assets.

## Running the Backend with Built Assets

Once the React assets have been built into `static/`, start the FastAPI server:

```bash
python main.py
```

Navigate to `http://localhost:8000/` to see the application running with the
generated frontend and API routes.
