FROM python:3.9-slim

WORKDIR /app

# Install system dependencies

RUN apt-get update && apt-get install -y \
 gcc python3-dev libglib2.0-0 libsm6 libxext6 libxrender-dev \
 && rm -rf /var/lib/apt/lists/\*

# Copy requirements first and install dependencies

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application files

COPY . .

# Expose FastAPI port

EXPOSE 8000

# ✅ Ingest on container run, NOT during build

CMD ["sh", "-c", "python ingest.py && uvicorn main:app --host 0.0.0.0 --port 8000"]
