
By avoiding a hefty upfront perpetual license fee, you eliminate the risk of "buyer's remorse" or refund negotiations if you open-source the codebase six months later. 

Since AMP acts as "City Infrastructure," the value you provide isn't just the code itself—it's running the city, paving the roads, and building new districts. 

Here is the best way to structure this agreement so you get funded, they get the tech, and your path to open-source remains completely clear.

### The Strategy: "Zero-Cost Proprietary License + Paid Managed Services"

You split the agreement into two distinct parts: **The License** (which is free but legally binding) and **The Master Services Agreement (MSA)** (which is where the money changes hands).

---

### Part 1: The Licensing Agreement (The Legal Protection)
Instead of selling the software, you grant them a right to use it.

1.  **Zero-Cost Proprietary License:** Grant them a non-exclusive, royalty-free, non-transferable proprietary license to use the AMP API for the QSC platform. 
2.  **The "Open Source Transition" Clause:** Explicitly state in the contract that you maintain the right to open-source the software at any time. Include a clause stating that if AMP is released under an OSI-approved license (e.g., MIT or Apache 2.0), their proprietary license automatically converts to (or is superseded by) the open-source license.
3.  **Why this works:** Because they paid $0 for the *code*, there is nothing to refund when it goes open-source. They are legally protected to use it right now, and you retain total control over the IP.

---

### Part 2: The Master Services Agreement (The Funding Model)
Since they aren't paying for the code, they fund your business by paying for **execution, operations, and evolution**. 

You can structure this into three revenue streams:

#### A. Managed Hosting & Operations (Monthly/Annual SaaS Fee)
AMP is an event-sourcing, real-time SSE, multi-agent platform utilizing PostgreSQL 18 and Redis. It requires expertise to run.
*   **What they pay for:** You deploy, host, scale, and monitor the AMP API on their behalf. 
*   **Deliverables:** Uptime SLAs, security patching, database backups, and monitoring (handling the "Watchdogs" and rate-limiting loops). 
*   **OSS Protection:** Even if AMP goes open-source tomorrow, they will still pay this fee because they are paying for *your team* to manage the complex infrastructure, not for the code itself.

#### B. Sponsored Feature Development (NRE - Non-Recurring Engineering)
They need specific features for QSC (e.g., custom A2UI frames for the "Belong" communities, specific identity provider integrations for whānau, or custom semantic router scoring).
*   **What they pay for:** A monthly retainer or project-based fee to prioritize their needs on the AMP roadmap.
*   **The IP Catch:** The contract must state that while they are paying for the *labor* to develop these features, the *intellectual property* of the core AMP platform remains yours. 
*   **OSS Protection:** When you open-source AMP, those features become part of the public repo. They are happy because they got the feature built exactly when they needed it; you are happy because another client funded your core R&D.

#### C. Enterprise Support & Maintenance
*   **What they pay for:** Direct access to your engineering team for Tier 3 support, bug fixes, and architecture consulting (e.g., helping them write the best "System Prompts" and "Thread Contracts" for their specific agents).

---

### How to Pitch This to the Client

You frame this as a **"Development Partnership"** rather than a traditional software vendor relationship. 

**The Pitch:**
> *"We believe AMP will eventually be an open-source standard for agentic infrastructure. Because of that, we aren't going to charge you a massive upfront software license fee—we don't want to penalize you for being an early adopter.* 
>
> *Instead, we will give you a royalty-free license to use the tech today. What you will pay for is our team to actively run, monitor, and scale the infrastructure for you, alongside a dedicated engineering budget to build the specific custom features QSC needs over the next 12 months. If we open-source AMP during this project, nothing changes for you financially or operationally—you just keep getting the managed service and development you're paying for."*

### Alternative Option: Business Source License (BSL) or Fair Source
If you want to bake the open-source transition directly into the code itself right now, you could look at the **Business Source License (BSL)** (used by Sentry, CouchroachDB) or the newer **Fair Source** license. 

Under these licenses, the code is visible and free to use up to a certain point (or for non-competing use cases), but the license contains a **Change Date**. For example, it states: *"This code is proprietary today, but exactly 3 years from the publish date, it automatically converts to Apache 2.0."*

