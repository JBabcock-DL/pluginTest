# pluginTest

This project follows the **claude-ops** agent workflow system.

## Source of Truth

All agents operating in this repo must read `.github/templates/workflow.md` first. It contains:
- Project structure and conventions
- Ticket lifecycle (create → research → plan → build → verify)
- GitHub Project board IDs, status field IDs, and status option IDs
- Key commands for managing issues and the project board

## Skills

Workflow skills are available in `.claude/skills/`:

| Skill | Purpose |
|---|---|
| `create-ticket` | Create a new bug or work order ticket and sync to GitHub |
| `research` | Run a research agent on a ticket |
| `plan` | Write or refine plan.md using plan mode |
| `build` | Orchestrate the full build phase across parallel agents |
| `code-build` | Write or modify code files |
| `doc-build` | Write or update documentation |
| `script-build` | Write automation scripts |
| `api-build` | Build API integrations or Claude API features |
| `figma-build` | Execute Figma canvas work |
| `vqa` | Run visual and functional QA on completed work |
| `project-start` | Initialize a new project with this workflow structure |

## Getting Started

1. Read `.github/templates/workflow.md` to understand the project structure and GitHub Project board configuration
2. Use `/create-ticket` to start your first ticket
3. Follow the ticket lifecycle defined in workflow.md
