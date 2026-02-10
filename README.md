# Nepal Travel Guide

A full-stack travel booking application showcasing Nepal's most beautiful destinations.

## Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: SQLite (local) / PostgreSQL (production)
- **ORM**: Drizzle ORM
- **UI Components**: Radix UI + shadcn/ui

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:5000

## Building for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

### Prerequisites

1. Push your code to GitHub
2. Create a Vercel account at https://vercel.com
3. Install Vercel CLI: `npm i -g vercel`

### Quick Deploy

**Option 1: Using Vercel Dashboard (Recommended)**

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Select "Other: Node.js" as framework
4. Click "Deploy"

**Option 2: Using Vercel CLI**

```bash
vercel
```

### Environment Variables

Set in Vercel Dashboard under Settings > Environment Variables:

```
NODE_ENV=production
```

### ⚠️ Important: Database Migration

SQLite (used locally) does **not** persist on Vercel's ephemeral filesystem. For production, switch to:

- **PostgreSQL** (recommended)
- **MySQL**
- **MongoDB**

Update `server/db.ts` to use your cloud database instead.

### Project Structure

```
├── client/          # React frontend (Vite)
├── server/          # Express backend
├── shared/          # Shared types & schemas
├── script/          # Build scripts
├── vercel.json      # Vercel configuration
└── package.json     # Dependencies
```

## Features

- Browse Nepal tours
- Book tours with details
- Contact form
- Responsive design
- Dark mode support

## License

MIT
