# main.py
from fastapi import FastAPI
from SurpassApp.core.config import settings
from SurpassApp.reporting.routes import router as reporting_router
from SurpassApp.imports.routes import router as imports_router
from SurpassApp.users.routes import router as users_router

app = FastAPI(title="Surpass Utilities")

# Include routers
app.include_router(reporting_router)
app.include_router(imports_router)
app.include_router(users_router)

@app.get("/health")
def health_check():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
