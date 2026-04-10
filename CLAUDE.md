# pluginTest

This project uses the **claude-ops** agent workflow system.

## Source of Truth

All agents operating in this repo should read `.github/templates/workflow.md` first. It defines:
- Project structure and ticket conventions
- The full ticket lifecycle (create → research → plan → build → verify)
- GitHub Project board IDs and status option IDs for moving tickets
- Key CLI commands for issue and project management

## Skills

Skills are available in `.claude/skills/`. Each subdirectory contains a `SKILL.md` that defines how to invoke that agent role:

| Skill | Purpose |
|---|---|
| `create-ticket` | Create a new bug or work order ticket |
| `research` | Investigate a ticket topic and write findings |
| `plan` | Write or refine a plan.md for a ticket |
| `build` | Orchestrate the full build phase (all domains) |
| `code-build` | Write or modify code files |
| `doc-build` | Write documentation |
| `script-build` | Write automation scripts |
| `api-build` | Build API integrations |
| `figma-build` | Execute Figma canvas work |
| `vqa` | Run QA verification on completed work |
| `project-start` | Initialize a new repo with this workflow |
