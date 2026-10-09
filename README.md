# Abyss - Manga & Comic Reader

A modern, fast, and feature-rich full-stack application for reading manga, manhua, and comics. Inspired by the sleek design of Asura Scans.

## Features

- **Dark Mode UI**: A beautiful, deep dark theme with a distinct red accent color.
- **Responsive Design**: Works perfectly on both desktop and mobile devices.
- **Reading History**: Automatically saves your reading progress in your local storage so you can easily pick up where you left off.
- **Search**: Quickly find comics by title from the navigation bar.
- **Admin Dashboard**: A secure backend panel to manage comics, chapters, and pages.
- **Bulk Image Upload**: Effortlessly add pages by pasting multiple image URLs at once. No cloud storage configuration needed.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Database**: SQLite (via Prisma ORM)
- **Styling**: Tailwind CSS
- **Authentication**: JWT & HTTP-only Cookies
- **Icons**: Lucide React

## Getting Started

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Database Setup** (if not already initialized):
   ```bash
   npx prisma db push
   node prisma/seed.js
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Admin Access

To access the admin dashboard and start adding comics:

- **URL**: [http://localhost:3000/admin](http://localhost:3000/admin)
- **Username**: `admin`
- **Password**: `admin123`

## Project Structure

- `src/app/page.tsx`: The main user-facing homepage with trending and latest updates.
- `src/app/comic/[id]`: The comic detail page showing chapters.
- `src/app/comic/[id]/chapter/[chapterId]`: The vertical scrolling reading view.
- `src/app/admin/*`: Protected admin dashboard and forms.
- `src/app/api/*`: Backend API routes handling CRUD operations and authentication.
- `src/components/*`: Reusable React components.
- `prisma/schema.prisma`: The database schema definition.
