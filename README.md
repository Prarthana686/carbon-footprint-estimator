#  Carbon Footprint Estimator Lite

> Make invisible emissions visible.

Carbon Footprint Estimator Lite is a lightweight web application built using **React + Vite** that helps users understand the hidden environmental impact of everyday digital activities.

In a world where digital feels “clean,” this tool reveals the carbon emissions generated from common actions like sending emails, streaming videos, using cloud storage, and attending video calls.

---

##  Problem Statement

Most users assume digital activities have negligible environmental impact. However, data centers and network infrastructures consume massive amounts of electricity, leading to carbon emissions.

There is a lack of awareness about:

- The environmental cost of streaming
- Energy usage in video conferencing
- Carbon footprint of email systems
- Impact of cloud storage

This project addresses that gap by providing a simple, fast, and understandable carbon estimation tool.

---

##  Features

- 📧 Calculate emissions from Emails
- 🎬 Estimate Video Streaming impact
- ☁️ Measure Cloud Storage footprint
- 📹 Analyze Video Call emissions
- ⚡ Instant CO₂ calculation
- 🚦 Impact Level Indicator:
  - 🟢 Low Impact
  - 🟡 Moderate Impact
  - 🔴 High Impact
- 📊 Clear visual feedback with alert badge
- 🎨 Modern, startup-style UI
- 🧩 Modular component-based architecture

---

##  Tech Stack

| Technology | Purpose |
|------------|----------|
| React | Frontend UI library |
| Vite | Fast development build tool |
| JavaScript | Core logic |
| JSON | Emission factor data storage |
| CSS | Modern responsive styling |
| Git & GitHub | Version control |

---

### Architecture Principles Used

- Separation of concerns
- Reusable UI components
- Centralized calculation logic
- External JSON data handling
- Clean folder organization for scalability

---

##  How It Works

1. The user selects a digital activity.
2. The user enters a quantity (e.g., 100 emails).
3. The application:
   - Retrieves the emission factor from `emissions.json`
   - Multiplies it by the input quantity
   - Calculates total CO₂ emissions (in grams)
4. The system assigns a risk level based on thresholds:
   - < 500g → Low
   - 500–2000g → Moderate
   - > 2000g → High
5. The result is displayed with:
   - Total emission
   - Alert badge
   - Short explanation

---

##  What We Learned

- Rapid prototyping using React + Vite
- Designing scalable frontend architecture
- Managing component state with React Hooks
- Structuring data using JSON
- Handling real-time calculations
- Creating clean UI/UX for sustainability awareness
- Using Git for collaborative development

---

##  Future Enhancements

- 📊 Monthly carbon tracking dashboard
- 🌎 Real-time carbon intensity API integration
- 🏆 Gamified Eco Score system
- 📈 Data visualization with charts
- 🌙 Dark mode support
- 🌱 Personalized sustainability recommendations
- 📱 Fully mobile-optimized experience

---

##  Developed By

- **Prarthana Bharathiraja**
- **Hariharan Vimalathithan**

Hackathon Project – 2026

---

##  Vision

To build tools that make sustainability awareness simple, measurable, and actionable in the digital age.

---

##  Quote

“Digital convenience should not mean environmental ignorance.”
