import { createBlog } from '../../actions/blogs'

const NewBlog = () => {
  return (
    <div>
      <h1>Create a new blog</h1>

      <form action={createBlog}>
        <div>
          <label>
            Title:
            <input type='text' name='title' />
          </label>
        </div>

        <div>
          <label>
            Author:
            <input type='text' name='author' />
          </label>
        </div>

        <div>
          <label>
            URL:
            <input type='url' name='url' />
          </label>
        </div>

        <button type='submit'>Create blog</button>
      </form>
    </div>
  )
}

export default NewBlog
