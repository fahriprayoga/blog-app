# 📘 Blog App

A simple **blog application** built with **Vue 3**, **Vite**, and **Vue Router**.
This project is designed as a **Single Page Application (SPA)** to practice modern frontend development using Vue and TypeScript.

🔗 Repository: [https://github.com/fahriprayoga/blog-app](https://github.com/fahriprayoga/blog-app)

🚀 Live Demo: [click here](https://blog-kelompok1.vercel.app)

---

## ✨ Features

- 🏠 Home page displaying a list of articles
- 📄 Article detail page
- 👤 About page
- ❓ Custom 404 Not Found page
- 🔀 Client-side routing with **Vue Router**
- 📜 Automatic scroll-to-top on route change
- ⚡ Fast development with **Vite**

---

## 🛠️ Tech Stack

- **Vue 3** – Progressive JavaScript framework
- **Vite** – Next-generation frontend tooling
- **Vue Router** – Routing for SPA
- **TypeScript** – Static typing for JavaScript
- **HTML & CSS** – Basic UI structure and styling

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/fahriprayoga/blog-app.git
cd blog-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

or

```bash
yarn
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🚀 Build for Production

To build the app for production:

```bash
npm run build
```

The output will be generated in the `dist/` folder.

> ⚠️ This project uses **Vue Router History Mode**.
> When deploying (e.g. on **Vercel**), make sure to configure **rewrite rules** so all routes point to `index.html`.
> This prevents 404 errors when refreshing pages.

---

## 📁 Project Structure

```
├─ public/               # Static assets
├─ src/
│   ├─ assets/           # Images and styles
│   ├─ components/       # Reusable components
│   ├─ views/            # Pages (Home, Detail, About, NotFound)
│   ├─ router/           # Vue Router configuration
│   ├─ App.vue           # Root component
│   ├─ main.ts           # Application entry point
├─ package.json
├─ vite.config.ts
├─ tsconfig.json
└─ README.md
```

---

## 🧭 Routing Overview

| Path           | Description         |
| -------------- | ------------------- |
| `/`            | Home page           |
| `/article/:id` | Article detail page |
| `/about`       | About page          |
| `/*`           | Not Found (404)     |

---

## 🤝 Contributing

Contributions are welcome!
If you’d like to improve this project:

1. Fork this repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.
