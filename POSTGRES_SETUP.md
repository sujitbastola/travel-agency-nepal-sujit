# PostgreSQL Setup Guide

Since local PostgreSQL installation had issues, here are quick cloud alternatives:

## Option 1: Vercel Postgres (Recommended for Vercel deployment)

1. Go to https://vercel.com/dashboard
2. Create a Vercel Postgres database
3. Copy the connection string to `.env.local`

```bash
DATABASE_URL="your_vercel_postgres_url"
npm run db:push
npm run dev
```

## Option 2: Railway

1. Go to https://railway.app
2. Create PostgreSQL database
3. Copy connection string to `.env.local`

## Option 3: Supabase (Free tier available)

1. Go to https://supabase.com
2. Create new project
3. Get PostgreSQL connection string
4. Update `.env.local`

Once you have a `DATABASE_URL`, run:
```bash
npm run db:push  # Create tables
npm run dev      # Start server
```
