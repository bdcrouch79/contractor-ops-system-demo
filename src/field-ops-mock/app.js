const cards = [
  { label: "Open Issues", value: "23", note: "Resolved records excluded from the current field view." },
  { label: "Major Or Critical", value: "9", note: "Highest-attention issues across active and closeout-stage work." },
  { label: "Overdue Closeout Items", value: "6", note: "Most of the turnover pressure sits in Glenpark and Brookstone." },
  { label: "Projects On Watch", value: "4", note: "Field and closeout conditions still need close management." }
];

const issues = [
  ["FI-305 | Temporary egress conflict", "IR-103", "Critical", "Aaron Pike", "Escalated"],
  ["FI-304 | Dock startup delay", "IR-102", "Major", "Tyler Boone", "Escalated"],
  ["FI-315 | Service routing strain", "IR-107", "Major", "Jordan Hayes", "Escalated"],
  ["FI-309 | Storefront correction delay", "IR-104", "Moderate", "Olivia Chen", "Escalated"],
  ["FI-324 | Sensor package incomplete", "IR-105", "Major", "Noah Whitaker", "Open"]
];

const readiness = [
  { title: "Glenpark Retail Interior Refresh", meta: "4 open closeout items | 3 overdue | readiness at risk" },
  { title: "Brookstone Office Suite Modernization", meta: "4 open closeout items | 2 overdue | turnover still on watch" },
  { title: "Northgate Medical Office Renovation", meta: "3 planned closeout items | nothing overdue yet" }
];

const escalated = [
  { title: "Riverside Schools Facility Upgrade", meta: "Safety route conflict remains the top escalation." },
  { title: "Cedar Hill Service Response Program", meta: "Routing strain and part backlog are affecting stability." },
  { title: "Westfield Distribution Dock Expansion", meta: "Material and access issues still need tight coordination." }
];

document.getElementById("summary-cards").innerHTML = cards.map((item) => `
  <article class="card">
    <div class="card-label">${item.label}</div>
    <div class="card-value">${item.value}</div>
    <div class="card-note">${item.note}</div>
  </article>
`).join("");

document.getElementById("issue-rows").innerHTML = issues.map(([issue, project, severity, owner, status]) => `
  <tr>
    <td>${issue}</td>
    <td>${project}</td>
    <td><span class="badge ${severity.toLowerCase()}">${severity}</span></td>
    <td>${owner}</td>
    <td>${status}</td>
  </tr>
`).join("");

function renderStack(id, rows) {
  document.getElementById(id).innerHTML = rows.map((row) => `
    <div class="stack-item">
      <div class="stack-title">${row.title}</div>
      <div class="stack-meta">${row.meta}</div>
    </div>
  `).join("");
}

renderStack("closeout-readiness", readiness);
renderStack("escalated", escalated);
