import os
from dotenv import load_dotenv
from openai import AsyncOpenAI
from ..models.project_input import ProjectInput
from ..utils.prompts import (
    create_toc_system_prompt,
    create_toc_user_prompt,
)

# Load environment variables
load_dotenv()

# Initialize OpenAI client
api_key = os.getenv("OPENAI_API_KEY")
model = os.getenv("GPT_MODEL", "gpt-4-turbo")
client = AsyncOpenAI(api_key=api_key)

async def generate_theory_of_change(project_data: ProjectInput) -> str:
    """
    Generate a Theory of Change, Impact Activities, and Monitoring Plan using OpenAI.
    
    Args:
        project_data: The project input data
        
    Returns:
        A formatted string containing the generated Theory of Change, Impact Activities, and Monitoring Plan
    """
    try:
        # Create system and user prompts
        system_prompt = create_toc_system_prompt()
        user_prompt = create_toc_user_prompt(project_data)
        
        # Call OpenAI API
        response = await client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            temperature=0.7,
            max_tokens=2000,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=0.0,
        )
        
        # Extract and return the generated text
        return response.choices[0].message.content
    except Exception as e:
        # Log the error (in a real application, you'd use a proper logging system)
        print(f"Error in OpenAI API call: {str(e)}")
        raise Exception(f"Failed to generate Theory of Change: {str(e)}")
        
async def mock_generate_theory_of_change(project_data: ProjectInput) -> str:
    """
    Mock implementation for generating a Theory of Change for testing or when OpenAI is unavailable.
    
    Args:
        project_data: The project input data
        
    Returns:
        A formatted string containing a mock Theory of Change
    """
    # This is a simplified mock response
    return f"""Theory of Change:
Purpose: {project_data.purpose}
Vision: {project_data.vision}
Mission: {project_data.mission}
Approach: {project_data.approach}
Activities: 
- {project_data.activity1}
- {project_data.activity2 or "Provide training and education"}
- {project_data.activity3 or "Create distribution networks"}
Outputs:
- Increased access to resources
- New skills and knowledge
- Stronger community connections
Outcomes:
- Improved well-being
- Enhanced self-sufficiency
- Positive environmental impact
Impact: Transformed communities with improved outcomes and more resilient social systems

Impact Activities:
1. {project_data.activity1}
   Description: Implementing the primary activity to address key challenges.
   Resources Needed: {project_data.humanResources or "Team members"}, {project_data.physicalResources or "Equipment"}
   Expected Outcomes: Increased impact, Improved outcomes, Greater reach

2. {project_data.activity2 or "Secondary Activity"}
   Description: Supporting activities to enhance the primary work.
   Resources Needed: Various team resources and partnerships
   Expected Outcomes: Extended reach, Sustainable solutions

Monitoring Plan:
| Indicator | Description | Method | Frequency | Target |
|-----------|-------------|--------|-----------|--------|
| {project_data.indicator1} | Measuring primary impact | Regular data collection | Monthly | Improvement over baseline |
| {project_data.indicator2 or "Secondary indicator"} | Tracking additional progress | Surveys and interviews | Quarterly | Positive trend |
""" 