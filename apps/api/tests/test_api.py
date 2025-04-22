import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_root():
    """Test the root endpoint."""
    response = client.get("/")
    assert response.status_code == 200
    assert "Welcome to the Impact Canvas API" in response.json()["message"]
    assert "version" in response.json()

def test_generate_theory_of_change():
    """Test the generate theory of change endpoint with valid data."""
    # Test data
    test_data = {
        "purpose": "To address food insecurity in urban communities",
        "vision": "A world where everyone has access to nutritious food",
        "mission": "To create sustainable community gardens",
        "approach": "Developing community-led urban farming initiatives",
        "activity1": "Establish community gardens in vacant lots",
        "beneficiaries": "Low-income families in urban food deserts",
        "indicator1": "Pounds of food produced"
    }
    
    # This test should be mocked in a real testing environment
    # to avoid actual API calls to OpenAI
    response = client.post("/generate-theory-of-change/", json=test_data)
    
    # For now, we'll just check that the endpoint responds
    # In a real test, we would mock the OpenAI service and check the actual response content
    assert response.status_code == 200
    assert "generated_output" in response.json()

def test_missing_required_fields():
    """Test that the API properly validates missing required fields."""
    # Missing required fields
    test_data = {
        "purpose": "To address food insecurity in urban communities",
        # Missing vision, mission, approach, activity1, beneficiaries, indicator1
    }
    
    response = client.post("/generate-theory-of-change/", json=test_data)
    assert response.status_code == 422  # Unprocessable Entity 