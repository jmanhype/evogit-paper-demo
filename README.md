# EvoGit

**Decentralized Code Evolution** - A demonstration of AI-powered autonomous repository improvement.

## Overview

EvoGit is a research project demonstrating how AI agents can autonomously improve codebases through recursive self-improvement patterns. This repository uses Claude Code to identify gaps, implement fixes, and maintain itself.

## Features

- 🤖 **Autonomous Code Review**: Claude Code agent runs twice daily to identify improvements
- 🔄 **Recursive Learning Model (RLM)**: Uses peek, grep, partition, and recurse patterns
- 🛡️ **Safe Guardrails**: Follows strict rules defined in `CLAUDE.md` to prevent breaking changes
- 📊 **Automated Quality Checks**: Integrated with Qodo for additional code review

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/evogit-paper-demo.git
cd evogit-paper-demo

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Production Build

```bash
npm run build
npm start
```

## How It Works

### Self-Improvement Workflow

The `.github/workflows/self-improve.yml` workflow runs automatically:

1. **Assessment Phase**: Claude Code explores the codebase using Glob and Grep
2. **Implementation Phase**: Identifies 2-4 high-impact improvements and implements them
3. **PR Creation**: Creates a pull request with changes and triggers Qodo review

### Guardrails

All modifications follow strict rules defined in `CLAUDE.md`:

✅ **Allowed**: Documentation, bug fixes, tests, code quality improvements, CI/CD configs
❌ **Restricted**: Breaking API changes, removing features, heavy dependencies

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── self-improve.yml   # Automated improvement workflow
├── pages/
│   └── index.js               # Main landing page
├── styles/
│   └── globals.css            # Global styles
├── CLAUDE.md                  # AI agent guardrails
├── package.json               # Project dependencies
└── README.md                  # This file
```

## Development

### Running Locally

```bash
npm run dev
```

### Manual Improvement Trigger

You can manually trigger the self-improvement workflow from the GitHub Actions tab.

## Research Context

This project is part of research into:

- **Autonomous Software Engineering**: Can AI agents maintain and improve codebases?
- **Recursive Learning Models**: Applying RLM patterns to code review
- **AI Safety**: Guardrails and constraints for autonomous code modification

## Contributing

This repository is designed for autonomous improvement by AI agents. For human contributions, please:

1. Read `CLAUDE.md` to understand the guardrails
2. Open an issue for discussion before making major changes
3. Follow existing code patterns and style

## License

MIT License - See LICENSE file for details

## Acknowledgments

- Built with [Claude Code](https://claude.com/claude-code) by Anthropic
- Uses GitHub Actions for automation
- Integrated with Qodo for code review

---

🤖 **This project improves itself!** Check the pull requests to see autonomous improvements in action.
