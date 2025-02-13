## Getting Started

To install all required dependencies, run:
```bash
yarn install
# or
npm install
# or
pnpm install
# or
bun install
```
Set Up Environment Variables
```bash
cp .env.example .env
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

API Integration

The project includes an API layer for seamless integration with a remote backend.
All API routes are structured in /lib/api/auth, making it easy to extend and modify.

Validation & Authentication
•	Validation: Implemented to ensure proper user input handling.
•	Login Page: A fully functional authentication system with form validation.
•	Dashboard: A protected user dashboard that requires authentication.
