# Portfolio

A modern, minimalist portfolio website built with Next.js and TypeScript.

## Features

- **Clean Design**: Minimalist interface with dark/light mode support
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Sections**: 
  - Projects showcase with external links
  - Professional experience timeline
  - Comprehensive tools & technologies display
- **Smooth Animations**: Elegant fade and scale animations throughout
- **Modern Tech Stack**: Built with cutting-edge technologies

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Icons**: DevIcons CDN for consistent technology icons
- **Analytics**: Vercel Analytics integration
- **Theme**: Dark/Light mode toggle

## Tools & Technologies Showcased

### Programming
- Python, SQL, TypeScript, Bash

### Data Tools
- Pandas, NumPy, Scikit-Learn, Plotly, Matplotlib, Looker Studio, Excel

### Cloud & DevOps
- GCP, AWS, Azure, Docker, Kubernetes, Jenkins, GitHub Actions, Ansible, Apache Airflow, Git, Linux

### Backend Development
- Node.js, Django, FastAPI, PostgreSQL, MongoDB, SQLAlchemy, SQLite, Redis

### Development Tools
- VS Code, Zsh, Nano

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/            # Reusable UI components
│   ├── icons/            # Custom SVG icon components
│   ├── ui/               # shadcn/ui components
│   └── animations/       # Animation components
├── utilities/            # Data and configuration files
│   ├── experience.ts     # Professional experience data
│   ├── projects.ts       # Projects showcase data
│   └── tools.tsx         # Tools and technologies data
└── lib/                  # Utility functions
```

## Deployment

This portfolio is optimized for deployment on Vercel with automatic builds and analytics.

## License

MIT License - see LICENSE file for details.
