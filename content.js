/*
 * Alle Inhalte der Seite (DE/EN) an einem Ort.
 * Platzhalter:  ⟦Text⟧  wird auf der Seite gelb markiert. Vor Veröffentlichung ersetzen.
 * Bilder:       cover = Illustration (SVG), screens = echte Screenshots (öffnen sich in der Lightbox).
 *               Echte Screenshots wirken stärker: legen Sie sie unter assets/img/screens/ ab
 *               und tragen Sie sie bei "screens" ein (das erste Bild wird dann zum Cover).
 */
window.CONTENT = {
  projects: [
    {
      id: "harbour",
      cats: ["fullstack"],
      featured: true,
      cover: "assets/img/covers/harbour.svg",
      screens: [
        { src: "assets/img/screens/harbour-map-overview.png", alt: { de: "Screenshot: 3D-Karte des Bremerhavener Hafens mit POIs und Stichwort-Filter", en: "Screenshot: 3D map of Bremerhaven harbour with POIs and tag filter" } },
        { src: "assets/img/screens/harbour-poi-details.png", alt: { de: "Screenshot: POI-Detailansicht", en: "Screenshot: POI detail view" } },
        { src: "assets/img/screens/harbour-room-modal.png", alt: { de: "Screenshot: Raum verwalten – gemeinsame Sitzung per Link", en: "Screenshot: room management – shared session via link" } }
      ],
      context: { de: "Masterprojekt · 13 Studierende · Backend-Team", en: "Master’s project · 13 students · backend team" },
      title: { de: "Harbour2025 – Bremerhaven interaktiv entdecken", en: "Harbour2025 – Explore Bremerhaven interactively" },
      summary: {
        de: "Kollaborative 3D-Kartenanwendung mit in Echtzeit synchronisierter Kartenansicht und Points of Interest.",
        en: "Collaborative 3D map application with a real-time synchronised map view and points of interest."
      },
      problem: {
        de: "Mehrere Nutzer sollen dieselbe 3D-Karte gleichzeitig ansehen und bearbeiten, ohne dass die Ansichten auseinanderlaufen.",
        en: "Multiple users need to view and edit the same 3D map at the same time without their views drifting apart."
      },
      solution: {
        de: "Räume mit Beitritt per Link und Live-Follow-Modus: Kamera, POI-Auswahl und Filter werden in Echtzeit übertragen. Flask-REST-API mit PostgreSQL, eigener WebSocket-Server mit JWT-Authentifizierung, horizontal skaliert über Caddy und Redis/Valkey Pub/Sub, Deployment mit Docker Compose (rootless). Abgesichert durch Lasttests (k6) und verteilte E2E-Tests (Playwright). Mein Beitrag im Backend-Team: Bereitstellung der REST-API und Aufbau der Datenbank.",
        en: "Rooms joinable via link and a live-follow mode: camera, POI selection and filters are synced in real time. Flask REST API with PostgreSQL, custom WebSocket server with JWT authentication, scaled horizontally via Caddy and Redis/Valkey pub/sub, rootless Docker Compose deployment. Verified with load tests (k6) and distributed E2E tests (Playwright). My contribution in the backend team: providing the REST API and building the database."
      },
      result: {
        de: "Im Lasttest stabil bis ca. 500 gleichzeitige Nutzer. Live auf dem Server der Hochschule Bremerhaven.",
        en: "Stable up to approx. 500 concurrent users in load testing. Live on the Bremerhaven University server."
      },
      metric: { value: "~500", label: { de: "gleichzeitige Nutzer im Lasttest", en: "concurrent users in load test" } },
      tech: ["Flask", "PostgreSQL", "MapLibre GL JS", "Three.js", "WebSocket", "JWT", "Redis/Valkey", "Caddy", "Docker Compose", "k6", "Playwright"],
      links: [
        { type: "demo", url: "https://harbour.informatik.hs-bremerhaven.de/" },
        { type: "github", url: "https://github.com/danezi/harbour2025-" }
      ]
    },
    {
      id: "mediflow",
      cats: ["ai", "data"],
      featured: true,
      cover: "assets/img/covers/mediflow.svg",
      screens: [
        { src: "assets/img/screens/mediflow-dashboard.png", alt: { de: "Screenshot: Medical Analytics Dashboard mit Kennzahlen zu Patienten, Diagnosen und Medikationen", en: "Screenshot: medical analytics dashboard with patient, condition and medication figures" } },
        { src: "assets/img/screens/mediflow-Agent_Reponse1_0.png", alt: { de: "Screenshot: KI-Chatbot erstellt eine Patientenzusammenfassung aus der Datenbank (synthetische Daten)", en: "Screenshot: AI chatbot creating a patient summary from the database (synthetic data)" } }
      ],
      context: { de: "Eigenes Projekt", en: "Personal project" },
      title: { de: "MediFlow – KI-gestützte medizinische Datenanalyse", en: "MediFlow – AI-assisted medical data analysis" },
      summary: {
        de: "Text-to-SQL-Agent, RAG-Chatbot und ML-Modelle auf synthetischen Patientendaten (Synthea), gebündelt in einem Streamlit-Dashboard.",
        en: "Text-to-SQL agent, RAG chatbot and ML models on synthetic patient data (Synthea), combined in a Streamlit dashboard."
      },
      problem: {
        de: "Fachanwender ohne SQL-Kenntnisse sollen medizinische Daten selbst abfragen und auswerten können.",
        en: "Domain users without SQL skills should be able to query and analyse medical data themselves."
      },
      solution: {
        de: "Ein LangChain-Agent übersetzt Fragen in SQL für PostgreSQL (z. B. „Welche 5 Prozeduren sind am teuersten?“), ein RAG-Chatbot beantwortet Fragen zu den Daten, interaktive Plotly-Dashboards. LLM wahlweise GPT-4o-mini oder lokal Llama 3.2 über Ollama. Dazu eine ML-Pipeline (scikit-learn, 38 klinische Merkmale) zur Vorhersage von Diabetes Typ 2. Ausschließlich synthetische Daten.",
        en: "A LangChain agent turns questions into SQL for PostgreSQL (e.g. “Which 5 procedures are the most expensive?”), a RAG chatbot answers questions about the data, interactive Plotly dashboards. LLM: GPT-4o-mini or local Llama 3.2 via Ollama. Plus an ML pipeline (scikit-learn, 38 clinical features) predicting type 2 diabetes. Synthetic data only."
      },
      result: {
        de: "Über 17 Mio. synthetische Datensätze in natürlicher Sprache abfragbar. ML-Modell für Diabetes-Typ-2-Risiko mit ROC-AUC 0,957 (30.000 synthetische Patienten).",
        en: "More than 17 million synthetic records queryable in natural language. ML model for type 2 diabetes risk with ROC-AUC 0.957 (30,000 synthetic patients)."
      },
      metric: { value: "0,957", valueEn: "0.957", label: { de: "ROC-AUC", en: "ROC-AUC" } },
      tech: ["Python", "LangChain", "OpenAI", "Ollama", "PostgreSQL", "scikit-learn", "Streamlit", "Plotly"],
      links: [
        { type: "github", url: "https://github.com/danezi/MediFlow-ClinicalInsight-AI" },
        { type: "github", label: { de: "GitHub (ML-Modell)", en: "GitHub (ML model)" }, url: "https://github.com/danezi/synthea-diabetes-prediction" }
      ]
    },
    {
      id: "ibm",
      cats: ["ai"],
      featured: true,
      cover: null,
      screens: [
        { src: "assets/img/screens/ibm-capstone-agent.png", alt: { de: "Screenshot: Restaurant-Agent beantwortet eine mehrstufige Anfrage über MCP-Tools", en: "Screenshot: restaurant agent answering a multi-step request via MCP tools" } },
        { src: "assets/img/screens/ibm-capstone-chat.png", alt: { de: "Screenshot: Startseite des Empfehlungs-Chatbots (Gradio)", en: "Screenshot: start page of the recommendation chatbot (Gradio)" } }
      ],
      context: { de: "IBM Professional Certificate · 10 Kurse", en: "IBM Professional Certificate · 10 courses" },
      title: { de: "IBM RAG & Agentic AI Portfolio", en: "IBM RAG & Agentic AI portfolio" },
      summary: {
        de: "Projekte aus dem IBM RAG and Agentic AI Professional Certificate: Multi-Agenten-RAG, CrewAI-Support-Chatbot, MCP-Server und -Client, SQL-/pandas-Agent, AI Meeting Assistant.",
        en: "Projects from the IBM RAG and Agentic AI Professional Certificate: multi-agent RAG, CrewAI support chatbot, MCP server and client, SQL/pandas agent, AI meeting assistant."
      },
      problem: {
        de: "Die zentralen Architekturmuster für LLM-Anwendungen sollten praktisch umgesetzt werden, nicht nur theoretisch bekannt sein.",
        en: "The core architecture patterns for LLM applications should be implemented in practice, not just known in theory."
      },
      solution: {
        de: "Eigene Implementierungen von RAG-Pipelines, Agenten-Workflows (LangGraph, CrewAI, AutoGen) und MCP-Servern/-Clients. Im Capstone ein Restaurant-Agent, der mehrere Tools über MCP verkettet.",
        en: "Own implementations of RAG pipelines, agent workflows (LangGraph, CrewAI, AutoGen) and MCP servers/clients. Capstone: a restaurant agent chaining several tools via MCP."
      },
      result: {
        de: "Lauffähige, dokumentierte Projekte. Zertifikat abgeschlossen im Nov. 2026.",
        en: "Working, documented projects. Certificate completed in Nov 2026."
      },
      tech: ["Python", "LangChain", "LangGraph", "CrewAI", "AutoGen", "MCP", "Gradio"],
      links: [{ type: "github", url: "https://github.com/danezi/ibm-rag-agentic-ai-portfolio" }]
    },
    {
      id: "lectorai",
      cats: ["ai"],
      cover: "assets/img/covers/lectorai.svg",
      screens: [],
      context: { de: "Bachelorprojekt · Bremer Grundschule", en: "Bachelor’s project · primary school in Bremen" },
      title: { de: "LectorAI – Handschrift-Formulare digital erfassen", en: "LectorAI – Digitising handwritten forms" },
      summary: {
        de: "Extraktion von Daten aus handschriftlich ausgefüllten Formularen, mit Fokus auf Datenschutz.",
        en: "Extracting data from handwritten forms, with a focus on data protection."
      },
      problem: {
        de: "Papierformulare mussten von Hand abgetippt werden. Die Daten betreffen Kinder und sind besonders schützenswert.",
        en: "Paper forms had to be typed in by hand. The data concerns children and needs special protection."
      },
      solution: {
        de: "Pipeline aus Segmentierung der Formularfelder, Handschrifterkennung und strukturierter Speicherung in einer Datenbank. Aus Datenschutzgründen eigene Modelle statt externer Dienste: gezielte Modellauswahl und Fine-Tuning.",
        en: "Pipeline of form-field segmentation, handwriting recognition and structured storage in a database. For data-protection reasons we built our own models instead of using external services: careful model selection and fine-tuning."
      },
      result: {
        de: "Zum Semesterende eine Erkennungsgenauigkeit von 85 %.",
        en: "Recognition accuracy of 85% by the end of the semester."
      },
      metric: { value: "85 %", valueEn: "85%", label: { de: "Erkennungsgenauigkeit", en: "recognition accuracy" } },
      tech: ["Segmentierung", "Handschrifterkennung", "Fine-Tuning", { de: "Datenbank", en: "Database" }, { de: "Datenschutz", en: "Data protection" }],
      links: []
    },
    {
      id: "pyseidon",
      cats: ["data"],
      cover: "assets/img/covers/pyseidon.svg",
      screens: [],
      context: { de: "Masterprojekt · 10 Studierende · HS Bremerhaven", en: "Master’s project · 10 students · Bremerhaven University" },
      title: { de: "PySeidon + SUMO – digitaler Zwilling des RoRo-Terminals Bremerhaven", en: "PySeidon + SUMO – digital twin of the Bremerhaven RoRo terminal" },
      summary: {
        de: "Gekoppelte Simulation des BLG AutoTerminals: PySeidon simuliert Schiffe, Schlepper und Lotsen, SUMO den Landverkehr. Synchronisiert über TraCI.",
        en: "Coupled simulation of the BLG AutoTerminal: PySeidon simulates ships, tugs and pilots, SUMO the land traffic. Synchronised via TraCI."
      },
      problem: {
        de: "Die gekoppelte Simulation musste validiert werden: Liefert sie plausible Kennzahlen wie Turnaround, Ankerzeit und Durchsatz?",
        en: "The coupled simulation had to be validated: does it produce plausible KPIs such as turnaround, anchorage time and throughput?"
      },
      solution: {
        de: "Mein Teil (zu zweit): die Methodik des PySeidon-Papers auf das Bremerhaven-Modell übertragen. Fünf Szenarien (Baseline, Wellen-Entladung, ohne Zugverkehr, Liegeplatz-Inspektion, Geschwindigkeitsanomalien) mit aktiver SUMO-Kopplung in 15 Läufen, Auswertung aus den Zustandsübergängen der Schiffe.",
        en: "My part (in a team of two): applying the PySeidon paper’s methodology to the Bremerhaven model. Five scenarios (baseline, wave unloading, no rail traffic, berth inspection, speed anomalies) with SUMO coupling in 15 runs, evaluated from the vessels’ state transitions."
      },
      result: {
        de: "Die Wellen-Entladung verlängert die Servicezeit am Liegeplatz messbar von 245,8 auf 269,6 Minuten, passend zur erwarteten Verzögerung. Zwei Fehler in der Anomalie-Logik des Repositorys gefunden und behoben, wodurch Inspektionen und Geschwindigkeitsanomalien die RoRo-Schiffe zuvor nicht erreichten.",
        en: "Wave unloading measurably increases berth service time from 245.8 to 269.6 minutes, matching the expected delay. Found and fixed two bugs in the repository’s anomaly wiring that had kept inspections and speed anomalies from reaching RoRo vessels."
      },
      tech: ["Python", "SUMO", "TraCI", "PySeidon", "GeoJSON", "Shapely", { de: "Simulation", en: "Simulation" }],
      links: []
    },
    {
      id: "summarizer",
      cats: ["ai"],
      cover: "assets/img/covers/summarizer.svg",
      screens: [],
      context: { de: "Kurs Generative AI with LLMs · AWS / DeepLearning.AI", en: "Course Generative AI with LLMs · AWS / DeepLearning.AI" },
      title: { de: "LLM Fine-Tuning – Chat-Summarizer", en: "LLM fine-tuning – chat summarizer" },
      summary: {
        de: "Fine-Tuning von Flan-T5 zur Zusammenfassung von Dialogen auf dem DialogSum-Datensatz (10.000+ Dialoge).",
        en: "Fine-tuning Flan-T5 to summarise dialogues on the DialogSum dataset (10,000+ dialogues)."
      },
      problem: {
        de: "Ein allgemeines Sprachmodell fasst Dialoge ungenau zusammen.",
        en: "A general-purpose language model summarises dialogues inaccurately."
      },
      solution: {
        de: "Von Prompt Engineering (Zero-/Few-Shot) über Full Fine-Tuning bis PEFT mit LoRA, das nur ca. 1 % der Parameter trainiert. Zusätzlich RLHF mit PPO und einem Reward-Modell, um toxische Zusammenfassungen zu reduzieren.",
        en: "From prompt engineering (zero/few-shot) to full fine-tuning and PEFT with LoRA, which trains only about 1% of the parameters. Plus RLHF with PPO and a reward model to reduce toxic summaries."
      },
      result: {
        de: "Quantitativer Vergleich von Originalmodell, Full Fine-Tuning und LoRA mit ROUGE-1, ROUGE-2 und ROUGE-L sowie Toxizität vor und nach RLHF.",
        en: "Quantitative comparison of base model, full fine-tuning and LoRA using ROUGE-1, ROUGE-2 and ROUGE-L, plus toxicity before and after RLHF."
      },
      tech: ["Python", "PyTorch", "Hugging Face Transformers", "PEFT/LoRA", "TRL (PPO)", "Flan-T5", "ROUGE"],
      links: [{ type: "github", url: "https://github.com/danezi/generative-ai-with-large-language-models" }]
    },
    {
      id: "deepfake",
      cats: ["ai", "data"],
      cover: "assets/img/covers/deepfake.svg",
      screens: [],
      context: { de: "Konferenzpaper · Current Research Topics · Feb. 2026", en: "Conference paper · Current Research Topics · Feb 2026" },
      title: { de: "Deepfake-Videos erkennen: menschliche Wahrnehmung vs. KI", en: "Detecting deepfake videos: human perception vs. AI" },
      summary: {
        de: "Paper „From Human Perception to Artificial Intelligence“: vergleichende Analyse manueller und automatisierter Deepfake-Erkennung mit Fokus auf CNN, Vision Transformer, CViT und Explainable AI.",
        en: "Paper “From Human Perception to Artificial Intelligence”: comparative analysis of manual and automated deepfake detection, focusing on CNN, Vision Transformer, CViT and explainable AI."
      },
      problem: {
        de: "Deepfakes werden so realistisch, dass Menschen sie kaum noch erkennen. Leistungsfähige Modelle arbeiten dagegen als Black Box.",
        en: "Deepfakes have become so realistic that humans can barely detect them, while high-performing models work as black boxes."
      },
      solution: {
        de: "Auswertung aktueller Studien: menschliche Erkennungsleistung, Architekturvergleich CNN / ViT / CViT auf FaceForensics++ und DFDC sowie die Rolle von Grad-CAM, LIME und SHAP für nachvollziehbare Entscheidungen.",
        en: "Review of current studies: human detection performance, an architecture comparison of CNN / ViT / CViT on FaceForensics++ and DFDC, and the role of Grad-CAM, LIME and SHAP for explainable decisions."
      },
      result: {
        de: "Menschen erkennen Deepfakes laut Studienlage nur zu 55–62 % richtig, Deep-Learning-Modelle erreichen 95–98 %. Empfehlung: automatisierte Erkennung mit XAI und menschlicher Prüfung kombinieren.",
        en: "According to the literature, humans detect deepfakes correctly only 55–62% of the time, deep learning models reach 95–98%. Recommendation: combine automated detection with XAI and human review."
      },
      metric: { value: "55–62 % vs. 95–98 %", valueEn: "55–62% vs. 95–98%", label: { de: "Mensch vs. Modell (Literatur)", en: "human vs. model (literature)" } },
      tech: ["CNN", "Vision Transformer", "CViT/GenConViT", "Grad-CAM", "LIME", "SHAP", "FaceForensics++", "DFDC"],
      links: []
    },
    {
      id: "carsharing",
      cats: ["fullstack"],
      cover: "assets/img/covers/carsharing.svg",
      screens: [],
      context: { de: "Bachelorstudium · Hochschule Bremen", en: "Bachelor’s studies · Bremen University" },
      title: { de: "Lend & Move – Car-Sharing-Webanwendung", en: "Lend & Move – car-sharing web application" },
      summary: { de: "Full-Stack-Webanwendung für stationsbasiertes Car-Sharing mit Spring Boot und React.", en: "Full-stack web application for station-based car sharing with Spring Boot and React." },
      problem: {
        de: "Nutzer sollen Fahrzeuge an Stationen online finden und reservieren können, mit getrennten Rechten für Kunden und Verwaltung.",
        en: "Users should be able to find and reserve vehicles at stations online, with separate permissions for customers and administrators."
      },
      solution: {
        de: "REST-API mit Spring Boot für Stationen, Fahrzeuge, Tarife und Reservierungen. Authentifizierung mit Spring Security und JWT, Rollenmodell, Persistenz mit Spring Data JPA und MySQL, React-Frontend.",
        en: "Spring Boot REST API for stations, vehicles, tariffs and reservations. Authentication with Spring Security and JWT, role model, persistence with Spring Data JPA and MySQL, React frontend."
      },
      result: {
        de: "Vermietplattform nach dem Vorbild von Car-Sharing-Anbietern wie cambio: Registrierung und Login, Fahrzeuge an Stationen finden, Reservierungen verwalten.",
        en: "Rental platform modelled on car-sharing providers such as cambio: sign-up and login, finding vehicles at stations, managing reservations."
      },
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "MySQL", "React"],
      links: [{ type: "github", url: "https://github.com/danezi/lend_move_full" }]
    }
  ],

  experience: [
    {
      from: "01/2026", to: { de: "heute", en: "present" },
      company: "Beezubi Lernwelt GmbH", initials: "BZ",
      role: { de: "Werkstudent Softwareentwicklung, Data Science & KI", en: "Working student – software development, data science & AI" },
      points: {
        de: ["KI-gestützte Datenpipelines in Python, die Lehrmaterialien mittels LLMs in strukturierte Datenformate überführen", "Mehrsprachige Übersetzungs-Pipeline für Ausbildungsinhalte mit automatisierter Qualitätssicherung", "Weiterentwicklung der Beezubi-App (React Native, Supabase/PostgreSQL)", "Neuimplementierung und Deployment von beezubi.de, inkl. datengetriebenem Template-System zur automatisierten Generierung von Inhalten"],
        en: ["AI-powered Python data pipelines converting teaching material into structured data formats using LLMs", "Multilingual translation pipeline for training content with automated quality assurance", "Further development of the Beezubi app (React Native, Supabase/PostgreSQL)", "Rebuild and deployment of beezubi.de, including a data-driven template system for automated content generation"]
      },
      tech: ["LLMs", "Python", "React Native", "Supabase"]
    },
    {
      from: "01/2023", to: { de: "12/2025", en: "12/2025" },
      company: "Spectromat Massenspektrometer GmbH", initials: "SP",
      role: { de: "Werkstudent Full-Stack Developer", en: "Working student – full-stack developer" },
      points: {
        de: ["Java/Spring-Boot-Anwendungen und REST-APIs im Produktivbetrieb, Frontend mit React, agile Zusammenarbeit nach Scrum", "Weiterentwicklung des internen Bauteil-Verwaltungssystems: Ablege-, Reservierungs- und Rückgabeprozesse für Messgerätekomponenten, automatische Bestandsaktualisierung und bessere Nachverfolgbarkeit", "Datenbankmodellierung mit PostgreSQL, Docker-basierte Deployments, CI/CD mit GitHub Actions"],
        en: ["Java/Spring Boot applications and REST APIs in production, React frontend, agile teamwork with Scrum", "Extended the internal component management system: storage, reservation and return processes for instrument components, automatic stock updates and better traceability", "Database modelling with PostgreSQL, Docker-based deployments, CI/CD with GitHub Actions"]
      },
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "GitHub Actions"]
    },
    {
      from: "09/2024", to: { de: "02/2025", en: "02/2025" },
      company: "Spectromat Massenspektrometer GmbH", initials: "SP",
      role: { de: "Praktikum Firmware-Entwicklung", en: "Internship – firmware development" },
      points: {
        de: ["Firmware für PIC-Mikrocontroller in C", "CAN-Bus-Kommunikation und Tests"],
        en: ["Firmware for PIC microcontrollers in C", "CAN bus communication and testing"]
      },
      tech: ["C", "PIC", "CAN-Bus"]
    },
    {
      from: "11/2021", to: { de: "11/2022", en: "11/2022" },
      company: "Hochschule Bremen", initials: "HSB",
      role: { de: "Werkstudent IT", en: "Working student – IT" },
      points: {
        de: ["IT-Support und Dokumentation für 5.000+ Studierende", "Technische Schulungsmaterialien für Medientechnik-Systeme"],
        en: ["IT support and documentation for 5,000+ students", "Technical training material for media technology systems"]
      },
      tech: ["IT-Support"]
    }
  ],

  skills: [
    { icon: "code", name: { de: "Programmiersprachen", en: "Languages" }, items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C/C++"] },
    { icon: "brain", name: { de: "KI & LLM", en: "AI & LLM" }, items: ["LangChain", "LangGraph", "RAG", "Agentic AI", "OpenAI API", "Hugging Face", "Fine-Tuning", "scikit-learn", "TensorFlow"] },
    { icon: "server", name: { de: "Backend", en: "Backend" }, items: ["Spring Boot", "FastAPI", "Flask", "REST APIs", "Microservices"] },
    { icon: "layout", name: { de: "Frontend", en: "Frontend" }, items: ["React", "React Native", "Streamlit", "HTML/CSS"] },
    { icon: "db", name: { de: "Datenbanken", en: "Databases" }, items: ["PostgreSQL", "MySQL", "Supabase", { de: "Vektordatenbanken", en: "Vector databases" }] },
    { icon: "cloud", name: { de: "DevOps & Methoden", en: "DevOps & methods" }, items: ["Docker", "Git", "GitHub Actions", "CI/CD", "Linux", "Scrum"] },
    { icon: "spark", name: { de: "KI-Entwicklungswerkzeuge", en: "AI dev tools" }, items: ["Claude Code", "GitHub Copilot", "Cursor"] }
  ],

  certificates: [
    {
      title: "IBM RAG and Agentic AI Professional Certificate", issuer: "IBM", date: { de: "Nov. 2026", en: "Nov 2026" },
      url: "https://coursera.org/verify/professional-cert/9GM23QDYTAHH", highlight: true,
      // 10 Kurszertifikate; Verify-Link je Kurs ergänzen, sobald bekannt (url: "https://coursera.org/verify/...")
      courses: [
        { title: "Develop Generative AI Applications: Get Started" },
        { title: "Build RAG Applications: Get Started" },
        { title: "Vector Databases for RAG: An Introduction" },
        { title: "Advanced RAG with Vector Databases and Retrievers" },
        { title: "Build Multimodal Generative AI Applications" },
        { title: "Fundamentals of Building AI Agents", url: "https://coursera.org/verify/8AOD0EJJ8ZHD" },
        { title: "Agentic AI with LangChain and LangGraph" },
        { title: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI" },
        { title: "Build AI Agents using MCP" },
        { title: "RAG and Agentic AI Capstone Project" }
      ]
    },
    {
      title: "RAG for Generative AI Applications (Specialization)", issuer: "IBM", date: { de: "Okt. 2026", en: "Oct 2026" },
      url: "https://coursera.org/verify/specialization/2B5H65S6YI0B", highlight: true,
      note: { de: "Umfasst die ersten 4 Kurse des Professional Certificate", en: "Covers the first 4 courses of the Professional Certificate" }
    },
    { title: "Generative AI with Large Language Models", issuer: "AWS · DeepLearning.AI", date: { de: "Feb. 2026", en: "Feb 2026" }, url: "https://coursera.org/verify/GF5WYGO0BZEM", highlight: true },
    { title: "Developing AI Applications with Python and Flask", issuer: "IBM", date: { de: "März 2026", en: "Mar 2026" }, url: "https://coursera.org/verify/C9I9IXJ4FQ97" },
    { title: "Python for Data Science, AI & Development", issuer: "IBM", date: { de: "März 2026", en: "Mar 2026" }, url: "https://coursera.org/verify/RSBW4CO2NK7W" },
    { title: "Continuous Integration and Continuous Delivery (CI/CD)", issuer: "IBM", date: { de: "Mai 2026", en: "May 2026" }, url: "https://coursera.org/verify/EO971GKTQ7R9" },
    { title: "What is Data Science?", issuer: "IBM", date: { de: "Mai 2026", en: "May 2026" }, url: "https://coursera.org/verify/RR5JJRMZIFC4" },
    { title: "React Native", issuer: "Meta", date: { de: "März 2026", en: "Mar 2026" }, url: "https://coursera.org/verify/J6TG05DEFPOM" }
  ]
};
