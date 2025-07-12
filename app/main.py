from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from chatbot import get_chatbot
from schema import ChatRequest, ChatResponse
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

sessions = {}

# @app.post("/chat", response_model=ChatResponse)
# async def chat(request: ChatRequest):
#     session_id = request.session_id or str(uuid.uuid4())
#     chatbot = get_chatbot(session_id)
#     result = chatbot.invoke({"question": request.message})
#     answer = result["answer"]
#     return ChatResponse(response=answer, session_id=session_id)
@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    session_id = request.session_id or str(uuid.uuid4())
    chatbot = get_chatbot(session_id)
    result = chatbot({"question": request.message})
    answer = result["answer"].strip()
    return ChatResponse(response=answer, session_id=session_id)