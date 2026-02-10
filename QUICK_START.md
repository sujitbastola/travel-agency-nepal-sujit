# Quick Setup with Supabase (Free)

## 1. Create Supabase Account
- Go to https://supabase.com
- Click "Start your project"
- Create a new project

## 2. Get Connection String
- In Supabase dashboard, go to Project Settings  
- Under "Database", find "Connection string"
- Copy the PostgreSQL URL (not the pool one)
- Replace `[YOUR-PASSWORD]` with your database password

## 3. Update .env.local
```bash
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres"
NODE_ENV=development
```

## 4. Create Tables & Run
```bash
npm run db:push
npm run dev
```

## Alternative: Use Neon (Also Free)
- Go to https://neon.tech
- Create PostgreSQL database
- Copy connection string to .env.local
- Run the same commands above

---

**Q: Which service should I use?**
- **Supabase**: Best if deploying to Vercel (integrates well)
- **Neon**: Slightly faster, serverless-friendly
- **Railway**: Best for traditional hosting

All have free tiers suitable for development & small production apps.