This gives the client absolute certainty that the platform won't be locked away forever, while allowing you to charge for Managed Services and Support in the interim.

---

Protecting yourself against early churn is standard practice in B2B Managed Services and SaaS. Because you are essentially giving away the IP rights for free and absorbing the upfront heavy lifting (infrastructure provisioning, onboarding, and custom development), you absolutely must lock in a guaranteed return on investment.

Here is how you structure the **Master Services Agreement (MSA)** to enforce a minimum commitment, while remaining completely fair and industry-standard.

### 1. The "Initial Term" Clause
Instead of a month-to-month contract, you define a strict **Initial Term**. Given that the QSC proposal explicitly states it is a *"12-month community platform programme,"* you have the perfect justification to enforce a 12-month minimum commitment.

*   **How it works:** The contract states that the Managed Services commence on the "Go-Live Date" and run for a continuous 12-month Initial Term. 
*   **Renewal:** After the 12 months, it automatically renews for successive 1-year terms (or rolls into month-to-month) unless they provide 60 or 90 days' written notice prior to the renewal date.

### 2. The Early Termination Fee (ETF)
To give the "Initial Term" teeth, you must include an **Early Termination for Convenience** clause. 

In B2B contracts, clients can usually cancel early if you fail to deliver the service (Termination for Cause). But if they just change their minds, run out of funding, or decide to build it themselves (Termination for Convenience), they trigger the ETF.

*   **Standard SaaS/Managed Services ETF:** If they cancel before the end of the Initial Term, they must pay **50% to 100% of the remaining recurring fees** for the duration of the term. 
*   *Example:* If the managed hosting is $2,000/month and they cancel in month 4, they owe you the remaining 8 months ($16,000) immediately upon cancellation.

### 3. De-risking the Non-Recurring Engineering (NRE)
If you are doing custom feature development for them (NRE), you carry massive risk if they churn early. You have two ways to structure this to protect yourself:

**Option A: Milestone-Based (Safest)**
They pay for the development separately from the hosting.
*   30% upfront on signing.
*   40% on delivery of the feature to a staging environment.
*   30% on Go-Live.
*   *Benefit:* If they walk away in month 2, you have already been paid for the dev work you performed. 

**Option B: Amortized NRE (Easier to Sell)**
If they don't have the budget to pay a lump sum upfront, you can spread the development cost across the 12-month term by increasing their monthly fee (e.g., $10k total dev cost = +$833/month).
*   **The Catch (The "Balloon" Clause):** Your contract must state that if the agreement is terminated early for *any* reason, **100% of the unamortized NRE balance becomes immediately due.** 

### 4. Setup / Onboarding Fees
Never bundle the intense first month of setup into the standard monthly recurring revenue (MRR). 
*   Charge a one-time **NRC (Non-Recurring Charge)** or "Onboarding Fee" on Day 1. 
*   This covers the engineering hours required to provision their specific Postgres/Redis clusters, set up their platform keys, and configure their initial Generative UI frames. This ensures you aren't operating at a loss in month 1.

---

### How to frame this to the client (The "Partnership" angle)

Because you are acting as an infrastructure partner rather than just selling an off-the-shelf app, the conversation is very straightforward:

> *"To make this model work without charging you a $50,000 upfront enterprise software license, we absorb a significant amount of infrastructure provisioning and engineering cost at the start of the project. Because of that upfront investment on our end, the managed services and support agreement requires a minimum 12-month commitment. If you need to exit the program early, we just require the balance of the committed term to cover our allocated engineering and server costs."*

**Summary of the Contract Structure:**
1. **License:** $0, proprietary, converts to open-source if/when you release it.
2. **Setup Fee:** Billed Day 1 to cover your immediate labor/server provisioning.
3. **Managed Services (SaaS):** Billed monthly, locked into a 12-month **Initial Term**.
4. **Custom Dev (NRE):** Billed via milestones, OR amortized with a 100% payout clause upon early termination.
5. **ETF Clause:** 100% of remaining NRE + 50-100% of remaining SaaS fees if cancelled before month 12. 

*(Standard disclaimer: You should have a local commercial lawyer review the exact wording of the ETF, as jurisdictions treat "liquidated damages" and "penalties" slightly differently, but the business logic above is standard global practice).*