# UIDD Portfolio

A modern and responsive personal portfolio website showcasing my projects, skills, education, sponsors, and contact information. Built with **HTML**, **CSS**, and **JavaScript**, this portfolio is designed to present work in a clean, professional, and interactive way.

Live demo: https://uidd-protfilo.vercel.app/ :contentReference[oaicite:1]{index=1}

---

## Table of contents

- [Overview](#overview)  
- [Features](#features)  
- [What's inside (file map)](#whats-inside-file-map)  
- [Tech stack](#tech-stack)  
- [Installation & run locally](#installation--run-locally)  
- [How to configure / customize](#how-to-configure--customize)  
  - [Change hero text & typewriter titles](#change-hero-text--typewriter-titles)  
  - [Update sponsors, projects, images](#update-sponsors-projects-images)  
  - [Configure EmailJS (Contact form)](#configure-emailjs-contact-form)  
- [Deployment options](#deployment-options)  
- [Accessibility & SEO notes](#accessibility--seo-notes)  
- [Troubleshooting](#troubleshooting)  
- [Contributing](#contributing)  
- [License](#license)  
- [Author / Contact](#author--contact)

---

## Overview

This is a single-page portfolio website with multiple interactive sections (hero, sponsors, about, skills, education timeline, projects, pricing/packages, and a contact modal). The repository includes HTML markup, a single stylesheet, JavaScript for interactivity, and an `assest/img` folder for images. :contentReference[oaicite:2]{index=2}

The main files are `index.html`, `styles.css`, and `script.js` (all in the repository root). :contentReference[oaicite:3]{index=3}

---

## Features

- Responsive layout optimized for desktop, tablet and mobile
- Hero section with typewriter text effect that cycles titles
- Sponsors / partners marquee and grid
- About section with social links
- Skills with animated progress bars
- Education cards with timeline / expandable details
- Projects / Pricing sections with CTA buttons and contact modal
- Contact form integrated with EmailJS (client-side email sending)
- Smooth scrolling, sticky header, mobile hamburger nav, and back-to-top button

---

## What's inside (file map — with purpose)

/ (root)
├── index.html # Main single-page HTML (sections, modal, links to CSS/JS). 
├── styles.css # All styling: CSS variables, layout, responsive rules, animations. 
├── script.js # All interactivity: nav, smooth scroll, typewriter, EmailJS form handling, modals. 
├── LICENSE # MIT license. 
└── assest/img/ # Image assets used across the site (profile, sponsors, screenshots).


**Key things located in these files**

- `index.html` — includes references to Font Awesome and TinyMCE and links the stylesheet + script; it contains the semantic sections: header, hero, sponsors, about, skills, education, projects/pricing, contact modal. See the HTML file for where each section starts. :contentReference[oaicite:8]{index=8}

- `styles.css` — uses CSS custom properties (`:root` variables), responsive grid and flex layouts, hero styling, marquee styling for sponsors, and animations for skill bars and cards. :contentReference[oaicite:9]{index=9}

- `script.js` — implements:
  - Mobile hamburger toggle & sticky header
  - Smooth anchor scroll
  - Back-to-top button
  - Typewriter effect — controlled by a `titles` array (edit to change shown roles)
  - Animated skill bars on scroll
  - Education-card expand/collapse timeline logic
  - Modal open/close and form submission
  - EmailJS initialization and `send` logic (service & template IDs + public key are present in the script — **replace with your own** for production). :contentReference[oaicite:10]{index=10}

---

## Tech stack

- **HTML5** — semantic markup. :contentReference[oaicite:11]{index=11}  
- **CSS3** — variables, layout, responsive rules, animations. :contentReference[oaicite:12]{index=12}  
- **JavaScript (ES6)** — interactivity scripts (typewriter, EmailJS, DOM listeners). :contentReference[oaicite:13]{index=13}  
- **Font Awesome** used for icons (linked in `index.html`). :contentReference[oaicite:14]{index=14}  
- **EmailJS** used for client-side email sending (configured inside `script.js`). :contentReference[oaicite:15]{index=15}

---

## Installation & run locally

1. Clone the repo:
   ```bash
   git clone https://github.com/UdaraIrunika/uidd-protfilo.git
   cd uidd-protfilo

**Key things located in these files**

- `index.html` — includes references to Font Awesome and TinyMCE and links the stylesheet + script; it contains the semantic sections: header, hero, sponsors, about, skills, education, projects/pricing, contact modal. See the HTML file for where each section starts. :contentReference[oaicite:8]{index=8}

- `styles.css` — uses CSS custom properties (`:root` variables), responsive grid and flex layouts, hero styling, marquee styling for sponsors, and animations for skill bars and cards. :contentReference[oaicite:9]{index=9}

- `script.js` — implements:
  - Mobile hamburger toggle & sticky header
  - Smooth anchor scroll
  - Back-to-top button
  - Typewriter effect — controlled by a `titles` array (edit to change shown roles)
  - Animated skill bars on scroll
  - Education-card expand/collapse timeline logic
  - Modal open/close and form submission
  - EmailJS initialization and `send` logic (service & template IDs + public key are present in the script — **replace with your own** for production). :contentReference[oaicite:10]{index=10}

---

## Tech stack

- **HTML5** — semantic markup. :contentReference[oaicite:11]{index=11}  
- **CSS3** — variables, layout, responsive rules, animations. :contentReference[oaicite:12]{index=12}  
- **JavaScript (ES6)** — interactivity scripts (typewriter, EmailJS, DOM listeners). :contentReference[oaicite:13]{index=13}  
- **Font Awesome** used for icons (linked in `index.html`). :contentReference[oaicite:14]{index=14}  
- **EmailJS** used for client-side email sending (configured inside `script.js`). :contentReference[oaicite:15]{index=15}

---

## Installation & run locally

1. Clone the repo:
   ```bash
   git clone https://github.com/UdaraIrunika/uidd-protfilo.git
   cd uidd-protfilo

**Key things located in these files**

- `index.html` — includes references to Font Awesome and TinyMCE and links the stylesheet + script; it contains the semantic sections: header, hero, sponsors, about, skills, education, projects/pricing, contact modal. See the HTML file for where each section starts. :contentReference[oaicite:8]{index=8}

- `styles.css` — uses CSS custom properties (`:root` variables), responsive grid and flex layouts, hero styling, marquee styling for sponsors, and animations for skill bars and cards. :contentReference[oaicite:9]{index=9}

- `script.js` — implements:
  - Mobile hamburger toggle & sticky header
  - Smooth anchor scroll
  - Back-to-top button
  - Typewriter effect — controlled by a `titles` array (edit to change shown roles)
  - Animated skill bars on scroll
  - Education-card expand/collapse timeline logic
  - Modal open/close and form submission
  - EmailJS initialization and `send` logic (service & template IDs + public key are present in the script — **replace with your own** for production). :contentReference[oaicite:10]{index=10}

---

## Tech stack

- **HTML5** — semantic markup. :contentReference[oaicite:11]{index=11}  
- **CSS3** — variables, layout, responsive rules, animations. :contentReference[oaicite:12]{index=12}  
- **JavaScript (ES6)** — interactivity scripts (typewriter, EmailJS, DOM listeners). :contentReference[oaicite:13]{index=13}  
- **Font Awesome** used for icons (linked in `index.html`). :contentReference[oaicite:14]{index=14}  
- **EmailJS** used for client-side email sending (configured inside `script.js`). :contentReference[oaicite:15]{index=15}

---

## Installation & run locally

1. Clone the repo:
   ```bash
   git clone https://github.com/UdaraIrunika/uidd-protfilo.git
   cd uidd-protfilo

2.Quick preview:

   Option A — open the file directly:
   Double-click index.html or open it from your editor in a browser.
   Option B — run a simple local server (recommended for consistent behavior):

   # Python 3
   python3 -m http.server 8000
   # then open http://localhost:8000

3.(Optional) Install Live Server extension in VS Code and press Go Live for automatic reloads.

   How to configure / customize
   Below are the most common edits you'll want to make and where to make them.
   Change hero text & typewriter titles
   Open index.html and edit the hero <h1> to change the displayed name.
   Open script.js, find the titles array and replace the strings with your roles (Frontend Developer, UI Designer, etc.). Example:

   const titles = ["Frontend Developer", "Backend Developer", "UI Designer", "Owner & CEO"];

(These lines are in script.js.) 
   GitHub
   Update sponsors, projects, images
   Replace images in assest/img/ and update the <img> sources in index.html.
   Projects: locate the Projects section in index.html and update project cards with title, description, image, and link.
   Configure EmailJS (Contact form)
   script.js initializes EmailJS and sends form data. You should replace the public key, service ID and template ID with your own values.
   Where to find / edit (example from the repo):

   // in script.js (example)
   emailjs.init("wxDUx3lT39EZ5Robm");               // <--- Replace with your EmailJS public key
   emailjs.send('service_bn85zae', 'template_honbbgg', emailData) // <--- service & template IDs: replace

(Those values are present in the repo's script.js; change them to your account’s values.) 

EmailJS setup steps
   Create an account at https://www.emailjs.com/
   Create an email service (e.g., Gmail, SMTP).
   Create a template and map variables (like name, email, message).
   Copy your public key and replace the emailjs.init( ... ) value in script.js.
   Replace the service_xxx and template_xxx values in the .send() calls with your own IDs.
   Security note: EmailJS public keys are meant to be used client-side, but do not place private SMTP credentials directly in client-side code. Consider a server-based contact endpoint for sensitive flows.

Accessibility & SEO notes

   Use descriptive alt attributes for all images in assest/img/.
   Ensure color contrast is sufficient for text over backgrounds.
   Use semantic elements (existing index.html contains sections and headings) — keep them when you modify content.
   Add meta tags (title/description/og:) in the <head> for better SEO/social sharing (you can enhance index.html).

Troubleshooting
   Contact form not sending
   Check the console for EmailJS errors.
   Confirm emailjs.init uses the correct public key and that service / template IDs are valid. 
   If you get CORS/errors, confirm the email service is connected in EmailJS or switch to a server-side send.
   Icons not showing
   Confirm Font Awesome link in index.html is reachable (internet required). 

Styles look broken
Ensure styles.css is properly linked in index.html (the repo already links it). If testing locally via file:// and seeing different behavior, run a simple server (python -m http.server).
