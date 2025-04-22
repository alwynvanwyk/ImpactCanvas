from pydantic import BaseModel, Field
from typing import Optional

class ProjectInput(BaseModel):
    """
    Project input data for generating Theory of Change, Impact Activities, and Monitoring Plan.
    
    This model defines the structure of the input data required for the
    Theory of Change generation process.
    """
    
    # Core project elements (required)
    purpose: str = Field(..., description="The purpose of the project or problem being addressed")
    vision: str = Field(..., description="The vision for change or desired future state")
    mission: str = Field(..., description="The mission of the organization or project")
    approach: str = Field(..., description="The approach or strategy to address the problem")
    
    # Key activities (at least one required)
    activity1: str = Field(..., description="Primary activity for the project")
    activity2: Optional[str] = Field(None, description="Secondary activity for the project")
    activity3: Optional[str] = Field(None, description="Tertiary activity for the project")
    
    # Resources (optional)
    humanResources: Optional[str] = Field(None, description="Human resources available for the project")
    physicalResources: Optional[str] = Field(None, description="Physical resources available for the project")
    financialResources: Optional[str] = Field(None, description="Financial resources available for the project")
    partnerships: Optional[str] = Field(None, description="Partnerships or collaborations for the project")
    
    # Audience (beneficiaries required)
    beneficiaries: str = Field(..., description="Who will benefit from the project")
    customers: Optional[str] = Field(None, description="Customers or other stakeholders if different from beneficiaries")
    
    # Monitoring (at least one indicator required)
    indicator1: str = Field(..., description="Primary indicator for monitoring success")
    indicator2: Optional[str] = Field(None, description="Secondary indicator for monitoring success")
    indicator3: Optional[str] = Field(None, description="Tertiary indicator for monitoring success")
    
    class Config:
        json_schema_extra = {
            "example": {
                "purpose": "To address food insecurity in urban communities",
                "vision": "A world where everyone has access to nutritious food",
                "mission": "To create sustainable community gardens that provide fresh produce to urban neighborhoods",
                "approach": "Developing community-led urban farming initiatives",
                "activity1": "Establish community gardens in vacant lots",
                "activity2": "Provide gardening training to community members",
                "activity3": "Create distribution systems for harvested produce",
                "humanResources": "Volunteers, garden coordinators, and educators",
                "physicalResources": "Garden tools, seeds, land access, and water systems",
                "financialResources": "Community grants and donations",
                "partnerships": "Local schools, city government, and food banks",
                "beneficiaries": "Low-income families in urban food deserts",
                "customers": "Local restaurants and farmers markets",
                "indicator1": "Pounds of food produced",
                "indicator2": "Number of people with improved food access",
                "indicator3": "Increase in consumption of fresh vegetables"
            }
        } 