# ImpactCanvas Project Documentation

## Overview
ImpactCanvas is an innovative web application designed to automate the generation of clear, actionable Theory of Change (ToC) statements, recommended impact activities, and monitoring plans for social-impact and environmental non-profits. The solution leverages OpenAI's GPT technology to simplify strategic planning for impact-driven organisations.

## Problem Statement
Social and environmental non-profits often find creating structured impact plans challenging due to limited resources and expertise. ImpactCanvas streamlines this process, making strategic impact planning quick, accessible, and effective.

## Solution Summary
ImpactCanvas uses a simplified digital canvas form to capture key project information from users. This structured input is then processed by an AI-powered assistant, ImpactGPT, built on OpenAI’s GPT-4, to instantly produce professional and actionable outputs:

- Concise **Theory of Change** narratives
- Tailored lists of **Impact Activities**
- Structured **Monitoring & Evaluation (M&E) Plans**

## Technology Stack

### Frontend
- **Framework**: React
- **Form Component**: SurveyJS (survey-react)
- **HTTP Client**: Axios

### Backend
- **Framework**: Python (FastAPI)
- **Language Model Integration**: OpenAI GPT-4 API
- **Data Format**: JSON

### Database
- Recommended: Supabase (PostgreSQL-based)
- Alternatives: Firebase, MongoDB Atlas

### Deployment
- Frontend: Vercel, Netlify
- Backend: Docker containers or AWS Lambda

## Workflow Diagram (Mermaid)

```mermaid
graph TD
  Customer_Starts --> Open_Web_App
  Open_Web_App --> Fill_SurveyJS_Form
  Fill_SurveyJS_Form --> Submit_Form
  Submit_Form -->|JSON| Backend_API
  Backend_API --> GPT4_AI_Generation
  GPT4_AI_Generation --> Outputs_Returned
  Outputs_Returned --> Review_Outputs
  Review_Outputs -->|Edit if needed| Export_Final_Report
  Export_Final_Report --> Complete
```

## Custom GPT Alternative
As an alternative simplified approach, we created a detailed configuration for an OpenAI Custom GPT named **ImpactGPT**, eliminating the need for extensive custom frontend/backend development:

### Custom GPT Configuration

#### Name
```
ImpactGPT
```

#### Description
```
Automate the creation of clear, actionable Theory of Change statements, recommended impact activities, and detailed monitoring plans for social and environmental non-profits.
```

#### Instructions
```
You are ImpactGPT, an expert AI assistant that helps social-impact and environmental non-profit organisations quickly generate structured and actionable outputs for their projects.

When interacting with users, always guide them clearly through these steps and ensure your responses are strictly structured into these three distinct sections:

## Theory of Change
Generate a brief narrative paragraph clearly explaining the project's logic and how the activities will lead to positive social or environmental outcomes.

## Impact Activities
Provide a concise, clearly structured bullet-point list of recommended practical activities the organisation should undertake to achieve their stated mission and outcomes.

## Monitoring Plan
Create a structured monitoring plan using the markdown table format provided:

| Indicator | Method | Frequency |
|-----------|--------|-----------|
| Indicator 1 | Method 1 | Frequency 1 |
| Indicator 2 | Method 2 | Frequency 2 |
| Indicator 3 | Method 3 | Frequency 3 |

Always ensure clarity, brevity, and actionable recommendations tailored specifically to the input provided by users.
```

#### Conversation Starters
- "Help me generate a Theory of Change for my community garden project."
- "I need a list of impact activities and a monitoring plan for a composting initiative."
- "Guide me through creating a structured plan for my environmental non-profit."

#### Capabilities
- Web Search: Enabled
- Canvas: Enabled
- DALL-E Image Generation: Disabled
- Code Interpreter & Data Analysis: Disabled

## Next Steps
- Implement minimal frontend using React and SurveyJS
- Setup FastAPI backend connected to GPT-4
- Conduct integration tests
- Deploy minimal viable solution for testing

Alternatively, configure and deploy the ImpactGPT Custom GPT directly via the OpenAI platform for rapid deployment without frontend/backend infrastructure.

## Future Enhancements
- Integration with CRM and M&E systems (Salesforce, Airtable)
- User accounts and project history management
- Advanced reporting and analytics

## Repository Structure Recommendation
```
ImpactCanvas/
├── frontend/               # React app with SurveyJS
├── backend/                # FastAPI backend code
├── docs/                   # Documentation (this file)
├── examples/               # Example canvases and outputs
├── GPT_configuration.md    # GPT configuration details
├── README.md               # Project overview and setup instructions
└── LICENSE                 # Licensing information
```

---

© ImpactCanvas | Making impactful projects easier and smarter.

