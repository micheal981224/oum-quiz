const COURSES = {
  CBRE3103: {
    name: "Requirements Engineering",
    badgeClass: "badge-blue",
    quizBadgeStyle: "background:#E6F1FB; color:#0C447C;",
    color: "#185FA5",
    description: "10 topics · Elicitation, modelling, specifications, V&V, management",
    context: `CBRE3103 Requirements Engineering — OUM course covering:

Topic 1: Requirements Engineering Fundamentals
- Definition of software requirements and requirements engineering (RE)
- Why RE is challenging (complexity, ambiguity, stakeholder conflicts)
- RE process: Requirements Development and Requirements Management
- Project Blastoff: product purpose, scope of work, stakeholders
- Benefits of high-quality RE process

Topic 2: Requirements Elicitation
- Importance of elicitation in RE process
- Elicitation techniques: interviews, observation, prototyping, brainstorming
- Joint Application Development (JAD) sessions, workshops, questionnaires
- Ethnography, document analysis, use cases
- Guidelines and challenges in elicitation

Topic 3: Requirements Analysis and Negotiation
- Overview of requirements analysis and negotiation
- Building the analysis model: elements and patterns
- Analysis checklist for requirements
- Prioritising requirements: MoSCoW method, prioritisation scales, Analytic Hierarchy Process (AHP)
- Conflict identification and conflict resolution strategies
- Negotiating requirements, software tools for negotiation
- Assessing requirements risk

Topic 4: Types of Requirements
- Describing requirements (structured natural language, formal notation)
- Functional requirements: what the system should do
- Non-functional requirements (NFRs): performance, security, usability, reliability, maintainability, portability
- Classification of NFRs: product requirements, organisational requirements, external requirements
- Deriving NFRs from functional requirements
- Requirements for critical systems: safety, security, reliability
- Dependability and its components

Topic 5: Measurements for Requirements
- Getting to real requirements: impact of requirements errors
- Characteristics of well-defined requirements: unambiguous, complete, consistent, testable, feasible
- Fit criteria: attaching measurable criteria to requirements
- Fit criteria for functional requirements
- Fit criteria for non-functional requirements: look and feel, usability, security
- Measurement scales: nominal, ordinal, interval, ratio

Topic 6: Requirements Modelling
- Approaches for system modelling
- Context models: system boundary, environment
- Interaction models: use case diagrams (actors, use cases, relationships), sequence diagrams
- Behavioural models: activity diagrams (swimlanes, decision nodes)
- Structural models: class diagrams (classes, attributes, relationships, multiplicity)
- Model-driven architecture (MDA): platform-independent model (PIM), platform-specific model (PSM)

Topic 7: Requirements Specifications
- Software Requirements Specification (SRS): purpose, people involved
- Attributes of a good SRS: correctness, unambiguity, completeness, consistency, ranked for importance, verifiable, modifiable, traceable
- IEEE Standard 830-1998 SRS Template: structure and sections
- VOLERE Requirements Specification Template: shells, fit criteria, customer satisfaction
- Guidelines to avoid over-documentation

Topic 8: Requirements Verification and Validation
- Difference between verification (building the product right) and validation (building the right product)
- Importance and outcomes of V&V
- V&V techniques: reviews/inspections, prototyping, acceptance tests
- Requirements tests: checking for ambiguity, completeness, consistency, relevancy, viability
- Formal reviews: walkthroughs, inspections

Topic 9: Requirements Management
- Stable vs volatile requirements; factors leading to change
- Types of volatile requirements: mutable, emergent, consequential, compatibility
- Requirements Management Planning: identification, storage, CASE tools
- Requirements Change Management: change management process, impact analysis
- Requirements Configuration Management (RCM)
- Requirements Traceability: types (forward, backward), traceability tables, policies
- Requirements Status Tracking
- RE in SEI CMMI-DEV and ISO 9001

Topic 10: Requirements Reuse
- Benefits of requirements reuse: cost reduction, quality improvement, faster delivery
- Costs and problems of reuse: retrieval difficulty, context mismatch
- Implementations and sources of reusable requirements: application families, patterns
- Trends and issues in requirements reuse
- Ten practical steps to requirements reuse
- Software Product Lines (SPL): feature models, commonality and variability`
  },

  CBSM4203: {
    name: "Strategic Information System",
    badgeClass: "badge-teal",
    quizBadgeStyle: "background:#E1F5EE; color:#085041;",
    color: "#0F6E56",
    description: "8 topics · IS strategy, governance, competitive advantage, architecture",
    context: `CBSM4203 Strategic Information System — OUM course covering:

Topic 1: Introduction to Information Systems (IS)
- Definition of IS: people, processes, data, technology
- Types of IS: TPS (Transaction Processing System), MIS (Management Information System), DSS (Decision Support System), ESS (Executive Support System), EIS
- IS components: hardware, software, data, people, processes, networks
- Data vs information vs knowledge hierarchy
- Role of IS in modern business: operational efficiency, competitive advantage
- IS and organisational value creation

Topic 2: The Information Systems Strategy Triangle
- Three-way alignment: Business Strategy ↔ IS Strategy ↔ Organisational Strategy
- Business strategy frameworks: Porter's Five Forces (threat of new entrants, bargaining power of suppliers/buyers, threat of substitutes, competitive rivalry)
- Porter's Value Chain Analysis (primary and support activities)
- SWOT analysis in IS context
- IS strategy: what information, systems, infrastructure a business needs
- Organisational strategy: structure, culture, processes to enable IS

Topic 3: Strategic Use of Information Resources
- Competitive advantage using IT: cost leadership, differentiation, focus (Porter's generic strategies)
- Resource-Based View (RBV) of the firm: VRIN framework (Valuable, Rare, Inimitable, Non-substitutable)
- Sustaining competitive advantage with IS
- IT and industry structure changes
- Strategic information systems: interorganisational systems, EOS
- Network effects and platform strategies
- First-mover advantage and switching costs

Topic 4: Organisational Strategy and Information Systems
- Organisational structures: functional, divisional, matrix, flat, hierarchical
- Business processes: definition, types (core vs support), process mapping
- IS enabling organisational change: automation, informating, transforming
- Business Process Reengineering (BPR): principles, Hammer and Champy framework, radical redesign
- Workflow management systems
- IT and organisational learning: knowledge management systems

Topic 5: Information Systems and Business Transformation
- Enterprise Resource Planning (ERP): definition, modules (finance, HR, manufacturing, SCM), SAP, Oracle
- Supply Chain Management (SCM): upstream/downstream, bullwhip effect, SCM systems
- Customer Relationship Management (CRM): operational, analytical, collaborative CRM
- E-commerce: B2B, B2C, C2C, B2G; benefits and challenges
- Business transformation models: Venkatraman's model (5 levels)
- Digital transformation and IS-enabled innovation

Topic 6: Architecture and Infrastructure
- IT architecture: definition, layers (business, application, data, technology)
- Infrastructure components: hardware, networks, storage, operating systems, middleware
- Enterprise architecture frameworks: Zachman Framework (rows and columns), TOGAF (ADM phases)
- Cloud computing: IaaS, PaaS, SaaS; public, private, hybrid clouds; benefits and risks
- Virtualisation: server, storage, desktop virtualisation
- Scalability, reliability, security in infrastructure planning

Topic 7: The Business of Information Technology
- IT budgeting models: zero-based budgeting, chargeback, cost allocation
- Total Cost of Ownership (TCO): acquisition, operation, maintenance costs
- IT investment evaluation: ROI, NPV, payback period; business case for IT
- Sourcing strategies: outsourcing (benefits: cost, expertise; risks: control, security), insourcing, co-sourcing, selective sourcing
- Managing the IT function: IT department roles, reporting structures
- Service Level Agreements (SLAs): metrics, KPIs, penalties
- IT vendor management and relationship management

Topic 8: Governance of the Information Systems Organisation
- IT governance definition: decision rights and accountability for IT
- COBIT framework (Control Objectives for IT): domains (Plan, Acquire, Deliver, Monitor), maturity model
- IT governance structures: IT steering committee, IT governance board, CIO role
- Chief Information Officer (CIO) vs Chief Technology Officer (CTO) responsibilities
- IT risk management: risk identification, assessment, mitigation
- Internal controls in IS: Sarbanes-Oxley (SOX) compliance
- IT audit and compliance
- Balancing centralisation vs decentralisation of IT`
  },

  CBSN4103: {
    name: "Network Security",
    badgeClass: "badge-coral",
    quizBadgeStyle: "background:#FAECE7; color:#712B13;",
    color: "#993C1D",
    description: "12 topics · Threats, firewalls, cryptography, intrusion detection",
    context: `CBSN4103 Network Security — OUM course covering:

Topic 1: State of Network Security
- CIA triad: Confidentiality, Integrity, Availability
- Current threat landscape: volume and sophistication of attacks
- Security principles: least privilege, defence in depth, fail-safe defaults, separation of duties
- Categories of attacks: passive (eavesdropping, traffic analysis) vs active (modification, DoS, replay)
- Security policies: acceptable use policy, data classification, incident response policy
- Risk management fundamentals: threats, vulnerabilities, assets, risk

Topic 2: New Approaches to Cyber Security
- Zero Trust Architecture: "never trust, always verify"; micro-segmentation
- NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover
- Defence-in-depth: layered security controls (physical, technical, administrative)
- Cyber resilience: anticipate, withstand, recover, adapt
- Security by design principles
- Threat intelligence and information sharing

Topic 3: Access Control
- Authentication: something you know (password), something you have (token), something you are (biometrics)
- Multi-Factor Authentication (MFA) and Two-Factor Authentication (2FA)
- Password security: hashing, salting, complexity requirements
- Authorization models: Discretionary Access Control (DAC), Mandatory Access Control (MAC), Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC)
- Identity and Access Management (IAM): SSO, LDAP, Active Directory
- AAA framework: Authentication, Authorization, Accounting
- Principle of least privilege

Topic 4: Attacks and Threats
- Malware types: viruses (self-replicating, need host), worms (self-replicating, no host), Trojans, ransomware, spyware, adware, rootkits, botnets
- Social engineering: phishing, spear phishing, whaling, vishing, smishing, pretexting, baiting
- Denial of Service (DoS) and Distributed DoS (DDoS): volumetric, protocol, application-layer attacks
- SQL injection: exploiting unsanitised database queries
- Cross-Site Scripting (XSS): stored vs reflected
- Man-in-the-Middle (MitM) attacks: ARP poisoning, session hijacking
- Buffer overflow attacks: stack vs heap overflow
- Zero-day exploits

Topic 5: Wireless Security
- IEEE 802.11 standards: 802.11a/b/g/n/ac/ax (Wi-Fi 6)
- WEP vulnerabilities: weak IV, RC4 stream cipher flaws, easily cracked
- WPA (Wi-Fi Protected Access): TKIP, still vulnerable
- WPA2: AES-CCMP encryption, PBKDF2 key derivation, stronger security
- WPA3: SAE (Simultaneous Authentication of Equals), forward secrecy
- Wireless attacks: evil twin (rogue AP), wardriving, deauthentication attacks, KRACK
- Bluetooth security: pairing modes, bluejacking, bluesnarfing
- Securing wireless networks: SSID hiding, MAC filtering, WPA2-Enterprise (802.1X), network segmentation

Topic 6: Firewalls
- Packet filtering firewalls: inspects IP headers, port numbers, stateless
- Stateful inspection firewalls: tracks connection state, session table
- Application-layer (proxy) firewalls: deep packet inspection, understands protocols
- Next-Generation Firewalls (NGFW): IDS/IPS, application awareness, SSL inspection
- DMZ (Demilitarized Zone): buffer zone between internal and external networks, bastion host
- Firewall rules: ACLs, default deny policy, rule ordering (most specific first)
- Personal firewalls vs network firewalls; firewall placement strategies

Topic 7: Intrusion Detection / Prevention Systems
- IDS vs IPS: IDS detects and alerts; IPS detects and blocks
- Signature-based detection: matches known attack patterns (low false positives, misses zero-days)
- Anomaly-based (behaviour-based) detection: baselines normal behaviour (catches new attacks, higher false positives)
- HIDS (Host-based IDS): monitors individual host logs, files, processes
- NIDS (Network-based IDS): monitors network traffic; placement at network perimeter or internal segments
- False positives vs false negatives: trade-off in detection
- Honeypots and honeynets: decoy systems to detect and study attackers
- SIEM integration: correlating IDS alerts

Topic 8: Secret Communication — Cryptography
- Symmetric encryption: one key for encrypt and decrypt; AES (128/192/256-bit), DES (56-bit, deprecated), 3DES
- Asymmetric encryption: public key encrypts, private key decrypts; RSA, ECC (Elliptic Curve Cryptography)
- Hash functions: one-way, fixed output; MD5 (128-bit, broken), SHA-1 (deprecated), SHA-256, SHA-3
- Digital signatures: hash + asymmetric encryption to provide authenticity and non-repudiation
- Key management: key generation, distribution, storage, rotation, revocation
- PKI (Public Key Infrastructure): Certificate Authority (CA), digital certificates (X.509), certificate chain
- Diffie-Hellman key exchange: establish shared secret over insecure channel
- Hybrid encryption: asymmetric for key exchange, symmetric for data (used in TLS)

Topic 9: Covert Communication
- Steganography: hiding data within other data (images, audio, video, text)
- Techniques: LSB (Least Significant Bit) substitution, spread spectrum, covert channels
- Covert channels: timing channels, storage channels in networks
- Watermarking: embedding ownership information; robust vs fragile watermarks
- Steganalysis: detecting steganography; statistical analysis
- Differences between steganography (hiding existence) and cryptography (hiding content)

Topic 10: Applications of Secure/Covert Communication
- VPN (Virtual Private Network): tunnelling protocols — IPsec (tunnel/transport mode), SSL/TLS VPN, L2TP, PPTP (insecure)
- SSL/TLS: handshake process, certificate verification, cipher suites, TLS 1.3 improvements
- HTTPS: HTTP over TLS; certificate pinning
- Secure email: S/MIME (certificate-based), PGP/GPG (web of trust), email encryption and signing
- Secure shell (SSH): replacing Telnet, key-based authentication
- Secure protocols overview: SFTP, FTPS, SNMP v3, HTTPS

Topic 11: Intrusion Detection and Response
- Incident response lifecycle: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned (NIST/SANS models)
- Digital forensics: evidence preservation, chain of custody, volatile vs non-volatile evidence
- Log analysis: types of logs (system, application, security, network), log management, SIEM
- Containment strategies: isolating compromised systems, network segmentation
- Eradication and recovery: removing malware, restoring from backups, patching
- Computer Emergency Response Team (CERT) / CSIRT roles

Topic 12: Security of Emerging Technology
- IoT security: resource constraints, default credentials, firmware vulnerabilities, botnet risks (Mirai)
- Cloud security: shared responsibility model, data sovereignty, IAM in cloud, cloud misconfigurations
- AI/ML in security: automated threat detection, adversarial attacks on ML models, AI-powered phishing
- Mobile security: Android vs iOS security models, MDM (Mobile Device Management), app sandboxing, BYOD policy
- 5G security: new attack surfaces, network slicing security, authentication improvements
- Blockchain security: immutability, 51% attacks, smart contract vulnerabilities
- Quantum computing threats to cryptography: Shor's algorithm breaking RSA/ECC, post-quantum cryptography`
  }
};
