# AI & LLM Tools

Curated list of useful AI development tools, frameworks, and services.

---

## Agent Frameworks

| Tool | Description | URL |
|------|-------------|-----|
| **LangGraph** | Stateful agent orchestration | https://langchain-ai.github.io/langgraph |
| **CrewAI** | Multi-agent collaboration | https://www.crewai.com/ |
| **PhiData** | Production agent framework | https://github.com/phidatahq/phidata |
| **AutoGen** | Microsoft multi-agent framework | https://microsoft.github.io/autogen |
| **PydanticAI** | Type-safe AI development | https://ai.pydantic.dev/ |
| **DSPy** | Programming (not prompting) LLMs | https://github.com/stanfordnlp/dspy |
| **n8n** | Visual workflow automation | https://n8n.io/ |
| **BASE AI** | Serverless autonomous agents | https://baseai.dev/ |

---

## RAG & Knowledge

| Tool | Description | URL |
|------|-------------|-----|
| **fast-graphrag** | Knowledge graph RAG | https://github.com/circlemind-ai/fast-graphrag |
| **Verba** | RAG with Weaviate | https://github.com/weaviate/Verba |
| **Turbopuffer** | Serverless vector DB | https://turbopuffer.com/ |
| **pgvector** | PostgreSQL vector search | Built into PostgreSQL |
| **Electric SQL** | Postgres sync engine | https://electric-sql.com/ |
| **Turso** | Hosted SQLite (edge) | https://turso.tech/ |

---

## Document Processing

| Tool | Description | URL |
|------|-------------|-----|
| **Docling** | Documents to markdown | https://github.com/DS4SD/docling |
| **MarkItDown** | Microsoft PDF converter | `pip install markitdown` |
| **Dolphin** | ByteDance PDF parser | https://github.com/bytedance/Dolphin |
| **Firecrawl** | Web crawler for LLMs | https://docs.firecrawl.dev |
| **OmniParse** | Universal document parser | https://github.com/adithya-s-k/omniparse |
| **repopack** | Git repo to markdown | https://github.com/yamadashy/repopack |
| **Unstract** | Agentic document intelligence | https://unstract.com/ |

---

## Observability & Testing

| Tool | Description | URL |
|------|-------------|-----|
| **Helicone** | LLM observability | https://github.com/Helicone/helicone |
| **Weights & Biases** | AI experiment tracking | https://wandb.ai/site |
| **Instructor** | Structured LLM outputs | https://github.com/jxnl/instructor |

---

## Model Providers

| Provider | Notes | URL |
|----------|-------|-----|
| **OpenAI** | GPT-4o, structured outputs | https://platform.openai.com |
| **Anthropic** | Claude, best for writing | https://console.anthropic.com |
| **Google AI Studio** | Gemini, large context | https://aistudio.google.com |
| **Together.xyz** | Pay-per-token hosting | https://api.together.xyz |
| **Ollama** | Run LLMs locally | https://ollama.com |
| **Cerebras** | Fast inference (450 tok/s) | https://cerebras.ai/inference |

---

## Browser & Automation

| Tool | Description | URL |
|------|-------------|-----|
| **Playwright MCP** | Claude Code browser control | `claude mcp add playwright` |
| **LaVague** | LLM generates Selenium | https://github.com/lavague-ai/LaVague |
| **Helium** | Simple browser automation | https://github.com/mherrmann/helium |

---

## Memory & Context

| Tool | Description | URL |
|------|-------------|-----|
| **Memary** | Human-like agent memory | https://github.com/kingjulio8238/Memary |
| **CogCache** | LLM response caching | https://touchcast.com/cogcache |
| **Memvid** | Video-encoded text search | Encodes text into video for retrieval |

---

## Development Patterns

### Model Selection Guide
- **GPT-4o-mini**: Intent classification, cheap & fast
- **Gemini**: Large context windows, long documents
- **Claude**: Human-written outputs (emails, summaries)

### Key Principles
- 95% of profitable AI tools are **automations with smart features**, not full agents
- Automations are predictable; agents are complex and expensive
- **RAG** for knowledge (up-to-date info, Q&A bots)
- **Fine-tuning** for behavior/style (specialized tasks)

### Structured Outputs
- Property order matters in schemas
- Include "reason" field at top for chain-of-thought
- Prompt chaining beats stepwise prompting

### Reflection Prompting
```xml
<thinking>
Step-by-step reasoning here
</thinking>
<reflection>
Check for errors or missing considerations
</reflection>
<output>
Final answer
</output>
```

---

## Learning Resources

| Resource | URL |
|----------|-----|
| LLM Visualization | https://bbycroft.net/llm |
| Nicholas Carlini Prompts | https://nicholas.carlini.com/writing/2024/how-i-use-ai.html |
| Transformer Explainer | Interactive learning tool |

---

## Related

- [[AI-Assisted Development]] - Working with AI coding assistants
- [[Developer Tools]] - General development tools
