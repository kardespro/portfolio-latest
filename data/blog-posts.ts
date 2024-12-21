import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    uuid: "1",
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    date: "2024-03-15",
    content: `
# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications easier.

## Why Next.js?

- Server-side rendering
- File-based routing
- API routes
- TypeScript support

\`\`\`typescript
// Example code
const MyComponent = () => {
  return <div>Hello World!</div>;
}
\`\`\`
    `,
    tags: ["Next.js", "React", "Web Development"],
    author: {
      name: "Nicat-dcw",
      avatar: "https://avatars.githubusercontent.com/u/59221034?s=400&u=467d7330f5108f682fb7aae7c846f4722dc76050&v=4"
    }
  }
]; 