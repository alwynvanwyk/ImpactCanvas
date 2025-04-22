import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv
from .services.openai_service import generate_theory_of_change, mock_generate_theory_of_change
from .models.project_input import ProjectInput
from .models.responses import GenerateResponse

# Load environment variables
load_dotenv()

# Determine if we should use the mock implementation
use_mock = os.getenv("USE_MOCK", "False").lower() == "true"

# Create FastAPI app
app = FastAPI(
    title="Impact Canvas API",
    description="API for generating Theory of Change, Impact Activities, and Monitoring Plans",
    version="0.1.0",
)

# Configure CORS
cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    """Root endpoint providing API information."""
    return {
        "message": "Welcome to the Impact Canvas API",
        "version": "0.1.0",
        "docs": "/docs",
        "mode": "mock" if use_mock else "live"
    }

@app.post("/generate-theory-of-change/", response_model=GenerateResponse)
async def create_theory_of_change(project_data: ProjectInput):
    """
    Generate a Theory of Change, Impact Activities, and Monitoring Plan based on project data.
    
    This endpoint takes project information and uses AI to generate:
    - A complete Theory of Change
    - Recommended Impact Activities
    - A detailed Monitoring Plan
    """
    try:
        # Use mock implementation for testing or when OpenAI API is not available
        if use_mock:
            generated_output = await mock_generate_theory_of_change(project_data)
        else:
            # Call the OpenAI service to generate the theory of change
            generated_output = await generate_theory_of_change(project_data)
            
        return {"generated_output": generated_output}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# For direct execution
if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    host = os.getenv("HOST", "0.0.0.0")
    uvicorn.run("app.main:app", host=host, port=port, reload=True) 