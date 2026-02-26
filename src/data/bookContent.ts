export interface Resource {
  type: 'article' | 'video' | 'tool' | 'docs';
  title: string;
  url: string;
  description: string;
}

export interface DayContent {
  day: number;
  week: number;
  weekTitle: string;
  weekGoal: string;
  title: string;
  subtitle: string;
  concept: string;
  topics: string[];
  todayTask: string;
  resources: Resource[];
  weekEndQuote?: string;
}

export const WEEK_INTROS: Record<number, { tagline: string; opening: string }> = {
  1: {
    tagline: 'Build Before You Feel Ready',
    opening: 'Most people wait until they fully understand AI before they build anything. That\'s why most people build nothing. This week you ship your first AI app -- publicly -- before you feel ready.',
  },
  2: {
    tagline: 'Retrieval Is Where Engineers Are Made',
    opening: 'Toy demos end here. Real systems begin. This week you learn the retrieval layer -- the thing that separates AI apps that actually work from ones that hallucinate constantly.',
  },
  3: {
    tagline: 'Agents and Decision Systems',
    opening: 'This is where most people get confused. You won\'t. This week you build AI systems that don\'t just answer questions -- they take actions, use tools, and make decisions.',
  },
  4: {
    tagline: 'Production Thinking',
    opening: 'This is what companies actually pay for. This week you learn evaluation, monitoring, guardrails, and debugging -- the skills that turn a demo into a product people trust.',
  },
  5: {
    tagline: 'Ship Something Real',
    opening: 'No fake portfolio pieces. No sample datasets. You pick a real problem, build a real solution, deploy it properly, and write about what you learned. This is how careers are made.',
  },
};

