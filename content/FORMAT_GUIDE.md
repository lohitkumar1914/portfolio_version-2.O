# Content Posting Guide

This project uses a file-based CMS. To add new projects or blogs, you simply need to create Markdown (`.md`) files in the appropriate folders.

## 📂 Folder Structure

```
/content
  /projects
    my-new-project.md
    another-project.md
  /blogs
    my-first-blog.md
    tech-trends.md
```

---

## 🚀 How to Add a Project

Create a new file in `/content/projects/filename.md`.

**File Name**: Use dashes for spaces (e.g., `super-cool-app.md`). This becomes the URL slug (e.g., `/projects/super-cool-app`).

**Content Format**:

1.  **Frontmatter** (The part between `---`): This is the metadata used for the card and sorting.
2.  **Body**: The main content of the project details page (Markdown supported).

**Template**:

```markdown
---
title: "Project Name"
description: "A short, catchy description that appears on the card (1-2 sentences)."
category: "Full Stack" 
tech_stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"]
features: ["User Authentication", "Real-time Dashboard", "Dark Mode"]
github_link: "https://github.com/yourusername/project-repo"
live_demo_link: "https://project-demo.com"
image: "/images/project-thumbnail.jpg"
---

# Project Name

## Overview
A deeper dive into what this project does. You can write paragraphs here.

## 💡 The Challenge
Describe the problem you solved.

## 🛠️ The Solution
Describe how you built it.

- **Feature A**: Explanation...
- **Feature B**: Explanation...

## Conclusion
Final thoughts.
```

*Note: `category` should match one of your filters: `Frontend`, `Backend`, `Full Stack`, `ML`, `AI` (or `All` will catch everything).*

---

## ✍️ How to Add a Blog Post

Create a new file in `/content/blogs/filename.md`.

**Template**:

```markdown
---
title: "Blog Post Title"
date: "2024-03-20"
summary: "A brief summary of the article to entice readers."
category: "Tech" 
---

# Blog Post Title

Write your article content here. You can use standard Markdown:

- Bullet points
- **Bold text**
- [Links](https://google.com)
- Code blocks:

\```javascript
console.log("Hello World");
\```
```
