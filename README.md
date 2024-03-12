This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
# or
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

## Deploy on "Vercel" (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Memo

### Here's a list of reserved filenames in Next.js

These filenames are only reserved when creating them inside the app/ folder (or any sub-folder).
Outside the app/ folder, these filenames are not treated in any special way.
You also find a list with all supported filenames & detailed explanations in the official docs: https://nextjs.org/docs/app/api-reference/file-conventions

- page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)
- layout.js => Create a new layout that wraps sibling and nested pages
- not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)
- error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)
- loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
- route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)
- instrumentation.js => API reference for the instrumentation.js file.
- middleware.js => API reference for the middleware.js file.

## Todo list (I want to do & I definitely Should Do)

- [ ] Definitely
  - [x] Poppins Google Font implemented
  - [x] Tailwind CSS implemented
  - [x] Built-in Link component implemented
  - [x] Layout & Pages system implemented
  - [x] Built-in Image component implemented
  - [x] Test of committing from IDE with PGP signature - Fail
  - [x] Migrate Next Auth to v4 after login / auth implementation
  - [ ] Implement CD / CI
  - [ ] Implement SSL
  - [ ] Create components for email field, password field, submit button
  - [ ] Add more pages / layouts
    - [ ] Landing Page
      - [x] Set up Link to the boarding pages
      - [ ] define & export const metadata
      - [x] check global css import in layout
    - [ ] Auth Pages
      - [x] Implement Token based General Next Auth according to:
        - [ ] **Main**: this url https://reacthustle.com/blog/how-to-implement-mongodb-authentication-in-nextjs-nextauthjs
          - Also: https://code.pieces.app/blog/building-a-fullstack-application-with-next-js-and-mongodb
          - Also: https://medium.com/nuances-of-programming/%D0%BF%D0%BE%D1%8D%D1%82%D0%B0%D0%BF%D0%BD%D0%BE%D0%B5-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%B9-%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%BD%D0%BE%D0%B9-%D1%84%D0%BE%D1%80%D0%BC%D1%8B-%D0%B2-next-js-d54feb110a
          - Also: https://jasonwatmore.com/next-js-13-app-router-mongodb-user-rego-and-login-tutorial-with-example
      - [ ] Update the Project with global Error Handling
      - [ ] Definitely
        - [ ] Tune styles for auto-fill fields
        - [ ] Sign-up page
        - [ ] Sign-in page
          - [ ] JSX markup
          - [ ] Back-End
            - [ ] Self Hosted
            - [ ] Google Cloud
        - [ ] Restore page
      - [ ] Maybe / Later
        - [ ] Set up Routing dependent on current url - let`s make this through layout
        - [ ] Merge accounts page
    - [ ] Questionnaire Page
      - [ ] Define each question as different dynamic route under questionnaire/ folder with ability to list through questions and review questions / answers
    - [ ] Profile Page
    - Same for profile? (maybe / think / review)
  - [ ] Implement a BEM based Components system
    - [ ] just for an experiment move some code to a component (s) and place it in the components folder
    - [ ] Make use of @components pseudonym
  - [ ] Optimization of fonts https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
- [ ] Maybe / later
  - [ ] Merge Tailwind with BEM model
  - [ ] Add an icon.png to app folder as icon for entire project
  - [ ] Add const metadata
  - [ ] Add Next auth with Google cloud: To add a Google authentication button to your Next.js project using NextAuth, you'll need to follow a series of steps involving installation of the NextAuth library, setting up API routes, configuring environment variables, and then integrating the authentication flow into your app. Here's a simplified guide based on the detailed instructions from the sources:
    - [ ] Install NextAuth: First, add NextAuth to your project:
    ```bash
    yarn add next-auth
    ```
    - [ ] Configure Google OAuth Credentials:
      - [ ] Create a project in the Google Cloud Console and navigate to the Credentials tab to set up OAuth 2.0 Client IDs.
      - [ ] You'll be prompted to configure the consent screen and then you can create your OAuth 2.0 credentials by specifying your application type and authorized redirect URIs. For development, you can use http://localhost:3000/api/auth/callback/google as the redirect URI.
      - [ ] Add API Routes for Authentication:
        - [ ] Create a file named [...nextauth].ts in the pages/api/auth directory of your Next.js project and configure it with GoogleProvider. Use the credentials obtained from Google Cloud Console for clientId and clientSecret.
        - [ ] Set Up Environment Variables:
          - [ ] Create a .env.local file at the root of your project to store your Google Client ID and Secret, along with other necessary NextAuth configurations like NEXTAUTH_URL (the base URL of your site) and NEXTAUTH_SECRET (a secret used to encrypt your authentication tokens).
        - [ ] Wrap Your Application with SessionProvider:
          - [ ] In your \_app.tsx or \_app.js file, wrap the main component with SessionProvider from next-auth/react to enable session handling across your application.
        - [ ] Utilize Authentication Hooks in Your Components: Use useSession, signIn, and signOut from next-auth/react in your components to manage user authentication. You can display a login button when the user is not signed in and show their information or a sign-out button when they are.
        - [ ] This process integrates Google authentication into your Next.js application, allowing users to sign in with their Google accounts. For detailed code snippets and further explanations, you can refer to the guides on DEV Community​​ and devanswers.ru​​.
        - [ ] Remember to replace placeholder values such as YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, and YOUR_SECRET with actual values from your Google Cloud Console and generated secret. Also, ensure to follow the best practices for managing environment variables and secrets, especially in production environments.
