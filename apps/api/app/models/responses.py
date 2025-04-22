from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any

class GenerateResponse(BaseModel):
    """
    Response model for the Theory of Change generation endpoint.
    
    Returns the generated output as a formatted string that includes
    the Theory of Change, Impact Activities, and Monitoring Plan.
    """
    generated_output: str = Field(
        ..., 
        description="The generated Theory of Change, Impact Activities, and Monitoring Plan"
    )
    
    class Config:
        json_schema_extra = {
            "example": {
                "generated_output": """Theory of Change:
Purpose: To address food insecurity in urban communities
Vision: A world where everyone has access to nutritious food
Mission: To create sustainable community gardens that provide fresh produce to urban neighborhoods
Approach: Developing community-led urban farming initiatives
Activities: 
- Establish community gardens in vacant lots
- Provide gardening training to community members
- Create distribution systems for harvested produce
Outputs:
- Increased access to fresh produce
- New urban gardening skills in the community
- Stronger community bonds through collaborative work
Outcomes:
- Reduced food insecurity in the neighborhood
- Improved nutrition among community members
- Enhanced environment through green spaces
Impact: Transformed urban food systems with increased food sovereignty, improved health outcomes, and more resilient communities

Impact Activities:
1. Community Garden Establishment
   Description: Convert vacant lots into productive community gardens through collaborative design and implementation.
   Resources Needed: Land access, Seeds and tools, Volunteer labor, Initial funding for infrastructure
   Expected Outcomes: Increased food production, Improved community spaces, New gardening skills development

2. Gardening Workshops
   Description: Regular gardening workshops to teach sustainable urban farming techniques and nutritional education.
   Resources Needed: Experienced gardeners, Educational materials, Meeting space, Demonstration garden plots
   Expected Outcomes: Increased gardening knowledge, More households growing food, Improved food preparation skills

3. Harvest Distribution Network
   Description: Create an equitable system for distributing harvested produce to community members, with priority to those in need.
   Resources Needed: Storage facilities, Transportation, Volunteer coordinators, Distribution site
   Expected Outcomes: Increased access to fresh produce, Reduced food waste, Stronger community networks

Monitoring Plan:
| Indicator | Description | Method | Frequency | Target |
|-----------|-------------|--------|-----------|--------|
| Garden Productivity | Amount of food produced (in kg) from community gardens | Regular weighing and recording of harvests | Weekly during harvest season | 500kg per garden annually |
| Community Participation | Number of community members actively involved in garden activities | Attendance tracking at garden events and work sessions | Monthly | 50 regular participants per garden |
| Food Distribution | Number of households receiving produce from the gardens | Distribution records and recipient surveys | Every distribution event | 100 households receiving food regularly |
"""
            }
        }

class ErrorResponse(BaseModel):
    """
    Error response model for API endpoints.
    """
    detail: str = Field(..., description="Error detail message")
    
    class Config:
        json_schema_extra = {
            "example": {
                "detail": "An error occurred while generating the Theory of Change"
            }
        } 