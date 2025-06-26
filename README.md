# 🌐 Anish Kumar Sinha – Personal Portfolio

A fully responsive and theme-toggle-enabled personal portfolio built with **HTML5**, **CSS3**, **JavaScript**, and **Bootstrap 5**. This project showcases professional design aesthetics, section-based navigation, and modern UI/UX elements with smooth animations.

---

## 🔥 Features

* ✅ Responsive layout with Bootstrap 5
* 🌗 Light/Dark Theme Toggle
* 🚀 Section-based smooth transitions
* ✨ Animated section fade-in effect on navigation
* 🎨 Stylish design using custom CSS
* 📱 Mobile-first optimizations

---

## 📁 Project Structure

```
/portfolio-root
│
├── index.html               # Main HTML file
├── css/
│   └── style.css            # Custom styles
├── js/
│   └── script.js            # JS logic for section switching and theme toggle
├── imgs/
│   └── *.svg / *.png        # All image assets (social icons, hero image, etc.)
```

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3 + Custom Styles**
* **Bootstrap 5.3.7**
* **Bootstrap Icons**
* **Vanilla JavaScript**

---

## 💡 Key Functionalities

### 🔀 Section Navigation

* JavaScript-driven section rendering using `showSection('sectionId')`.
* Sections fade in with animation using a CSS class `.visible`.

### 🌙 Theme Toggle

* Uses the `data-theme` attribute on `<html>` to switch between **light** and **dark** themes.
* Icons swap dynamically using Bootstrap Icons.

### 🧠 Animations

```css
section {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
}
section.visible {
  opacity: 1;
  pointer-events: auto;
}
```

---

## 🚧 How to Use

1. **Clone or Download** this repo
   github = https://github.com/selva-mern12/portfolio_assignment
2. Ensure your directory structure matches:

```
index.html
/css/style.css
/js/script.js
/imgs/*
```

3. Open `index.html` in a browser.

4. Click any nav link to view sections fade in with smooth animation.

5. Click the 🌞 / 🌙 icon to toggle between light and dark mode.

---

---

## 📝 License

This project is open-sourced for learning and demonstration purposes. Attribution appreciated.
