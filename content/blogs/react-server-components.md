---
title: "Understanding React Server Components"
date: "2024-03-01"
summary: "A comprehensive guide to leveraging server components for improved performance in modern React apps."
category: "Frontend"
---

# Understanding React Server Components

React Server Components (RSC) represent a significant shift in how we build React applications. They allow you to write components that run exclusively on the server, reducing the amount of JavaScript sent to the client.

## 🛠️ The Core Benefits

1.  **Zero Bundle Size**: Server components are not bundled, so they add no weight to your client-side JavaScript.
2.  **Direct Backend Access**: Since they run on the server, you can directly access databases and file systems.
3.  **Automatic Code Splitting**: Server components can dynamically decide which client components to import, leading to smarter splitting.

## 💻 When to use Client vs. Server Components?

- **Use Server Components** for: fetching data, accessing backend resources, keeping sensitive information hidden.
- **Use Client Components** (standard React components) for: interactivity, state changes (useState, useEffect), event listeners (onClick, onChange).

## 🚀 Example
Here is a simple example of a Server Component fetching specific data:

```tsx
async function ProductList() {
  const products = await db.products.findAll();
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

RSC is changing the game for full-stack React developers. By understanding when and how to leverage server-side logic within your component tree, you can build faster, more efficient applications.
