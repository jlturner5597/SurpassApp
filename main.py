# main.py
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import FileResponse
from pathlib import Path
from SurpassApp.core.config import settings
from SurpassApp.reporting.routes import router as reporting_router
from SurpassApp.imports.routes import router as imports_router
from SurpassApp.users.routes import router as users_router

app = FastAPI(title="Surpass Utilities")

# Build paths
FRONTEND_DIST = Path(__file__).resolve().parent / "frontend" / "dist"


@app.get("/app/{full_path:path}")
def serve_frontend(full_path: str):
    """Serve static assets or fallback to the SPA index file."""
    file_path = FRONTEND_DIST / full_path
    if file_path.exists():
        return FileResponse(file_path)
    return FileResponse(FRONTEND_DIST / "index.html")

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/app", StaticFiles(directory=FRONTEND_DIST), name="app")

# Initialize templates
templates = Jinja2Templates(directory="templates")

# Include routers
app.include_router(reporting_router)
app.include_router(imports_router)
app.include_router(users_router)

@app.get("/")
def home():

    """Serve the React single page application."""
    return FileResponse(FRONTEND_DIST / "index.html")


@app.get("/health")
def health_check():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
