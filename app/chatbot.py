from langchain_huggingface import HuggingFacePipeline
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.prompts import PromptTemplate
# from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline
from langchain_community.llms import HuggingFacePipeline
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline

# Load tokenizer and model
model_id = "google/flan-t5-base"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForSeq2SeqLM.from_pretrained(model_id)# tokenizer = AutoTokenizer.from_pretrained(model_id)
# # model = AutoModelForCausalLM.from_pretrained(model_id, device_map="cpu")
# model = AutoModelForSeq2SeqLM.from_pretrained(model_id)

# Use text2text-generation for clean outputs
pipe = pipeline(
    "text2text-generation",
    model=model,
    tokenizer=tokenizer,
    max_new_tokens=256,
    temperature=0.4,
    top_p=0.9,
    repetition_penalty=1.1,
)

llm = HuggingFacePipeline(pipeline=pipe)

# Initialize vector store
vectorstore = Chroma(
    persist_directory="./chroma_db",
    embedding_function=HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
)

chatbots = {}
PROMPT_TEMPLATE = """
Use the following restaurant info to answer the user question. Be brief and factual.

Context:
{context}

Question: {question}
Answer:
"""

# Prompt template without "Answer:" to avoid echoing
prompt = PromptTemplate(
    input_variables=["context", "question"],
    template=PROMPT_TEMPLATE.strip()
)

def get_chatbot(session_id: str):
    if session_id not in chatbots:
        memory = ConversationBufferMemory(
            memory_key="chat_history",
            return_messages=True,
            output_key="answer"
        )

        retriever = vectorstore.as_retriever(search_kwargs={"k": 2})


        chain = ConversationalRetrievalChain.from_llm(
            llm=llm,
            retriever=retriever,
            memory=memory,
            return_source_documents=False,
            combine_docs_chain_kwargs={"prompt": prompt},
            verbose=False
        )
        chatbots[session_id] = chain

    return chatbots[session_id]

def extract_final_answer(full_response: str) -> str:
    """Clean final output from LLM"""
    return full_response.strip()

def get_restaurant_response(query: str, session_id: str) -> dict:
    if not query.strip() or len(query) < 2:
        return {
            "response": "Please ask about FlameGrill Bistro's menu, hours, or location.",
            "session_id": session_id
        }

    bot = get_chatbot(session_id)
    try:
        result = bot({"question": query})
        answer = extract_final_answer(result["answer"])

        return {
            "response": answer if answer else "I don't have that information.",
            "session_id": session_id
        }

    except Exception:
        return {
            "response": "I can only answer questions about FlameGrill Bistro.",
            "session_id": session_id
        }
