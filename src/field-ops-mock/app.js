const cards = [
  { label: "Open Issues", value: "23", note: "Resolved records excluded from the current field view." },
  { label: "Critical Escalations", value: "1", note: "Riverside is still the issue most likely to force intervention." },
  { label: "Closeout Drag", value: "2", note: "Glenpark is carrying the clearest turnover friction." },
  { label: "Projects On Watch", value: "4", note: "Field and closeout conditions still need close management." }
];

const issues = [
  ["FI-305", "Temporary egress conflict", "IR-103", "Critical", "Escalated", "AI-502"],
  ["FI-323", "Startup sheets missing", "IR-104", "Moderate", "Open", "AI-509"],
  ["FI-315", "Service routing strain", "IR-107", "Moderate", "In Progress", "AI-504"],
  ["FI-309", "Storefront correction delay", "IR-104", "Moderate", "Escalated", "Owner follow-up"],
  ["FI-324", "Sensor package incomplete", "IR-105", "Major", "Open", "Procurement review"]
];

const readiness = [
  { title: "Glenpark Retail Interior Refresh", meta: "Startup sheets and attic stock are still unresolved, so turnover pressure is now operational." },
  { title: "Brookstone Office Suite Modernization", meta: "4 open closeout items | 2 overdue | turnover still on watch" },
  { title: "Northgate Medical Office Renovation", meta: "3 planned closeout items | nothing overdue yet" }
];

const escalated = [
  { title: "Riverside Schools Facility Upgrade", meta: "Temporary egress conflict is still unresolved and remains tied directly to AI-502." },
  { title: "Cedar Hill Service Response Program", meta: "Routing instability is active in the field and still needs follow-through behind AI-504." },
  { title: "Glenpark Retail Interior Refresh", meta: "Closeout pressure is no longer abstract; startup sheets and attic stock are still missing." }
];

document.getElementById("summary-cards").innerHTML = cards.map((item) => `
  <article class="status-card">
    <div class="card-label">${item.label}</div>
    <div class="card-value">${item.value}</div>
    <div class="card-note">${item.note}</div>
  </article>
`).join("");

function getStatusClass(status) {
  if (status === "Escalated") {
    return "critical";
  }

  if (status === "In Progress") {
    return "major";
  }

  return "moderate";
}

document.getElementById("issue-rows").innerHTML = issues.map(([issueId, description, project, severity, status, relatedAction]) => `
  <tr>
    <td><span class="row-id">${issueId}</span></td>
    <td><div class="row-description">${description}</div></td>
    <td>${project}</td>
    <td><span class="badge ${severity.toLowerCase()}">${severity}</span></td>
    <td><span class="badge ${getStatusClass(status)}">${status}</span></td>
    <td><span class="action-pill">${relatedAction}</span></td>
  </tr>
`).join("");

function renderStack(id, rows) {
  document.getElementById(id).innerHTML = rows.map((row) => `
    <article class="stack-item">
      <div class="stack-title">${row.title}</div>
      <div class="stack-meta">${row.meta}</div>
    </article>
  `).join("");
}

renderStack("closeout-readiness", readiness);
renderStack("escalated", escalated);
