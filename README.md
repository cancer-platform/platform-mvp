This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

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
- [ ] Entire Project Todo
    - [x] Poppins Google Font implemented
    - [x] Tailwind CSS implemented
    - [ ] Merge Tailwind with BEM model
    - [ ] Implement a BEM based Components system
    - [x] Built-in Link component implemented
    - [x] Layout & Pages system implemented
    - [ ] Built-in Image component implemented
    - [ ] Add more pages / layouts
    - [ ] add an icon.png to app folder as icon for entire project
    - [x] Test of committing from IDE with PGP signature - Fail
- [ ] Landing Page
    - [ ] define & export const metadata
    - [ ] check global css import in layout
    - [ ] just for an experiment move some code to a component (s) and place it in the components folder
        - [ ] Make use of @components pseudonym  
- [ ] Questionnaire Page
    - Define each question as different dynamic route under questionnaire/ folder with ability to list through questions and review questions / answers
    - Same for profile? (maybe / think / review)


