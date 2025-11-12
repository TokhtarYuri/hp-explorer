# 🧙‍♂️ Harry Potter Test Project

An interactive demo React application with multilingual support (EN / UA), dynamic frontend pagination, and a beautiful light/magic theme system.

---

## ⚡ About the Project

This test project was created to demonstrate:
- modern **React** stack and component structure;
- **dynamic frontend pagination** with local state management;
- full **i18n** support (EN / UA);
- **theme switching** between light and magic modes;
- **user preferences** persistence in LocalStorage;
- **responsive sidebar navigation** with smooth transitions.

---

## 🛠️ Technologies

- **React + TypeScript**
- **i18next** — multilingual support
- **Context API** — theme and language management
- **CSS Modules / Tailwind CSS** — styling and theming
- **LocalStorage** — saving theme, language, and pagination state
- **Vercel** — hosting and CI/CD

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/TokhtarYuri/hp-explorer.git
cd hp-explorer

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Once started, open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✨ Main Features

- 🧙 Theme toggle — Light / Magic  
- 🌍 Language switcher — English / Українська  
- 📦 Persistent user settings (theme, language, pagination)  
- 🧭 Sidebar with navigation and controls  
- ⚡ Dynamic pagination for smooth data browsing  

---

## 📂 Project Structure

```
src/
 ├── components/
 │   ├── Sidebar/
 │   ├── ThemeSwitcher/
 │   ├── LanguageSwitcher/
 │   └── ...
 ├── i18n/
 │   ├── en.json
 │   └── ua.json
 ├── context/
 │   ├── ThemeContext.tsx
 ├── App.tsx
 ├── index.tsx
 └── styles/
```

---

## 🌐 Translations

Translation files are located in the `src/i18n` folder:
- `en.json` — English  
- `ua.json` — Ukrainian  

The selected language is saved in `localStorage` under the key `hp-language`.

---

## 📦 Build & Deploy

```bash
npm run build
```

The production-ready build will be in the `build/` folder.  
You can deploy it to **Vercel**, **Netlify**, or any React-compatible hosting provider.

---

## 🧩 Author

Developed as a demo project inspired by the Harry Potter universe ✨  
Used for testing UI components, internationalization, theming, and frontend pagination.