export const BOOK_CONTENT: DayContent[] = [
  // ─── WEEK 1 ─────────────────────────────────────────────────────────────
  {
    day: 1,
    week: 1,
    weekTitle: 'Build Before You Feel Ready',
    weekGoal: 'Deploy your first AI app publicly.',
    title: 'How LLMs Actually Work',
    subtitle: 'The foundation everything else builds on.',
    concept:
      'Large Language Models are not magic -- they are probability machines. Given a sequence of tokens, they predict what comes next. They do not think. They do not understand. They pattern-match at massive scale across trillions of examples. Understanding this changes how you build with them: you stop asking "will it know this?" and start asking "does it have enough context?"',
    topics: [
      'Tokens: the atomic units of LLM input and output',
      'Context windows: the model\'s working memory',
      'Temperature and top-p: controlling randomness',
      'Why hallucinations happen (and always will)',
      'The difference between base models and fine-tuned models',
      'Why bigger is not always better',
    ],
    todayTask:
      'Open the OpenAI Playground. Set temperature to 0, ask a question, note the answer. Set temperature to 1, ask the same question. See what changed and why.',
    resources: [
      {
        type: 'video',
        title: 'Intro to Large Language Models -- Andrej Karpathy',
        url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g',
        description: 'The single best 1-hour LLM primer that exists. Watch this before anything else.',
      },
      {
        type: 'article',
        title: 'The Illustrated Transformer -- Jay Alammar',
        url: 'https://jalammar.github.io/illustrated-transformer/',
        description: 'Visual explanation of how transformers work. Read it once, understand it forever.',
      },
      {
        type: 'tool',
        title: 'OpenAI Tokenizer',
        url: 'https://platform.openai.com/tokenizer',
        description: 'Paste any text and see how it gets split into tokens in real time.',
      },
      {
        type: 'article',
        title: 'Large Language Models Explained with a Minimum of Math',
        url: 'https://www.understandingai.org/p/large-language-models-explained-with',
        description: 'Plain English explanation of how LLMs are trained and how they predict text.',
      },
      {
        type: 'tool',
        title: 'OpenAI Playground',
        url: 'https://platform.openai.com/playground',
        description: 'Your lab for today. Experiment with temperature and system prompts before writing any code.',
      },
    ],
  },
  {
    day: 2,
    week: 1,
    weekTitle: 'Build Before You Feel Ready',
    weekGoal: 'Deploy your first AI app publicly.',
    title: 'Prompt Structures That Matter',
    subtitle: 'How you talk to the model determines what you get.',
    concept:
      'The model has no idea what you want unless you tell it. System prompts set context and persona. User prompts define the task. Few-shot examples teach by demonstration. Output format constraints make responses usable in code. Most bad LLM outputs are caused by bad prompts -- fix the prompt before you blame the model.',
    topics: [
      'System prompts: setting the stage and persona',
      'Few-shot prompting: teaching by example',
      'Chain-of-thought: asking the model to reason step by step',
      'Output format constraints (JSON, markdown, lists)',
      'Role assignment and its effect on behavior',
      'Prompt length vs. quality tradeoffs',
    ],
    todayTask:
      'Write a system prompt for a resume reviewer. Add 3 few-shot examples. Compare output quality with and without the examples. The difference will shock you.',
    resources: [
      {
        type: 'article',
        title: 'Prompt Engineering Guide',
        url: 'https://www.promptingguide.ai/',
        description: 'The most comprehensive free guide on prompting. Techniques from zero-shot to chain-of-thought.',
      },
      {
        type: 'docs',
        title: 'Anthropic Prompt Engineering Overview',
        url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
        description: "Claude\'s prompting techniques that work across models.",
      },
      {
        type: 'docs',
        title: 'OpenAI Prompt Engineering Guide',
        url: 'https://platform.openai.com/docs/guides/prompt-engineering',
        description: "Official OpenAI guide. Covers tactics that improve results reliably.",
      },
      {
        type: 'article',
        title: 'Chain-of-Thought Prompting Paper (2022)',
        url: 'https://arxiv.org/abs/2201.11903',
        description: "The original paper showing why 'think step by step' works so well. Read the abstract and conclusion.",
      },
      {
        type: 'video',
        title: 'Prompt Engineering for Developers -- freeCodeCamp',
        url: 'https://www.youtube.com/watch?v=_ZvnD73m40o',
        description: 'Practical walkthrough of prompt techniques with code examples.',
      },
    ],
  },
  {
    day: 3,
    week: 1,
    weekTitle: 'Build Before You Feel Ready',
    weekGoal: 'Deploy your first AI app publicly.',
    title: 'Structured Outputs',
    subtitle: 'Make the model return exactly what your code expects.',
    concept:
      'Raw text from LLMs breaks production systems. If your code expects a JSON object and the model returns "Sure! Here\'s the data: {...}" -- your parser crashes. Structured outputs force models to return exact shapes: typed fields, required properties, constrained values. This is what makes AI reliable inside real software.',
    topics: [
      'Why unstructured output breaks production pipelines',
      'JSON Schema: defining the shape of your data',
      'Pydantic models for type-safe AI output',
      "OpenAI\'s native structured output mode",
      'Instructor library: the easiest way to get structured output',
      'Retry logic when parsing fails',
    ],
    todayTask:
      'Use OpenAI structured output mode to extract name, email, skills, and years of experience from a sample resume. Return it as fully typed JSON with no extra text.',
    resources: [
      {
        type: 'docs',
        title: 'OpenAI Structured Outputs',
        url: 'https://platform.openai.com/docs/guides/structured-outputs',
        description: 'Official guide. This single feature eliminates most parsing headaches.',
      },
      {
        type: 'docs',
        title: 'Pydantic Documentation',
        url: 'https://docs.pydantic.dev/latest/',
        description: 'The Python library for defining data shapes. Works perfectly with LLM outputs.',
      },
      {
        type: 'tool',
        title: 'Instructor Library',
        url: 'https://python.useinstructor.com/',
        description: 'The best library for structured LLM outputs. Used in production everywhere.',
      },
      {
        type: 'article',
        title: 'JSON Schema -- Getting Started',
        url: 'https://json-schema.org/learn/getting-started-step-by-step',
        description: 'Learn JSON Schema from scratch in under 20 minutes.',
      },
      {
        type: 'video',
        title: 'Structured Outputs with Instructor -- Tutorial',
        url: 'https://www.youtube.com/watch?v=yj-wSRJwrrc',
        description: 'Live coding session showing how to use Instructor for reliable structured output.',
      },
    ],
  },
  {
    day: 4,
    week: 1,
    weekTitle: 'Build Before You Feel Ready',
    weekGoal: 'Deploy your first AI app publicly.',
    title: 'API Integration',
    subtitle: 'Stop using the playground. Start using the API.',
    concept:
      'The Playground is for exploration. Real products use APIs. Today you write Python code that calls a model, handles the response, manages errors, and streams output. Every AI project you build will use this exact pattern -- get it clean and reusable now. Never hardcode API keys.',
    topics: [
      'Installing OpenAI and Anthropic Python SDKs',
      'API keys and environment variables (never hardcode)',
      'Chat completions: the core API pattern',
      'Streaming responses for better perceived UX',
      'Rate limits, retries, and exponential backoff',
      'Error types: network, model, content policy',
    ],
    todayTask:
      'Write a Python function that takes user input, calls an LLM, streams the response token by token, and handles 3 different error types gracefully.',
    resources: [
      {
        type: 'docs',
        title: 'OpenAI Python SDK -- GitHub',
        url: 'https://github.com/openai/openai-python',
        description: 'Official SDK. Read the README carefully -- the patterns are all there.',
      },
      {
        type: 'docs',
        title: 'Anthropic Python SDK',
        url: 'https://github.com/anthropics/anthropic-sdk-python',
        description: "Claude\'s SDK. Same patterns, slightly different API shape.",
      },
      {
        type: 'article',
        title: 'OpenAI Cookbook -- All Examples',
        url: 'https://cookbook.openai.com/',
        description: 'Hundreds of practical examples. Search for exactly what you are trying to build.',
      },
      {
        type: 'tool',
        title: 'python-dotenv',
        url: 'https://pypi.org/project/python-dotenv/',
        description: 'Load .env files cleanly in Python. Your API keys stay out of source control.',
      },
      {
        type: 'video',
        title: 'OpenAI API Full Tutorial -- Python',
        url: 'https://www.youtube.com/watch?v=nhgFex5ehYo',
        description: 'Hands-on walkthrough of calling OpenAI from Python with real examples.',
      },
    ],
  },
  {
    day: 5,
    week: 1,
    weekTitle: 'Build Before You Feel Ready',
    weekGoal: 'Deploy your first AI app publicly.',
    title: 'Build a Small Tool',
    subtitle: 'Something real. Something useful. Something yours.',
    concept:
      'The gap between learning AI and building with AI is shipping. Pick one small problem and solve it with an LLM today. It does not need to be impressive -- it needs to exist. A resume analyzer, tweet improver, idea generator, email rewriter. Any tool that takes real input and returns useful output counts.',
    topics: [
      'Picking a scope you can finish in one day',
      'Designing input/output before writing code',
      'Iterating on prompts based on actual outputs',
      'Error handling for unexpected inputs',
      'Writing a README that explains what it does',
      'Sharing your work and getting first feedback',
    ],
    todayTask:
      'Build one real tool from scratch. It must take user input, call an LLM, and return something useful. Share it with at least one person by end of day.',
    resources: [
      {
        type: 'article',
        title: 'LangChain -- Build Your First LLM App',
        url: 'https://python.langchain.com/docs/tutorials/llm_chain/',
        description: 'Quickstart for building with LangChain. Good if you want to use the framework.',
      },
      {
        type: 'tool',
        title: 'Replit -- Code in Browser',
        url: 'https://replit.com/',
        description: 'No local setup needed. Code Python in the browser. Good for quick prototypes.',
      },
      {
        type: 'article',
        title: 'OpenAI Cookbook -- Example Projects',
        url: 'https://cookbook.openai.com/',
        description: 'Real examples of AI tools you can use as starting points.',
      },
      {
        type: 'video',
        title: 'Build an AI App in 60 Minutes',
        url: 'https://www.youtube.com/watch?v=hm9aVPNq2J0',
        description: 'Fast-paced tutorial building a complete AI tool from scratch.',
      },
      {
        type: 'tool',
        title: 'Google Colab',
        url: 'https://colab.research.google.com/',
        description: 'Free Jupyter notebooks in the cloud. Great for building and sharing AI prototypes.',
      },
    ],
  },
  {
    day: 6,
    week: 1,
    weekTitle: 'Build Before You Feel Ready',
    weekGoal: 'Deploy your first AI app publicly.',
    title: 'Add a Simple UI',
    subtitle: 'Your tool deserves a face.',
    concept:
      "Nobody wants to use a Python script. A UI transforms your tool from a demo into a product. Streamlit is the fastest way to add a frontend to a Python AI app -- you can go from script to web app in under an hour. No HTML, no CSS, no JavaScript required. You write Python, you get a working interface.",
    topics: [
      'Streamlit basics: inputs, outputs, layout',
      'Session state for multi-turn conversations',
      'File uploaders for document processing',
      'Progress bars and spinners for UX',
      'Streaming text output in Streamlit',
      'When to move beyond Streamlit to a real frontend',
    ],
    todayTask:
      "Wrap yesterday\'s tool in a Streamlit UI. Add an input field, a submit button, and display output cleanly. Add a spinner while the LLM is thinking.",
    resources: [
      {
        type: 'docs',
        title: 'Streamlit Documentation',
        url: 'https://docs.streamlit.io/',
        description: 'Official docs. Searchable and full of examples for every component.',
      },
      {
        type: 'video',
        title: 'Streamlit in 12 Minutes -- Tutorial',
        url: 'https://www.youtube.com/watch?v=D0D4Pa22iG0',
        description: 'Best intro video for Streamlit. Watch before you start coding.',
      },
      {
        type: 'docs',
        title: 'Build a Chatbot with Streamlit',
        url: 'https://docs.streamlit.io/develop/tutorials/llms/build-conversational-apps',
        description: 'Official tutorial for chat-style AI apps. The exact pattern you will use.',
      },
      {
        type: 'tool',
        title: 'Streamlit Component Gallery',
        url: 'https://streamlit.io/components',
        description: 'Extra community components for charts, code editors, maps, and more.',
      },
      {
        type: 'article',
        title: 'Gradio -- Alternative to Streamlit',
        url: 'https://www.gradio.app/guides/quickstart',
        description: 'Another fast UI option. More focused on ML demos and model interfaces.',
      },
    ],
  },
  {
    day: 7,
    week: 1,
    weekTitle: 'Build Before You Feel Ready',
    weekGoal: 'Deploy your first AI app publicly.',
    title: 'Deploy -- Make It Live',
    subtitle: 'A private project is just a file on your computer.',
    concept:
      'Most people never reach this point. They build locally, show screenshots, and call it done. You are not doing that. Today you put your app on the internet where anyone can use it. This moment -- seeing your app at a public URL -- changes how you think about shipping forever.',
    topics: [
      'Streamlit Community Cloud (free, connects to GitHub)',
      'Environment variables in production',
      'GitHub integration for automatic deploys',
      'Basic monitoring after deploy',
      'Getting real user feedback quickly',
      'What to fix first based on feedback',
    ],
    todayTask:
      'Deploy your app to Streamlit Cloud or Render. Verify it works with a real URL. Share the link with at least one person and ask them to try it.',
    weekEndQuote: 'Most people never reach this point. You already did.',
    resources: [
      {
        type: 'docs',
        title: 'Streamlit Community Cloud -- Deploy',
        url: 'https://docs.streamlit.io/streamlit-community-cloud',
        description: 'Free hosting for Streamlit apps. Connected to your GitHub repo automatically.',
      },
      {
        type: 'docs',
        title: 'Render.com -- Deploy Streamlit',
        url: 'https://render.com/docs/deploy-streamlit',
        description: 'Alternative host with more flexibility. Free tier available.',
      },
      {
        type: 'video',
        title: 'Deploy a Streamlit App to the Cloud',
        url: 'https://www.youtube.com/watch?v=HKoOBiAaHGg',
        description: 'Step-by-step deployment guide. Follow along exactly.',
      },
      {
        type: 'tool',
        title: 'Railway.app',
        url: 'https://railway.app/',
        description: 'Another great option for deploying Python apps. Fast and simple interface.',
      },
      {
        type: 'tool',
        title: 'readme.so -- Write Your README',
        url: 'https://readme.so/',
        description: 'Your deployed app needs a README. This tool helps you write one quickly.',
      },
    ],
  },

  // ─── WEEK 2 ─────────────────────────────────────────────────────────────
  {
    day: 8,
    week: 2,
    weekTitle: 'Retrieval Is Where Engineers Are Made',
    weekGoal: 'Build a system that retrieves real information intelligently.',
    title: 'Embeddings',
    subtitle: 'How meaning becomes math.',
    concept:
      'Embeddings convert text into vectors -- lists of numbers that represent semantic meaning. Similar sentences produce similar vectors. This is how search becomes smart: instead of matching keywords, you match meaning. Every RAG system, semantic search engine, and recommendation system built on LLMs starts here.',
    topics: [
      'What embeddings are and why they work',
      'Cosine similarity: measuring semantic distance',
      'Embedding models: OpenAI, Cohere, open-source',
      'Dimensions, size, and quality tradeoffs',
      'Embedding documents vs. sentences vs. chunks',
      'Use cases: search, clustering, deduplication',
    ],
    todayTask:
      'Embed 10 sentences using OpenAI embeddings. Compute cosine similarity between all pairs. Identify the most and least similar pairs. Verify the results make intuitive sense.',
    resources: [
      {
        type: 'docs',
        title: 'OpenAI Embeddings Guide',
        url: 'https://platform.openai.com/docs/guides/embeddings',
        description: 'Official guide showing how to generate and compare embeddings from the API.',
      },
      {
        type: 'article',
        title: 'The Illustrated Word2Vec -- Jay Alammar',
        url: 'https://jalammar.github.io/illustrated-word2vec/',
        description: "Jay Alammar\'s visual guide to word embeddings. Masterclass level clarity.",
      },
      {
        type: 'video',
        title: 'Word Embeddings Explained Visually',
        url: 'https://www.youtube.com/watch?v=viZrOnJclY0',
        description: 'Visual explanation of how word vectors capture meaning in high-dimensional space.',
      },
      {
        type: 'article',
        title: 'Text Embeddings -- Cohere Explanation',
        url: 'https://txt.cohere.com/text-embeddings/',
        description: "Cohere\'s clear breakdown of what embeddings are and why they work.",
      },
      {
        type: 'tool',
        title: 'Nomic Atlas -- Visualize Embeddings',
        url: 'https://atlas.nomic.ai/',
        description: 'Visualize thousands of embeddings in 2D. See how meaning clusters.',
      },
    ],
  },
  {
    day: 9,
    week: 2,
    weekTitle: 'Retrieval Is Where Engineers Are Made',
    weekGoal: 'Build a system that retrieves real information intelligently.',
    title: 'Vector Databases',
    subtitle: 'Store billions of vectors. Query in milliseconds.',
    concept:
      "You can\'t store embeddings in a regular SQL database and search them efficiently. Vector databases are purpose-built for approximate nearest neighbor search at scale. You embed your documents, store them, and when a user asks a question -- you embed that too and find the most similar documents. That is the core of every RAG system.",
    topics: [
      'Approximate Nearest Neighbor (ANN) search',
      'HNSW and other indexing algorithms',
      'Pinecone, ChromaDB, Weaviate, Qdrant -- when to use each',
      'Metadata filtering on top of vector search',
      'Managed vs. self-hosted tradeoffs',
      'Cost and scaling considerations',
    ],
    todayTask:
      'Set up ChromaDB locally. Embed 50 text chunks from any document. Run 5 different queries and inspect the retrieved results. Notice where it gets it right and wrong.',
    resources: [
      {
        type: 'docs',
        title: 'ChromaDB Getting Started',
        url: 'https://docs.trychroma.com/getting-started',
        description: 'Easiest local vector DB. No account needed. Perfect for learning.',
      },
      {
        type: 'docs',
        title: 'Pinecone Quickstart',
        url: 'https://docs.pinecone.io/guides/get-started/quickstart',
        description: 'Best managed vector DB. Free tier available for development.',
      },
      {
        type: 'video',
        title: 'Vector Databases Explained -- Full Tutorial',
        url: 'https://www.youtube.com/watch?v=dN0lsF2cvm4',
        description: 'Clear explanation of what vector databases are and how ANN search works.',
      },
      {
        type: 'docs',
        title: 'Qdrant Documentation',
        url: 'https://qdrant.tech/documentation/',
        description: 'High-performance vector DB. Excellent free tier. Great for production.',
      },
      {
        type: 'article',
        title: 'Vector Database Comparison',
        url: 'https://benchmark.vectorview.ai/vectordbs.html',
        description: 'Benchmark comparison of major vector databases on speed, cost, and features.',
      },
    ],
  },
  {
    day: 10,
    week: 2,
    weekTitle: 'Retrieval Is Where Engineers Are Made',
    weekGoal: 'Build a system that retrieves real information intelligently.',
    title: 'Chunking Strategies',
    subtitle: 'This single decision changes retrieval quality drastically.',
    concept:
      'How you split documents into chunks is one of the most underrated decisions in RAG. Chunks too large: slow and imprecise. Chunks too small: lose context. Chunks that split mid-sentence: garbage retrieval. Different content types need different strategies -- PDFs, markdown, code, and HTML all behave differently.',
    topics: [
      'Fixed-size vs. semantic chunking',
      'Chunk overlap and why it matters',
      'Recursive character text splitters',
      'Sentence boundary detection',
      'Document-aware splitting (headers, sections)',
      'Chunk size effect on embedding and retrieval quality',
    ],
    todayTask:
      'Take a long article. Chunk it 3 different ways: fixed-size, sentence-based, and semantic. Embed each version. Run the same 5 queries and compare which version returns better results.',
    resources: [
      {
        type: 'article',
        title: 'Chunking Strategies for RAG -- Pinecone',
        url: 'https://www.pinecone.io/learn/chunking-strategies/',
        description: 'The definitive guide to chunking. Practical, opinionated, and correct.',
      },
      {
        type: 'docs',
        title: 'LangChain Text Splitters',
        url: 'https://python.langchain.com/docs/how_to/split_by_token/',
        description: 'All the text splitters LangChain provides and when to use each one.',
      },
      {
        type: 'video',
        title: 'Chunking Strategies -- Greg Kamradt',
        url: 'https://www.youtube.com/watch?v=8OJC21T2SL4',
        description: "Greg Kamradt\'s deep dive on what chunking really does to retrieval quality.",
      },
      {
        type: 'docs',
        title: 'Semantic Chunking -- LlamaIndex',
        url: 'https://docs.llamaindex.ai/en/stable/examples/node_parsers/semantic_chunking/',
        description: "LlamaIndex\'s implementation of semantic chunking -- splits on meaning, not length.",
      },
      {
        type: 'tool',
        title: 'Chunkviz -- Visualize Chunking',
        url: 'https://chunkviz.up.railway.app/',
        description: 'Interactive tool to see how different chunking settings split your text.',
      },
    ],
  },
  {
    day: 11,
    week: 2,
    weekTitle: 'Retrieval Is Where Engineers Are Made',
    weekGoal: 'Build a system that retrieves real information intelligently.',
    title: 'RAG Architecture',
    subtitle: 'Retrieval + Generation. The pipeline that runs production AI.',
    concept:
      "RAG combines search and generation. User asks a question → embed the question → find similar chunks in vector DB → inject those chunks into the LLM context → generate an answer grounded in real data. This eliminates hallucinations on your specific domain and keeps answers accurate, traceable, and updatable without retraining the model.",
    topics: [
      'The full RAG pipeline end to end',
      'Indexing phase: load, chunk, embed, store',
      'Retrieval phase: query embedding + similarity search',
      'Augmentation: prompt construction with retrieved context',
      'Generation: grounded LLM response',
      'Naive RAG vs. advanced RAG patterns',
    ],
    todayTask:
      'Draw the full RAG pipeline on paper. Then implement it from scratch without any frameworks. Raw Python, raw API calls. Understanding the primitives is essential.',
    resources: [
      {
        type: 'article',
        title: 'What Is Retrieval Augmented Generation? -- AWS',
        url: 'https://aws.amazon.com/what-is/retrieval-augmented-generation/',
        description: "AWS\'s clear explanation of RAG for engineers new to the concept.",
      },
      {
        type: 'video',
        title: 'RAG From Scratch -- Full Course',
        url: 'https://www.youtube.com/watch?v=sVcwVQRHIc8',
        description: 'LangChain team builds a RAG system step by step. Follow along.',
      },
      {
        type: 'article',
        title: 'LangChain RAG Tutorial',
        url: 'https://python.langchain.com/docs/tutorials/rag/',
        description: 'Full tutorial building a RAG system with LangChain. Step by step.',
      },
      {
        type: 'article',
        title: 'Retrieval-Augmented Generation -- Original Paper',
        url: 'https://arxiv.org/abs/2005.11401',
        description: "The original RAG paper by Facebook AI Research. Read the intro and conclusion.",
      },
      {
        type: 'docs',
        title: 'LlamaIndex RAG Starter',
        url: 'https://docs.llamaindex.ai/en/stable/getting_started/starter_example/',
        description: "LlamaIndex\'s quickstart. Alternative to LangChain with different design philosophy.",
      },
    ],
  },
  {
    day: 12,
    week: 2,
    weekTitle: 'Retrieval Is Where Engineers Are Made',
    weekGoal: 'Build a system that retrieves real information intelligently.',
    title: 'Build a RAG System',
    subtitle: 'Real documents. Real queries. Real answers.',
    concept:
      "You have learned all the pieces. Today you combine them into something real. Pick actual documents -- a product manual, research papers, a legal contract, your own notes. Build a RAG system that answers questions from those documents accurately. The goal is a working system, not a perfect one.",
    topics: [
      'Document loading strategies (PDF, web, markdown)',
      'Designing your indexing pipeline',
      'Prompt templates for RAG-grounded answers',
      'Source attribution in responses',
      'Testing with adversarial queries',
      'Handling out-of-scope questions gracefully',
    ],
    todayTask:
      'Build a RAG system over a real PDF or set of articles you choose. It must accurately answer at least 10 factual questions from the document.',
    resources: [
      {
        type: 'video',
        title: 'Build a Complete RAG App -- Tutorial',
        url: 'https://www.youtube.com/watch?v=tcqEUSNCn8I',
        description: 'Full tutorial building a complete RAG application from scratch.',
      },
      {
        type: 'docs',
        title: 'LangChain Document Loaders',
        url: 'https://python.langchain.com/docs/integrations/document_loaders/',
        description: 'All the loaders: PDFs, web pages, Notion, Google Drive, Confluence, and more.',
      },
      {
        type: 'tool',
        title: 'PyMuPDF -- Parse PDFs',
        url: 'https://pymupdf.readthedocs.io/en/latest/',
        description: 'Best Python library for reading PDFs. Handles complex layouts and tables.',
      },
      {
        type: 'tool',
        title: 'Unstructured.io',
        url: 'https://unstructured.io/',
        description: 'Parse messy documents (PDFs, HTML, emails) into clean text for RAG.',
      },
      {
        type: 'article',
        title: 'RAG Best Practices -- Pinecone',
        url: 'https://www.pinecone.io/learn/retrieval-augmented-generation/',
        description: 'Pinecone guide on RAG best practices for production systems.',
      },
    ],
  },
  {
    day: 13,
    week: 2,
    weekTitle: 'Retrieval Is Where Engineers Are Made',
    weekGoal: 'Build a system that retrieves real information intelligently.',
    title: 'Improve Retrieval',
    subtitle: 'Getting results is easy. Getting the right results is the skill.',
    concept:
      "Basic RAG retrieves the top-k most similar chunks. Advanced RAG goes further: rewrite queries before searching, re-rank results by relevance, filter by metadata, use hybrid search (BM25 + vectors), and handle multi-hop questions. These techniques separate demo-quality from production-quality systems.",
    topics: [
      'Query rewriting and HyDE (Hypothetical Document Embeddings)',
      'Re-ranking with cross-encoders',
      'Hybrid search: keyword (BM25) + dense vectors',
      'Metadata filtering for targeted retrieval',
      'Parent-child chunk retrieval',
      'Multi-query retrieval to improve recall',
    ],
    todayTask:
      "Take yesterday\'s RAG system. Implement one advanced technique (HyDE, re-ranking, or hybrid search). Measure whether retrieval quality improved on your test queries.",
    resources: [
      {
        type: 'article',
        title: 'Advanced RAG Techniques -- Pinecone',
        url: 'https://www.pinecone.io/learn/advanced-rag/',
        description: "Pinecone\'s guide on advanced RAG patterns. Practical and well illustrated.",
      },
      {
        type: 'docs',
        title: 'Cohere Reranker API',
        url: 'https://docs.cohere.com/docs/reranking',
        description: "Cohere\'s reranker dramatically improves precision on retrieved results.",
      },
      {
        type: 'article',
        title: 'HyDE -- Hypothetical Document Embeddings',
        url: 'https://arxiv.org/abs/2212.10496',
        description: "The original HyDE paper. Generate a hypothetical answer, then search for it.",
      },
      {
        type: 'docs',
        title: 'LangChain MultiQueryRetriever',
        url: 'https://python.langchain.com/docs/how_to/MultiQueryRetriever/',
        description: 'Generate multiple query variants automatically to improve recall.',
      },
      {
        type: 'article',
        title: 'Hybrid Search Explained -- Pinecone',
        url: 'https://www.pinecone.io/learn/hybrid-search-intro/',
        description: 'Why combining BM25 with dense vectors outperforms either method alone.',
      },
    ],
  },
  {
    day: 14,
    week: 2,
    weekTitle: 'Retrieval Is Where Engineers Are Made',
    weekGoal: 'Build a system that retrieves real information intelligently.',
    title: 'Add Memory',
    subtitle: 'Make your system remember who it is talking to.',
    concept:
      'Stateless AI is fine for one-shot queries. Real products need memory. Short-term memory stores conversation history within a session. Long-term memory persists user preferences and facts across sessions. The tricky part: context windows are finite, so you need smart summarization and selective retrieval of past context.',
    topics: [
      'In-context memory: conversation history management',
      'Summarization buffers for long conversations',
      'Episodic memory with vector storage',
      'User-level vs. session-level memory',
      'Memory retrieval strategies',
      'Privacy and data retention considerations',
    ],
    todayTask:
      'Add conversation memory to your RAG app. The system should remember facts from earlier in the conversation and use them to answer follow-up questions without being re-told.',
    weekEndQuote: "Now you\'re solving real problems. Not playing with prompts.",
    resources: [
      {
        type: 'docs',
        title: 'LangChain Chatbot Memory',
        url: 'https://python.langchain.com/docs/how_to/chatbots_memory/',
        description: 'How to add different types of memory to chatbot applications.',
      },
      {
        type: 'docs',
        title: 'Mem0 -- Memory Layer for AI',
        url: 'https://docs.mem0.ai/',
        description: 'Dedicated memory layer for AI apps. Plug it into any LLM workflow.',
      },
      {
        type: 'video',
        title: 'Adding Memory to AI Chatbots',
        url: 'https://www.youtube.com/watch?v=cFBdVRCbUMI',
        description: 'Practical tutorial on implementing conversation memory with LangChain.',
      },
      {
        type: 'article',
        title: 'Memory in LLM-Powered Agents -- Lilian Weng',
        url: 'https://lilianweng.github.io/posts/2023-06-23-agent/',
        description: "Lilian Weng\'s analysis of memory patterns in agent systems. Essential reading.",
      },
      {
        type: 'docs',
        title: 'Zep Memory -- Production AI Memory',
        url: 'https://docs.getzep.com/',
        description: 'Production-ready memory for AI applications. Stores and retrieves efficiently.',
      },
    ],
  },

  // ─── WEEK 3 ─────────────────────────────────────────────────────────────
  {
    day: 15,
    week: 3,
    weekTitle: 'Agents and Decision Systems',
    weekGoal: 'Build AI systems that take actions, not just answer questions.',
    title: 'Tool Calling',
    subtitle: 'Give the model hands.',
    concept:
      "Tool calling (function calling) lets LLMs interact with the outside world. The model doesn\'t execute code -- it generates structured JSON describing which tool to call and with what arguments. Your code runs the tool and feeds results back. This makes AI genuinely useful: search the web, query databases, send emails, run calculations.",
    topics: [
      'How function calling works under the hood',
      'Defining tools with JSON schemas',
      'The tool use loop: request → execute → return result',
      'Parallel tool calling for efficiency',
      'Error handling when tools fail',
      'Security: what tools should you expose?',
    ],
    todayTask:
      'Give an LLM two tools: a calculator and a weather API. Watch it decide which tool to call for different user queries. Log the tool call JSON it generates.',
    resources: [
      {
        type: 'docs',
        title: 'OpenAI Function Calling Guide',
        url: 'https://platform.openai.com/docs/guides/function-calling',
        description: 'Official guide with complete examples. This is the pattern to internalize.',
      },
      {
        type: 'docs',
        title: 'Anthropic Tool Use Guide',
        url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use',
        description: "Claude\'s tool use implementation. Same concept, slightly different syntax.",
      },
      {
        type: 'video',
        title: 'OpenAI Function Calling -- Full Tutorial',
        url: 'https://www.youtube.com/watch?v=aqdWSYWC_LI',
        description: 'End-to-end tutorial on function calling with practical real-world examples.',
      },
      {
        type: 'docs',
        title: 'LangChain Tools Concept',
        url: 'https://python.langchain.com/docs/concepts/tools/',
        description: "LangChain\'s tool abstraction and built-in tool library.",
      },
      {
        type: 'article',
        title: 'Function Calling Examples -- OpenAI Cookbook',
        url: 'https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models',
        description: 'Complete worked examples of function calling with real tool integrations.',
      },
    ],
  },
  {
    day: 16,
    week: 3,
    weekTitle: 'Agents and Decision Systems',
    weekGoal: 'Build AI systems that take actions, not just answer questions.',
    title: 'Function Schemas',
    subtitle: 'Clean tool definitions make smart agents.',
    concept:
      "The quality of your function schemas determines how well the model uses your tools. The model reads your schema like documentation -- write it that way. Good schemas have clear names, precise descriptions, typed parameters, and sensible constraints. Bad schemas have vague names, missing descriptions, and too many parameters crammed together.",
    topics: [
      'Naming conventions for functions and parameters',
      'Description quality and its effect on tool selection',
      'Required vs. optional parameters',
      'Enums for constrained categorical inputs',
      'Nested objects and array types',
      'Testing tool selection across many query types',
    ],
    todayTask:
      'Design 3 tools for a travel booking agent: search flights, check hotel availability, book a reservation. Write clean schemas. Test which queries trigger which tools.',
    resources: [
      {
        type: 'article',
        title: 'Understanding JSON Schema',
        url: 'https://json-schema.org/understanding-json-schema/',
        description: 'Complete reference for JSON Schema types, constraints, and formats.',
      },
      {
        type: 'docs',
        title: 'Pydantic JSON Schema Generation',
        url: 'https://docs.pydantic.dev/latest/concepts/json_schema/',
        description: 'Generate tool schemas automatically from Pydantic models. Much less error-prone.',
      },
      {
        type: 'article',
        title: 'Function Calling Best Practices -- OpenAI',
        url: 'https://platform.openai.com/docs/guides/function-calling#best-practices',
        description: 'When to use one tool vs. many, how to name things, error handling patterns.',
      },
      {
        type: 'tool',
        title: 'JSONSchema.net Validator',
        url: 'https://www.jsonschema.net/',
        description: 'Validate and preview JSON schemas in the browser. Catch errors before runtime.',
      },
      {
        type: 'video',
        title: 'Designing Good Tool Schemas for Agents',
        url: 'https://www.youtube.com/watch?v=U1mQ_3GhXM0',
        description: 'How to write tool schemas that models actually use correctly.',
      },
    ],
  },
  {
    day: 17,
    week: 3,
    weekTitle: 'Agents and Decision Systems',
    weekGoal: 'Build AI systems that take actions, not just answer questions.',
    title: 'Multi-Step Workflows',
    subtitle: 'Break big tasks into chains of small ones.',
    concept:
      'Complex tasks require planning. A research agent might: search → read → summarize → cross-reference → synthesize. That is 5 steps, each informing the next. Orchestrating this reliably is where LangGraph shines. You define the graph -- nodes for actions and edges for transitions -- and the model navigates it.',
    topics: [
      'Sequential chains vs. branching workflows',
      'State management between steps',
      'Conditional routing based on LLM output',
      'LangGraph fundamentals: nodes, edges, state',
      'Handling partial failures in pipelines',
      'Human-in-the-loop interrupts',
    ],
    todayTask:
      'Build a 3-step workflow: (1) classify query type, (2) route to a specialized handler, (3) format the response for the user. No hardcoded routing -- the LLM decides.',
    resources: [
      {
        type: 'docs',
        title: 'LangGraph Documentation',
        url: 'https://langchain-ai.github.io/langgraph/',
        description: 'The main framework for building multi-step agent workflows in Python.',
      },
      {
        type: 'video',
        title: 'LangGraph Tutorial for Beginners',
        url: 'https://www.youtube.com/watch?v=R8ylysfbRkw',
        description: 'Clear intro to LangGraph with a working example. Good starting point.',
      },
      {
        type: 'article',
        title: 'Why We Built LangGraph -- LangChain Blog',
        url: 'https://blog.langchain.dev/langgraph/',
        description: 'LangChain explains why they built LangGraph and when to use it vs. chains.',
      },
      {
        type: 'docs',
        title: 'LangGraph How-To Guides',
        url: 'https://langchain-ai.github.io/langgraph/how-tos/',
        description: 'Practical recipes for common workflow patterns: retries, human approval, branching.',
      },
      {
        type: 'video',
        title: 'Chains vs. Agents vs. Workflows -- When to Use Each',
        url: 'https://www.youtube.com/watch?v=sal78ACtGTc',
        description: 'Architectural clarity on when to use each pattern. Important mental model.',
      },
    ],
  },
  {
    day: 18,
    week: 3,
    weekTitle: 'Agents and Decision Systems',
    weekGoal: 'Build AI systems that take actions, not just answer questions.',
    title: 'Agent Architecture',
    subtitle: 'How to design systems that think and act.',
    concept:
      "An agent is a system that perceives, reasons, and acts. The most important architectural decision: separate the planner from the executor. The planner (a powerful model) decides what to do. The executor (faster, cheaper) does it. This reduces cost, improves speed, and makes systems more testable and reliable.",
    topics: [
      'ReAct: Reason + Act -- the foundational pattern',
      'Planner-executor separation',
      'Tool selection strategies',
      'Scratchpad, episodic, and semantic memory in agents',
      'Multi-agent coordination',
      'When to use agents vs. simpler pipelines',
    ],
    todayTask:
      "Read Lilian Weng\'s agent post (linked below). Then sketch an agent architecture for one real problem you care about: nodes, edges, tools, memory, stopping conditions.",
    resources: [
      {
        type: 'article',
        title: 'LLM Powered Autonomous Agents -- Lilian Weng',
        url: 'https://lilianweng.github.io/posts/2023-06-23-agent/',
        description: 'The definitive deep dive on agent architectures. Read every word of this.',
      },
      {
        type: 'article',
        title: 'ReAct: Reason + Act Prompting -- Paper',
        url: 'https://arxiv.org/abs/2210.03629',
        description: 'Original ReAct paper. Reason + Act is the foundation of modern agents.',
      },
      {
        type: 'video',
        title: 'AI Agent Architectures Explained',
        url: 'https://www.youtube.com/watch?v=F8NKVhkZZWI',
        description: 'Visual breakdown of different agent patterns and when to use them.',
      },
      {
        type: 'docs',
        title: 'LangGraph Agent Tutorials',
        url: 'https://langchain-ai.github.io/langgraph/tutorials/introduction/',
        description: 'Practical agent architectures implemented with LangGraph.',
      },
      {
        type: 'article',
        title: 'Building Production-Ready Agents',
        url: 'https://blog.langchain.dev/reflection-agents/',
        description: 'Reflection and self-correction in agent systems. How to make agents reliable.',
      },
    ],
  },
  {
    day: 19,
    week: 3,
    weekTitle: 'Agents and Decision Systems',
    weekGoal: 'Build AI systems that take actions, not just answer questions.',
    title: 'Build an Agent',
    subtitle: 'Give it a goal. Watch it figure out the path.',
    concept:
      "Today you build a real agent -- not a toy. Give it a concrete goal: 'research this company and write a summary', 'debug this code until the tests pass', 'find the best option and explain the tradeoffs'. The agent plans and executes without you guiding each step. That is the difference between a chatbot and an agent.",
    topics: [
      'Goal decomposition and planning',
      'Autonomous action sequences',
      'Self-evaluation and course correction',
      'Stopping conditions and success criteria',
      'Handling unexpected tool outputs',
      'Logging agent reasoning for debugging',
    ],
    todayTask:
      'Build an agent that researches any topic: searches the web → reads results → synthesizes information → writes a structured report. It must run autonomously from a single user prompt.',
    resources: [
      {
        type: 'docs',
        title: 'LangChain Agent Tutorial',
        url: 'https://python.langchain.com/docs/tutorials/agents/',
        description: 'Official tutorial building a research agent with tools from scratch.',
      },
      {
        type: 'video',
        title: 'Build an AI Research Agent -- Full Tutorial',
        url: 'https://www.youtube.com/watch?v=e-pcTFQ6ybQ',
        description: 'Complete tutorial building an autonomous research agent with real tools.',
      },
      {
        type: 'docs',
        title: 'CrewAI Documentation',
        url: 'https://docs.crewai.com/introduction',
        description: 'Framework for multi-agent systems. Great for collaborative agent workflows.',
      },
      {
        type: 'tool',
        title: 'Tavily Search API',
        url: 'https://tavily.com/',
        description: 'Search API optimized for AI agents. Returns clean, structured results for LLMs.',
      },
      {
        type: 'article',
        title: 'Common Agent Failure Modes',
        url: 'https://blog.langchain.dev/reflection-agents/',
        description: 'Why agents fail and how to design around failure modes.',
      },
    ],
  },
  {
    day: 20,
    week: 3,
    weekTitle: 'Agents and Decision Systems',
    weekGoal: 'Build AI systems that take actions, not just answer questions.',
    title: 'Add Tools',
    subtitle: 'The more tools, the more capable -- and the more complex.',
    concept:
      "Tools give agents real-world capabilities: web search, code execution, API calls, database queries, file operations. Each tool you add multiplies what the agent can do -- but also multiplies the ways it can go wrong. Design tools with single responsibility, clear errors, safe defaults, and explicit documentation.",
    topics: [
      'Integrating external APIs as tools',
      'Web search tools (Tavily, SerpAPI, Brave)',
      'Code execution environments (E2B, Docker)',
      'Database query tools with safety constraints',
      'Composing tools in chains',
      'Testing tools in isolation before giving to agents',
    ],
    todayTask:
      "Add 3 new tools to yesterday\'s agent. Include at least one real API call. Test each tool in isolation first, then together. Log every tool call.",
    resources: [
      {
        type: 'docs',
        title: 'LangChain Tool Integrations',
        url: 'https://python.langchain.com/docs/integrations/tools/',
        description: '100+ ready-to-use tools for LangChain agents.',
      },
      {
        type: 'tool',
        title: 'E2B -- Sandboxed Code Execution',
        url: 'https://e2b.dev/',
        description: 'Safe sandboxed code execution for AI agents. Run Python securely in the cloud.',
      },
      {
        type: 'docs',
        title: 'Tavily Search Tool Docs',
        url: 'https://docs.tavily.com/',
        description: 'AI-optimized search. Returns clean, structured results perfect for LLMs.',
      },
      {
        type: 'video',
        title: 'Building AI Agents with Real Tools',
        url: 'https://www.youtube.com/watch?v=AxnL5GtWVNA',
        description: 'Practical tutorial adding real-world tools to a LangGraph agent.',
      },
      {
        type: 'article',
        title: 'OWASP Top 10 for LLM Applications',
        url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
        description: 'Security risks in LLM applications. Essential reading before giving agents real tools.',
      },
    ],
  },
  {
    day: 21,
    week: 3,
    weekTitle: 'Agents and Decision Systems',
    weekGoal: 'Build AI systems that take actions, not just answer questions.',
    title: 'Decision Logic',
    subtitle: 'When to act. When to ask. When to stop.',
    concept:
      "The hardest part of agent design is not adding capabilities -- it is knowing when to use them. A well-designed agent asks for clarification when instructions are ambiguous, stops when the goal is complete, skips tools when they\'re unnecessary, and escalates to humans for irreversible actions. Decision logic is what makes agents trustworthy.",
    topics: [
      'Confidence thresholds for taking action',
      'Clarification vs. assumption strategies',
      'Stopping conditions and success criteria',
      'Human-in-the-loop for high-stakes actions',
      'Routing: classifier vs. LLM-based routing',
      'Fallback strategies when tools fail',
    ],
    todayTask:
      "Add decision logic to your agent: it should ask for clarification when the goal is ambiguous, confirm before irreversible actions, and stop when the task is complete -- not keep going.",
    weekEndQuote: "You\'re no longer prompting. You\'re designing behavior.",
    resources: [
      {
        type: 'docs',
        title: 'LangGraph Human-in-the-Loop',
        url: 'https://langchain-ai.github.io/langgraph/how-tos/human_in_the_loop/',
        description: 'Add human approval steps for high-stakes or irreversible agent actions.',
      },
      {
        type: 'article',
        title: 'Planning Agents -- LangChain Blog',
        url: 'https://blog.langchain.dev/planning-agents/',
        description: 'How to design agent decision systems that are predictable and reliable.',
      },
      {
        type: 'docs',
        title: 'LangGraph Conditional Edges',
        url: 'https://langchain-ai.github.io/langgraph/tutorials/introduction/',
        description: 'Implementing conditional routing in agent workflows.',
      },
      {
        type: 'article',
        title: 'Anthropic on Multi-Agent Safety',
        url: 'https://www.anthropic.com/news/claude-multi-agent-network',
        description: "Anthropic\'s thinking on building safe multi-agent systems.",
      },
      {
        type: 'video',
        title: 'AI Agent Decision Flows -- Tutorial',
        url: 'https://www.youtube.com/watch?v=mvjunmSfhDQ',
        description: 'Visual walkthrough of how to implement agent decision logic in code.',
      },
    ],
  },

  // ─── WEEK 4 ─────────────────────────────────────────────────────────────
  {
    day: 22,
    week: 4,
    weekTitle: 'Production Thinking',
    weekGoal: 'Build systems that work reliably at scale.',
    title: 'Evaluation Basics',
    subtitle: "If you can\'t measure it, you can\'t improve it.",
    concept:
      "How do you know your AI system is working? Most teams don\'t have a real answer. Evaluation closes that gap. For RAG: did we retrieve the right chunks? For agents: did we achieve the goal? Build your eval suite before you optimize -- otherwise you are just guessing your way to better results.",
    topics: [
      'Types of evaluation: automated, human, LLM-as-judge',
      'Evaluation datasets: building your golden set',
      'Faithfulness: does the answer match the sources?',
      'Relevance: does the answer address the question?',
      'RAGAS framework for RAG evaluation',
      'Building a regression suite to catch regressions',
    ],
    todayTask:
      'Create an evaluation set of 20 question-answer pairs for your RAG app. Score each answer on relevance (1-5) and faithfulness (1-5). Calculate baseline scores.',
    resources: [
      {
        type: 'docs',
        title: 'RAGAS -- RAG Evaluation Framework',
        url: 'https://docs.ragas.io/en/stable/',
        description: 'Standard framework for evaluating RAG systems. Automated metrics.',
      },
      {
        type: 'docs',
        title: 'LangSmith Evaluation',
        url: 'https://docs.smith.langchain.com/evaluation',
        description: "LangSmith\'s built-in eval framework. Tracks metrics over time with UI.",
      },
      {
        type: 'video',
        title: 'How to Evaluate RAG Systems',
        url: 'https://www.youtube.com/watch?v=s6Hca4QeMRQ',
        description: 'Practical guide to setting up and running RAG evaluation in Python.',
      },
      {
        type: 'article',
        title: 'LLM-as-Judge -- Paper',
        url: 'https://arxiv.org/abs/2306.05685',
        description: 'Using LLMs to evaluate LLM outputs at scale. With validation methodology.',
      },
      {
        type: 'tool',
        title: 'Promptfoo -- LLM Evaluation',
        url: 'https://www.promptfoo.dev/',
        description: 'Open source LLM evaluation and testing framework. Easy to integrate.',
      },
    ],
  },
  {
    day: 23,
    week: 4,
    weekTitle: 'Production Thinking',
    weekGoal: 'Build systems that work reliably at scale.',
    title: 'Metrics',
    subtitle: 'Latency. Accuracy. Cost. Pick your tradeoffs deliberately.',
    concept:
      "Production AI systems have three key metrics: latency (how fast), accuracy (how correct), cost (how expensive). These trade off against each other. Bigger models are more accurate but slower and pricier. Caching reduces latency but introduces staleness. Streaming improves perceived performance. Know your SLAs before choosing your architecture.",
    topics: [
      'Latency: TTFT (time to first token) vs. total time',
      'Accuracy metrics for different task types',
      'Hallucination rate measurement',
      'Token cost calculation and projection at scale',
      'Throughput vs. latency tradeoffs',
      'Setting and communicating SLAs for AI systems',
    ],
    todayTask:
      'Measure latency, token usage, and quality scores for your system across 20 queries. Build a simple dashboard or spreadsheet with these numbers.',
    resources: [
      {
        type: 'docs',
        title: 'Langfuse Analytics Overview',
        url: 'https://langfuse.com/docs/analytics/overview',
        description: 'Track latency, cost, and quality metrics in one place.',
      },
      {
        type: 'article',
        title: 'Prompt Caching -- Anthropic',
        url: 'https://www.anthropic.com/news/prompt-caching',
        description: 'Anthropic on prompt caching to reduce latency and cost.',
      },
      {
        type: 'video',
        title: 'Optimizing LLM Latency',
        url: 'https://www.youtube.com/watch?v=cLlMGF6Emqs',
        description: 'Techniques for reducing latency in production LLM applications.',
      },
      {
        type: 'article',
        title: 'OpenAI Pricing',
        url: 'https://openai.com/pricing',
        description: 'Understand your cost model. Calculate real costs at scale.',
      },
      {
        type: 'tool',
        title: 'LLM Cost Calculator',
        url: 'https://huggingface.co/spaces/philschmid/llm-pricing-calculator',
        description: 'Compare costs across different models and providers for your use case.',
      },
    ],
  },
  {
    day: 24,
    week: 4,
    weekTitle: 'Production Thinking',
    weekGoal: 'Build systems that work reliably at scale.',
    title: 'Guardrails',
    subtitle: 'Prevent bad inputs. Validate outputs. Stay in control.',
    concept:
      'Without guardrails, users will find ways to break your system -- intentionally or not. Guardrails operate at two levels: input (detect harmful, irrelevant, or malformed requests before processing) and output (validate that responses are safe, correctly formatted, and on-topic). Defense in depth keeps your system trustworthy.',
    topics: [
      'Input validation: schema checks, intent classifiers',
      'Prompt injection detection and defense',
      'Output validation: schema enforcement, toxicity filtering',
      'Content policy implementation',
      'Rate limiting and abuse prevention',
      'Graceful degradation when guardrails trigger',
    ],
    todayTask:
      "Add input and output guardrails to your app. Test with 10 adversarial inputs: jailbreak attempts, off-topic queries, injection attacks, malformed data. See what gets through.",
    resources: [
      {
        type: 'docs',
        title: 'Guardrails AI',
        url: 'https://docs.guardrailsai.com/',
        description: 'Python library for LLM output validation with custom validators.',
      },
      {
        type: 'docs',
        title: 'NeMo Guardrails -- NVIDIA',
        url: 'https://docs.nvidia.com/nemo/guardrails/',
        description: "NVIDIA\'s open-source framework for conversation safety rails.",
      },
      {
        type: 'article',
        title: 'Prompt Injection Attacks -- Simon Willison',
        url: 'https://simonwillison.net/2022/Sep/12/prompt-injection/',
        description: 'The definitive guide to prompt injection. Read this before shipping.',
      },
      {
        type: 'tool',
        title: 'LlamaGuard -- Meta AI',
        url: 'https://ai.meta.com/research/publications/llama-guard-llm-based-input-output-safeguard-for-human-ai-conversations/',
        description: "Meta\'s open-source content moderation model for AI systems.",
      },
      {
        type: 'video',
        title: 'Securing LLM Applications',
        url: 'https://www.youtube.com/watch?v=7zHp3oX5pks',
        description: 'Practical security measures for production AI applications.',
      },
    ],
  },
  {
    day: 25,
    week: 4,
    weekTitle: 'Production Thinking',
    weekGoal: 'Build systems that work reliably at scale.',
    title: 'Monitoring',
    subtitle: 'Know when your system breaks before your users do.',
    concept:
      "Production AI systems degrade silently. The model doesn\'t crash -- it just starts giving worse answers. Without monitoring, you find out from user complaints. With monitoring, you catch regressions automatically. Track quality scores over time, alert on anomalies, and review failures weekly.",
    topics: [
      'Real-time quality monitoring dashboards',
      'Anomaly detection for LLM output quality',
      'Alerting on quality regressions',
      'User feedback integration (thumbs up/down)',
      'A/B testing for prompt changes',
      'Dashboards for non-technical stakeholders',
    ],
    todayTask:
      'Set up Langfuse to monitor your app. Add user feedback buttons (thumbs up/down). Review 20 logged interactions and identify patterns in failures.',
    resources: [
      {
        type: 'docs',
        title: 'Langfuse Documentation',
        url: 'https://langfuse.com/docs',
        description: 'Open source LLM observability. Traces, evals, dashboards, and feedback.',
      },
      {
        type: 'docs',
        title: 'LangSmith Documentation',
        url: 'https://docs.smith.langchain.com/',
        description: "LangChain\'s observability platform. Deep integration with LangChain apps.",
      },
      {
        type: 'video',
        title: 'Monitoring LLM Apps in Production',
        url: 'https://www.youtube.com/watch?v=yQdUdE_ldEo',
        description: 'Practical guide to setting up observability for LLM applications.',
      },
      {
        type: 'tool',
        title: 'Helicone -- LLM Proxy with Analytics',
        url: 'https://www.helicone.ai/',
        description: 'Proxy for LLM API calls with built-in logging, caching, and analytics.',
      },
      {
        type: 'article',
        title: 'Full Stack Deep Learning -- LLM Bootcamp',
        url: 'https://fullstackdeeplearning.com/llm-bootcamp/',
        description: 'Free bootcamp covering production LLM systems, monitoring, and evaluation.',
      },
    ],
  },
  {
    day: 26,
    week: 4,
    weekTitle: 'Production Thinking',
    weekGoal: 'Build systems that work reliably at scale.',
    title: 'Logging and Tracing',
    subtitle: 'See exactly what your system is doing, step by step.',
    concept:
      'When something goes wrong in a multi-step AI system, you need to know which step failed and why. Logging records events. Tracing connects related events across a workflow into a single trace. A good trace shows: input → chunking → retrieval → prompt → model call → output -- with latency, cost, and data at each step.',
    topics: [
      'Structured logging vs. print statements',
      'Distributed tracing for multi-step workflows',
      'Span-level details: inputs, outputs, latency',
      'Correlation IDs for request tracking',
      'Log levels and what to capture at each',
      'Cost tracking per trace and per user',
    ],
    todayTask:
      'Add structured logging to your agent. Every tool call, retrieval step, and LLM call should produce a structured log entry. Review 5 complete traces and understand what happened.',
    resources: [
      {
        type: 'docs',
        title: 'Langfuse Tracing Guide',
        url: 'https://langfuse.com/docs/tracing',
        description: 'Trace every step of your LLM pipeline. See inputs and outputs at each stage.',
      },
      {
        type: 'docs',
        title: 'OpenTelemetry for Python',
        url: 'https://opentelemetry.io/docs/languages/python/getting-started/',
        description: 'Industry standard observability. Integrates with Langfuse, Datadog, and more.',
      },
      {
        type: 'video',
        title: 'LLM Observability Deep Dive',
        url: 'https://www.youtube.com/watch?v=7TdUAjMpuXQ',
        description: 'How to set up full observability for production LLM applications.',
      },
      {
        type: 'tool',
        title: 'Weights & Biases Traces',
        url: 'https://wandb.ai/site/traces',
        description: "W&B\'s tracing for AI systems. Good for ML teams already using W&B.",
      },
      {
        type: 'docs',
        title: 'LangSmith Tracing',
        url: 'https://docs.smith.langchain.com/tracing',
        description: 'How to add LangSmith tracing to any LangChain application.',
      },
    ],
  },
  {
    day: 27,
    week: 4,
    weekTitle: 'Production Thinking',
    weekGoal: 'Build systems that work reliably at scale.',
    title: 'Debug Failures',
    subtitle: 'Failures are information. Learn to read them.',
    concept:
      "Debugging AI systems is different from debugging traditional software. The model doesn\'t throw exceptions -- it gives wrong answers. You need to trace back: wrong output → wrong prompt → wrong retrieved context → wrong chunking → wrong embedding. Systematic debugging, not random guessing, is what makes systems reliable.",
    topics: [
      'Tracing end-to-end failures in RAG systems',
      'Debugging retrieval failures specifically',
      'Prompt debugging: isolating one variable at a time',
      'Minimal reproduction cases for AI bugs',
      'Building regression tests from bug reports',
      'Knowing when to give up and redesign',
    ],
    todayTask:
      "Find 3 cases where your system gave wrong or unhelpful answers. Trace each failure to its root cause in writing. Fix at least one. Write a regression test for it.",
    weekEndQuote: 'This is where hobby projects die. And engineers grow.',
    resources: [
      {
        type: 'docs',
        title: 'LangSmith Debugging Guide',
        url: 'https://docs.smith.langchain.com/tracing/use_cases/debugging',
        description: 'How to use LangSmith traces to debug LLM applications systematically.',
      },
      {
        type: 'article',
        title: 'Debugging RAG Systems -- LangChain Blog',
        url: 'https://blog.langchain.dev/debugging-rag/',
        description: "LangChain\'s guide to systematically debugging retrieval failures.",
      },
      {
        type: 'article',
        title: 'Common RAG Failure Modes',
        url: 'https://www.pinecone.io/learn/chunking-strategies/',
        description: 'The most common ways RAG systems fail and how to fix each one.',
      },
      {
        type: 'tool',
        title: 'Cursor -- AI-Powered IDE',
        url: 'https://www.cursor.com/',
        description: 'AI-powered code editor that helps debug complex systems quickly.',
      },
      {
        type: 'video',
        title: 'Root Cause Analysis for AI Bugs',
        url: 'https://www.youtube.com/watch?v=Z7GMbHSBtds',
        description: 'Structured approach to finding and fixing AI system failures.',
      },
    ],
  },

  // ─── FINAL 4 DAYS ────────────────────────────────────────────────────────
  {
    day: 28,
    week: 5,
    weekTitle: 'Ship Something Real',
    weekGoal: 'Build and deploy a real project that solves a real problem.',
    title: 'Pick a Real Problem',
    subtitle: 'Not a portfolio piece. Something you would actually use.',
    concept:
      "The best AI projects solve problems that genuinely annoy you or people you know. Not impressive demos -- useful tools. The test: would someone use this even if it didn\'t use AI? If yes, the AI makes it better. If no, the AI is the only thing keeping it alive -- that is a fragile foundation.",
    topics: [
      'Problem discovery: who has this pain, how often?',
      'Scope reduction: the smallest useful version',
      'Build vs. buy for each component',
      'User research: 5 conversations before building',
      'Defining done: what does success look like?',
      'Choosing your tech stack for this specific problem',
    ],
    todayTask:
      'Pick your real problem. Write a one-paragraph problem statement. Define what version 1 looks like. List the tech stack. Start building before the day ends.',
    resources: [
      {
        type: 'article',
        title: 'How to Get Startup Ideas -- Paul Graham',
        url: 'https://paulgraham.com/startupideas.html',
        description: "Paul Graham\'s essay on finding problems worth solving. Read before you pick.",
      },
      {
        type: 'article',
        title: 'The Mom Test -- How to Talk to Users',
        url: 'https://www.momtestbook.com/',
        description: 'How to find out what people actually need (not what they say they want).',
      },
      {
        type: 'article',
        title: 'YC -- How to Get Startup Ideas',
        url: 'https://www.ycombinator.com/library/8g-how-to-get-startup-ideas',
        description: "Y Combinator\'s framework for finding and validating ideas.",
      },
      {
        type: 'video',
        title: 'Building AI Products in Public',
        url: 'https://www.youtube.com/watch?v=OhgZLmdQEBA',
        description: 'How to build AI products in public and attract early users.',
      },
      {
        type: 'article',
        title: "Lenny\'s Newsletter -- Product Thinking",
        url: 'https://www.lennysnewsletter.com/',
        description: 'Best product thinking newsletter. Practical frameworks for builders.',
      },
    ],
  },
  {
    day: 29,
    week: 5,
    weekTitle: 'Ship Something Real',
    weekGoal: 'Build and deploy a real project that solves a real problem.',
    title: 'Improve UX',
    subtitle: 'Good AI in a bad interface is just a bad product.',
    concept:
      "Users don\'t interact with models -- they interact with interfaces. Error messages that say 'Something went wrong' are useless. Empty states are confusing. Load times without feedback are frustrating. AI-specific UX: show sources, stream responses, allow correction, make limitations clear. These details separate good products from great ones.",
    topics: [
      'Edge case handling and graceful degradation',
      'Loading states and perceived performance tricks',
      'Error messages that explain what happened and what to do',
      'Empty states and onboarding for new users',
      'AI-specific UX: source attribution, streaming, correction',
      'Accessibility basics',
    ],
    todayTask:
      'List every way your app can fail from a user perspective. Fix the top 5. Add streaming output if you have not. Add at least one helpful error message.',
    resources: [
      {
        type: 'article',
        title: 'AI UX Patterns -- Nielsen Norman Group',
        url: 'https://www.nngroup.com/articles/ai-generated-content-ux/',
        description: 'Research-backed UX patterns for AI-generated content.',
      },
      {
        type: 'article',
        title: 'Error Message Best Practices -- NNG',
        url: 'https://www.nngroup.com/articles/error-message-guidelines/',
        description: 'How to write error messages that help users instead of confusing them.',
      },
      {
        type: 'article',
        title: 'Designing Great AI Experiences',
        url: 'https://docs.streamlit.io/develop/concepts/design/design-your-app',
        description: 'Design principles for Streamlit apps that users actually enjoy.',
      },
      {
        type: 'tool',
        title: 'Vercel v0 -- AI UI Generator',
        url: 'https://v0.dev/',
        description: 'AI that generates UI components. Speed up frontend development.',
      },
      {
        type: 'video',
        title: 'Building Great AI Interfaces',
        url: 'https://www.youtube.com/watch?v=P5aVKBsPwpE',
        description: 'Design principles specific to AI-powered products.',
      },
    ],
  },
  {
    day: 30,
    week: 5,
    weekTitle: 'Ship Something Real',
    weekGoal: 'Build and deploy a real project that solves a real problem.',
    title: 'Deploy Properly',
    subtitle: 'Production deployment is different from dev mode.',
    concept:
      "A real production deployment handles secrets securely, scales automatically, recovers from failures, and runs on a real domain. Today you deploy properly: custom domain, HTTPS, environment variable management, and basic monitoring. This is the difference between 'I built this' and 'people use this.'",
    topics: [
      'Custom domain setup and DNS configuration',
      'HTTPS and SSL certificates (automatic with most hosts)',
      'Environment variable management in production',
      'Container basics with Docker',
      'CI/CD: auto-deploy on push to main',
      'Basic health checks and uptime monitoring',
    ],
    todayTask:
      'Deploy to a production host with a custom domain. Set up auto-deploy from GitHub. Verify HTTPS works. Share the URL publicly.',
    resources: [
      {
        type: 'docs',
        title: 'Railway -- Deployment Guide',
        url: 'https://docs.railway.app/guides/services',
        description: 'One of the easiest ways to deploy Python apps with a custom domain.',
      },
      {
        type: 'docs',
        title: 'Fly.io Documentation',
        url: 'https://fly.io/docs/',
        description: 'Deploy globally distributed apps. Great for latency-sensitive AI applications.',
      },
      {
        type: 'video',
        title: 'Docker for AI Applications',
        url: 'https://www.youtube.com/watch?v=pg19Z8LL06w',
        description: 'Containerize your AI app for consistent deployment anywhere.',
      },
      {
        type: 'docs',
        title: 'GitHub Actions CI/CD Quickstart',
        url: 'https://docs.github.com/en/actions/quickstart',
        description: 'Set up automatic testing and deployment on every push to main.',
      },
      {
        type: 'tool',
        title: 'Namecheap -- Affordable Domains',
        url: 'https://www.namecheap.com/',
        description: 'Get your project its own URL. Domains start at $8/year.',
      },
    ],
  },
  {
    day: 31,
    week: 5,
    weekTitle: 'Ship Something Real',
    weekGoal: 'Build and deploy a real project that solves a real problem.',
    title: 'Write the Breakdown',
    subtitle: 'Explain what you built. That is how engineers get recognized.',
    concept:
      "The breakdown is not just documentation -- it is proof of engineering depth. Explain the architecture, the choices you made, the tradeoffs you accepted. Share what failed and what you fixed. Publish it publicly. This single piece of writing turns 31 days of work into something that opens doors: jobs, users, collaborators, opportunities.",
    topics: [
      'Architecture diagram and explanation',
      'Technology choices and the reasoning behind each',
      'Tradeoffs: what you optimized for and what you sacrificed',
      'Failures: what broke and how you fixed it',
      'Numbers: latency, accuracy, cost at scale',
      'What you would do differently with more time',
    ],
    todayTask:
      'Write your full breakdown: problem, architecture, stack, tradeoffs, numbers, failures, learnings. Publish it on a blog or LinkedIn. Share the link.',
    weekEndQuote:
      "Now you don\'t just say 'I\'m learning AI.' You say 'I built this.' And you show it.",
    resources: [
      {
        type: 'article',
        title: 'Learn in Public -- swyx',
        url: 'https://www.swyx.io/learn-in-public',
        description: "The strategy that builds careers: share what you learn as you learn it.",
      },
      {
        type: 'tool',
        title: 'Hashnode -- Developer Blogging',
        url: 'https://hashnode.com/',
        description: 'Free blogging platform built for developers. Great SEO.',
      },
      {
        type: 'tool',
        title: 'readme.so -- Professional READMEs',
        url: 'https://readme.so/',
        description: 'Make your project README professional and complete quickly.',
      },
      {
        type: 'tool',
        title: 'Product Hunt -- Launch Your Project',
        url: 'https://www.producthunt.com/',
        description: 'Launch your project to thousands of early adopters.',
      },
      {
        type: 'article',
        title: 'How to Write a Technical Case Study',
        url: 'https://www.indiehackers.com/post/how-to-write-a-great-engineering-case-study',
        description: 'Structure your breakdown for maximum impact and readability.',
      },
    ],
  },
];
