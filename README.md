# 📸 JavaScript Gallery Modal Project

This project demonstrates how to dynamically build an image gallery using JavaScript, handle click events with event delegation, and display large images in a modal window using the **basicLightbox** library. It also includes keyboard accessibility by allowing users to close the modal with the Escape key.

---

## 🚀 Project Overview

- The gallery is generated dynamically from a predefined `images` array.
- When a user clicks a thumbnail, the corresponding larger version is displayed inside a modal window.
- The modal is implemented using the `basicLightbox` library (via CDN).
- The Escape key closes the modal, and keyboard events are only listened to while the modal is open.

This project reinforces DOM manipulation, event delegation, attribute handling, and library integration in JavaScript.

---

## 📦 Libraries Used

### **basicLightbox**

A lightweight library that provides customizable modal windows.

**CDN Links:**

```html
<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"
/>

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>
```

---

## 🧩 Key Concepts Learned

### ✔️ 1. Dynamic DOM Markup Creation

The images array is transformed into `<li>` gallery items using `.map()` + template strings, then inserted into the DOM using:

```js
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
```

### ✔️ 2. Event Delegation

Instead of adding click listeners to every image, a single listener on the `<ul>` catches all clicks:

```js
galleryList.addEventListener("click", (event) => {
  const link = event.target.closest(".gallery-link");
  if (!link) return;
});
```

`closest()` ensures clicks on both the image and its surrounding area correctly target the intended element.

### ✔️ 3. Opening a Modal with basicLightbox

The full-size image URL is stored in a `data-source` attribute. When clicked, the modal opens:

```js
const instance = basicLightbox.create(
  `<img src="${largeImageURL}" width="800" height="600">`
);
instance.show();
```

### ✔️ 4. Closing the Modal with the Escape Key

Escape handling must only activate while the modal is open. This is achieved with the library’s lifecycle hooks:

```js
const instance = basicLightbox.create(
  `<img src="${largeImageURL}" width="800" height="600">`,
  {
    onShow: () => document.addEventListener("keydown", onEscPress),
    onClose: () => document.removeEventListener("keydown", onEscPress),
  }
);

function onEscPress(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
```

This satisfies the requirement that keyboard events are only active while the modal is visible.

---

## 🎉 Summary

By completing this project, I practiced:

- JavaScript array transformations

- Dynamic DOM insertion

- Event delegation (`closest()` usage)

- Storing custom data with `data-*` attributes

- Integrating a third-party modal library

- Implementing keyboard-based accessibility (Escape key)

---

## 👩‍💻 Author

**Halenur Gürel**  
Homework Project – JavaScript Image Gallery with Modal  
📍 JavaScript · DOM Manipulation · Event Delegation · basicLightbox  
🔗 [GitHub Profile](https://github.com/halenurgurel)

🎯 _“This project was built with a focus on clean code, modular structure, and core JavaScript fundamentals—including dynamic DOM rendering, event delegation, and keyboard accessibility.”_
