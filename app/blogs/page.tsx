import { getBlogs } from '../services/blogs'

export default function BlogsPage() {
  const blogs = getBlogs()

  return (
    <main>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Author: {blog.author}</p>
            <p>Likes: {blog.likes}</p>
            <a href={blog.url}>{blog.url}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
