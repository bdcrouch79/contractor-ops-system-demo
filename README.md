# IronRidge Field Operations Tracker

## Overview

This repo shows what a more field-aware internal system can look like inside a contractor environment.

The IronRidge Field Operations Tracker is built around issue severity, job-level exceptions, punch work, and closeout readiness across active and closing projects. It is meant to feel like something superintendents, PMs, and operations leads would recognize.

## Business Problem

Field issues, punch items, closeout dependencies, and job exceptions often live across PM notes, email chains, spreadsheets, and whoever happens to be carrying the follow-up. That makes it harder for the field and the office to see the same picture at the same time.

## What This Repo Adds

This repo models a contractor-centered tracking layer with shared issue and closeout data, concise lifecycle documentation, and a static internal-tooling mock. The focus is what is open, what is aging, what is severe, and what is holding closeout back.

## Ecosystem Context

This repo represents the field-aware operating layer within the broader IronRidge demo ecosystem. It provides the issue and closeout detail that can trigger support requests in `workflow-drag-reduction-demo`, create follow-through items in `execution-infrastructure-demo`, and feed risk or readiness signals into `ops-visibility-demo`.

## Repository Structure

- `docs/` overview, business context, architecture, field issue lifecycle, diagrams, and ecosystem framing
- `data/raw/` employees, projects, field issues, and closeout items
- `data/curated/` issue aging, closeout readiness, and escalation-focused summaries
- `data/sample_exports/` field operations summary export
- `src/field-ops-mock/` static tracker mock for walkthroughs and screenshots
- `assets/` shared visual assets including the IronRidge wordmark
- `notes/` roadmap and screenshot planning

## Data And Sample Assets

The raw layer focuses on issue type, severity, ownership, due dates, resolution status, and closeout dependency. Curated outputs condense that information into the kinds of views a superintendent, operations manager, or PM would use to understand current field exposure.

## Mock Experience

The mock tracker emphasizes open issues, severity visibility, escalated conditions, and closeout readiness in a format that feels like an internal contractor operations screen rather than a generic template.

## Future Enhancements

- add mobile-friendly issue intake concepts for field staff
- introduce evidence, attachment, and photo placeholders
- expand recurring issue trend views by type or vendor
- connect closeout readiness more explicitly to punch completion movement

## Fictional Demo Notice

This repository is part of a fictional IronRidge Contractors environment built to show reporting, workflow, execution, and field operations design. The names and records are made up. The day-to-day contractor friction is not.
