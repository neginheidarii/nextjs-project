# Dev Task: Setup Next.js App with TanStack Query + Zustand

## Folder Structure

You will receive a ZIP file containing two folders:

```
/project-root
├── front/   → (Your task is here — currently empty)
└── server/  → (Already set up with json-server and a sample API)
```

---

## Goal

Build a basic blog listing app using:

- **Next.js** (App Router)
- **TanStack Query** for fetching data
- **Zustand** for global state management

The app should fetch **posts** and **comments** from the provided backend and display them in a simple UI.

---

## Requirements

### 1. Initialize Frontend

- Set up a new **Next.js + TypeScript** project inside the `front/` folder.
- Install the following dependencies:
  ```bash
  npm install @tanstack/react-query zustand axios
  ```

### 2. Data Fetching with TanStack Query

- Use the following API endpoints:

  ```
  GET http://localhost:3000/posts
  GET http://localhost:3000/comments
  GET http://localhost:3000/profile
  ```

- Create a custom hook `usePosts()` that uses `useQuery` to fetch the posts.
- Optionally, create a `useComments(postId)` hook to fetch related comments.

### 3. Global State with Zustand

- Create a Zustand store (`usePostStore`) to manage:
  - Post list (`posts: Post[]`)
  - Selected post (`selectedPost: Post | null`)
  - Actions:
    - `setPosts(posts: Post[])`
    - `selectPost(post: Post)`
    - `resetPosts()`

### 4. UI Requirements

- A `PostList` component that:

  - Fetches posts using `usePosts()`
  - Stores them in Zustand
  - Displays the post list from Zustand

- A `PostDetail` component that:

  - Shows selected post details
  - Fetches and displays comments for that post

- A Clear Posts button to reset post data

---

## Bonus Features (Optional)

- Use loading and error states for better UX
- Show the author name or profile data (from `/profile`)

---

## Tips

- The backend (`json-server`) is already running on `localhost:3000`
- Folder structure suggestion:
  ```
  /front
    ├── components/
    ├── hooks/
    ├── stores/
    └── app/
  ```

---

## Acceptance Criteria

- App runs and displays posts from the API
- Clicking a post displays its details and related comments
- State is managed using Zustand, and data is fetched with TanStack Query
- Clean, modular, and readable code
- Bonus: Display loading, and error states
