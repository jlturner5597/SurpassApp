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

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve built frontend assets
FRONTEND_DIST = Path("frontend/dist")

# Initialize templates
templates = Jinja2Templates(directory="templates")

# Include routers
app.include_router(reporting_router)
app.include_router(imports_router)
app.include_router(users_router)

@app.get("/")
def home(request: Request):
    """Render the application home screen with site overview."""
    return templates.TemplateResponse(
        "home.html", {"request": request, "title": "Home"}
    )

@app.get("/health")
def health_check():
    return {"status": "ok"}


# Catch-all for SPA routing - returns React index.html
@app.get("/app/{path:path}")
@app.get("/app", include_in_schema=False)
def serve_frontend(path: str = ""):
    file_path = FRONTEND_DIST / path
    if file_path.is_file():
        return FileResponse(file_path)
    return FileResponse(FRONTEND_DIST / "index.html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
