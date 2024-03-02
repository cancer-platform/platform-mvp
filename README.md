This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
# or
yarn run dev

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
    - [ ] Add more pages / layouts
        - [ ] Landing Page
            - [x] Set up Link to the boarding pages
            - [ ] define & export const metadata
            - [ ] check global css import in layout
        - [ ] Boarding Pages
            - [ ] Definitely
                - [ ] Tune styles for auto-fill fields
            - [ ] Maybe / Later
                - [ ] Set up Routing dependent on current url - let`s make this through layout
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










```
