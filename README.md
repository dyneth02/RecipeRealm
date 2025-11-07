[README_RecipeRealm_Frontend.md](https://github.com/user-attachments/files/23421440/README_RecipeRealm_Frontend.md)
# 🍳 RecipeRealm – Frontend (HTML/CSS/JS)

A static **frontend prototype** for the RecipeRealm website built during **SLIIT – Year 1 (Semester 2)**. It showcases UI/UX for core flows (recipes, blogs, premium views, admin, user profile) using **HTML, CSS, and a little vanilla JS**. Works on any static server or via XAMPP’s `htdocs`.

---

## 🔍 What’s inside
Pages you can open directly in a browser:

- `Premium_User_Account.html` – premium gallery + filters, counters and CTA.
- `item_preview_page.html` – single recipe preview page with rating stars & tags.
- `Add_Recipe.html` – create recipe form with category/tag groups.
- `Add_Post_Page.html` – write blog post (title/body + side stats).
- `Blog_Submissions.html` – list of previously submitted blog posts.
- `Community.html` – community blog feed (cards/posts).
- `User_Profile.html` – account details, password-change request.
- `Admin_Dashboard.html` – admin KPI tiles & overview widgets.
- `faq.html` – simple accordion FAQ.

> Each page shares a consistent **header/footer** and references `../utility.css` and an `/images` folder used by the mock UI.

---

## 🗂 Suggested repository structure
```
RecipeRealm-Frontend/
├─ pages/
│  ├─ Add_Post_Page.html
│  ├─ Add_Recipe.html
│  ├─ Admin_Dashboard.html
│  ├─ Blog_Submissions.html
│  ├─ Community.html
│  ├─ Premium_User_Account.html
│  ├─ User_Profile.html
│  └─ item_preview_page.html
├─ styles/           
├─ scripts/         
└─ images/         
```

---

## ▶️ Run locally (any option)

**Option 1 – Open directly**  
Double‑click any `*.html` page to preview (works for most pages).

**Option 2 – VS Code Live Server (recommended)**  
1. Install the “Live Server” extension.  
2. Right‑click `Premium_User_Account.html` → **Open with Live Server**.

**Option 3 – XAMPP (Apache)**  
1. Copy the project folder into `C:\xampp\htdocs\RecipeRealm-Frontend`.  
2. Start **Apache** in XAMPP Control Panel.  
3. Visit `http://localhost/RecipeRealm-Frontend/pages/Premium_User_Account.html`.

---

## ✨ Highlights
- Clean, consistent layout with reusable header/footer.
- Multiple role views: **Guest / Premium / Creator / Admin** (UI mockups).
- Category & taste filters, rating stars, pagination mocks.
- Admin analytics cards for income, growth, and content stats.
- Accessible, semantic HTML structure ready for backend wiring (PHP/Node/etc.).

---

## 🧭 Next steps (nice to have)
- Hook pages to a backend (PHP + MySQL) and replace lorem‑ipsum with real data.
- Convert repeated header/footer into server‑side includes or components.
- Form validation and field naming for easy server integration.
- Bundle assets into `/styles`, `/scripts`, and `/images` with relative paths fixed.
- Add responsiveness (mobile breakpoints) and aria labels for accessibility.

---

## 🏫 Academic context
- **Institution:** SLIIT – Sri Lanka Institute of Information Technology  
- **Coursework:** Year 1 full‑stack intro / team prototype  
- **Role:** Frontend UI/UX and page layout

---

## 🧑‍💻 Author
D G A D HIRUSHA

---

---

## 📸 Quick screenshots (optional)
![alt](https://github.com/dyneth02/RecipeRealm/blob/main/screenshots/Screenshot%202025-11-08%20001451.png)
![alt](https://github.com/dyneth02/RecipeRealm/blob/main/screenshots/Screenshot%202025-11-08%20001538.png)
![alt](https://github.com/dyneth02/RecipeRealm/blob/main/screenshots/Screenshot%202025-11-08%20001555.png)
![alt](https://github.com/dyneth02/RecipeRealm/blob/main/screenshots/Screenshot%202025-11-08%20001555.png)
![alt](https://github.com/dyneth02/RecipeRealm/blob/main/screenshots/Screenshot%202025-11-08%20003942.png)
