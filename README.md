**Technologies & Concepts Learned that i have learned in this mega project:**

1. **Backend Development:**
   - **Node.js/Express:** REST API setup, routing, middleware (helmet, cors, express-session).
   - **Authentication:** Passport.js (LocalStrategy), session management, hashing/salting passwords.
   - **Database:** MongoDB/Mongoose (schema design, population, CRUD operations, references).
   - **Validation:** Joi schema validation, error handling with `connect-flash`.
   - **File Handling:** Multer + Cloudinary for image uploads.
   - **Deployment:** Render (backend), Vercel(frontend), environment variables (dotenv).

2. **Frontend Development:**
   - **React:** Component architecture, React Router (nested routes, useParams, navigation), hooks (useState, useEffect, useMemo).
   - **Styling:** Tailwind CSS.
   - **Form Management:** react-hook-form, form validation, error handling.
   - **State Management:** Context API, Axios for API calls.
   - **UI/UX:** React Toastify for notifications, lazy loading, conditional rendering.

3. **Full-Stack Integration:**
   - **CORS Configuration:** Cross-origin requests, headers, credentials.
   - **Proxy Setup:** Vite proxy for API routes.
   - **Authentication Flow:** JWT/cookie-based auth, protected routes (edit/delete permissions).
   - **Real-Time Features:** Search/filter, upvote/downvote, comments with dynamic updates.

4. **Main Concepts:**
   - Middleware chaining (validation → auth → handlers).
   - Schema relationships (user ↔ listings ↔ comments).
   - Async/await error handling (try/catch blocks).
   - Deployment (env variables, platform constraints).
   - Security (password hashing, rate limiting).

**Problem I have Faced:**
- Fixed CORS with explicit headers/credentials.
- Debugged route priority conflicts (`/:id` vs `/new`).
- Implemented protected routes via middleware + frontend checks.
- Solved comment population issues with Mongoose `.populate()`.
- Managed React state synchronization (useEffect dependencies).

**Architectural Patterns:**
- MVC pattern (Models for MongoDB, Controllers for logic, Views in React).
- RESTful API design (GET/POST/PUT/DELETE endpoints).
- Component-based UI with reusable Tailwind templates.


**You Can Check Out on here**:
https://daily-stack.vercel.app/
