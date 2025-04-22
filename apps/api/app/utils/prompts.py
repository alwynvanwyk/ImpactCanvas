from ..models.project_input import ProjectInput

def create_toc_system_prompt() -> str:
    """
    Create the system prompt for the Theory of Change generation.
    
    Returns:
        A string containing the system prompt
    """
    return """You are an expert consultant in social impact strategy and Theory of Change development. Your task is to help social impact organizations create comprehensive, practical, and effective Theories of Change, impact activities, and monitoring plans.

Your output should be well-structured and include three main sections:

1. Theory of Change - Include all components:
   - Purpose: The problem being addressed
   - Vision: The desired future state
   - Mission: What the organization aims to do
   - Approach: Overall strategy
   - Activities: Key activities
   - Outputs: Direct results of activities
   - Outcomes: Medium-term changes resulting from outputs
   - Impact: Long-term, systemic change

2. Impact Activities - For each activity provide:
   - Name
   - Description: Detailed explanation of the activity
   - Resources Needed: What will be required for implementation
   - Expected Outcomes: What this activity will achieve

3. Monitoring Plan - A clear table with these columns:
   - Indicator: What specifically will be measured
   - Description: More detail about the indicator
   - Method: How it will be measured
   - Frequency: How often it will be measured
   - Target: Specific goals to aim for

Format your response in clean, readable Markdown. Use clear headings, bullet points for lists, and proper table formatting. Make your response practical, actionable, and reflective of real-world social impact work.

Base your response on the information provided, but use your expertise to fill in reasonable gaps with best practices in social impact and monitoring & evaluation."""

def create_toc_user_prompt(project_data: ProjectInput) -> str:
    """
    Create the user prompt for the Theory of Change generation based on project data.
    
    Args:
        project_data: The project input data
        
    Returns:
        A string containing the user prompt
    """
    # Build resources section if any resources are provided
    resources = []
    if project_data.humanResources:
        resources.append(f"Human Resources: {project_data.humanResources}")
    if project_data.physicalResources:
        resources.append(f"Physical Resources: {project_data.physicalResources}")
    if project_data.financialResources:
        resources.append(f"Financial Resources: {project_data.financialResources}")
    if project_data.partnerships:
        resources.append(f"Partnerships: {project_data.partnerships}")
    
    resources_text = "\n".join(resources) if resources else "No specific resources provided."
    
    # Build activities section
    activities = [f"1. {project_data.activity1}"]
    if project_data.activity2:
        activities.append(f"2. {project_data.activity2}")
    if project_data.activity3:
        activities.append(f"3. {project_data.activity3}")
    
    activities_text = "\n".join(activities)
    
    # Build indicators section
    indicators = [f"1. {project_data.indicator1}"]
    if project_data.indicator2:
        indicators.append(f"2. {project_data.indicator2}")
    if project_data.indicator3:
        indicators.append(f"3. {project_data.indicator3}")
    
    indicators_text = "\n".join(indicators)
    
    # Create the complete prompt
    return f"""Please create a comprehensive Theory of Change, Impact Activities, and Monitoring Plan for a social impact project with the following details:

**Core Project Information:**
- Purpose: {project_data.purpose}
- Vision: {project_data.vision}
- Mission: {project_data.mission}
- Approach: {project_data.approach}

**Key Activities:**
{activities_text}

**Available Resources:**
{resources_text}

**Target Audience:**
- Beneficiaries: {project_data.beneficiaries}
{f"- Customers: {project_data.customers}" if project_data.customers else ""}

**Proposed Monitoring Indicators:**
{indicators_text}

Please structure your response with clear headings for each of the three main sections (Theory of Change, Impact Activities, and Monitoring Plan) and ensure it is comprehensive, practical, and actionable.""" 