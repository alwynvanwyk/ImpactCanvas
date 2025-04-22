# Impact Canvas API

This is the backend API for the Impact Canvas project, built with FastAPI and integrated with OpenAI's GPT-4 model.

## Features

- RESTful API for generating Theory of Change, Impact Activities, and Monitoring Plans
- OpenAI GPT-4 integration for natural language processing
- Input validation with Pydantic models
- CORS support for frontend integration
- Comprehensive error handling

## Setup & Development

### Prerequisites

- Python 3.9 or higher
- OpenAI API key

### Installation

1. Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env with your OpenAI API key
```

### Running the Server

```bash
uvicorn app.main:app --reload
```

The API will be available at http://localhost:8000

### API Documentation

Once the server is running, you can access the auto-generated documentation:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Endpoints

- `POST /generate-theory-of-change/`: Generate a Theory of Change based on input data

## Testing

```bash
pytest
```
