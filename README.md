# Nepal Travel Guide

A full-stack travel booking application showcasing Nepal's most beautiful destinations.

## Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **UI Components**: Radix UI + shadcn/ui

## Prerequisites

- Node.js 18+
- PostgreSQL 12+

## Local Development Setup

### 1. Install PostgreSQL

**macOS (using Homebrew):**

```bash
brew install postgresql@15
brew services start postgresql@15
```

**Linux (Ubuntu/Debian):**

```bash
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Windows:**
Download and install from https://www.postgresql.org/download/windows/

### 2. Create Database

```bash
createdb nepal_travel
```

Or using psql:

```bash
psql -U postgres
CREATE DATABASE nepal_travel;
\q
```

### 3. Setup Environment

```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Edit .env.local with your PostgreSQL credentials
# Default: postgresql://postgres:postgres@localhost:5432/nepal_travel
```

### 4. Install Dependencies & Run

```bash
npm install
npm run db:push  # Create tables in database
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
3. Set up a PostgreSQL database (e.g., Vercel Postgres, Railway, Render)

### Quick Deploy

**Option 1: Using Vercel Dashboard (Recommended)**

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Select "Other: Node.js" as framework
4. Add environment variable: `DATABASE_URL=your_postgres_url`
5. Click "Deploy"

**Option 2: Using Vercel CLI**

```bash
vercel
```

### Production Database Services

Recommended PostgreSQL hosting:

- **Vercel Postgres** - https://vercel.com/storage/postgres
- **Railway** - https://railway.app
- **Render** - https://render.com
- **Supabase** - https://supabase.com

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
