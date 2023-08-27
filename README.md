# A visual task timer for corner-of-the-eye time awareness

## Todo

- [ ] Can ToDo Tree read into package.json?
- [ ] Review package.json devDependencies-comments for accuracy and completeness.
- [ ] Review packages reported by knip to see if they are still needed.
- [x] Add auto-animate
- [x] Use alt attribute selector to spin all react logos
- [ ] Add deploy and preview branches (how do Netlify previews work?)
  - [ ] Lock-down these branches (don't want someone else pushing code to my cloudflare workers!)
- [ ] Set up wrangler with github actions to deploy the "deploy" and "preview" branches on cloudflare
- [ ] Complete PWA setup requirements (manifest, logos, etc.)
  - [ ] Run lighthouse and fix any issues
- [ ] Check that we have debugging set up for dev, build, and preview
- [ ] Move technology cards to a separate component and move that to the MDX portfolio project
- [ ] Move technology list to a separate .json file
  - This is now in a separate .ts rather than .json file in order to ensure that the referenced images are included in the build
- [ ] How could we tell vite build to include the assets referenced in the JSON file?

```js
// ./test/setup.ts
import ResizeObserver from 'resize-observer-polyfill'
global.ResizeObserver = ResizeObserver
```

## Other

- [x] Configure `prettier --write .` to run on commit
- [ ] Configure `prettier --check .` to run on push
- [ ] Add a `prettier` badge to the README
- [ ] Add a `prettier` config file
- [x] Configure `eslint --fix .` to run on commit
- [ ] Add an `eslint` badge to the README
- [x] Add an `eslint` config file
- [ ] Consider if should use, or are using, `stylelint`
- [ ] Configure `stylelint` to run on commit
- [ ] Add a `stylelint` badge to the README
- [ ] Add a `stylelint` config file
- [x] Add a `prettier` script to `package.json` that runs `prettier --write .` and `eslint --fix .`
- [x] Figure out why `prettier --write .` is not following the same rules!
- [ ] Configure `prettier` `switch case` to not be indented
  - I don't think this is possible, but I'd like to be able to do this:

```js
switch (foo) {
  case 'bar':
    return 'baz'
  case 'qux':
    return 'quux'
}
```

- Instead of this:

```js
switch (foo) {
  case 'bar':
    return 'baz'
  case 'qux':
    return 'quux'
}
```

## Notes

- [x] Consider if should use, or are using, `husky`
- [x] Consider if should use, or are using, `lint-staged`
- [ ] Consider if should use, or are using, `commitlint`
- [ ] Consider if should use, or are using, `commitizen`

## Checklist for template use

- [ ] If you don't plan to use GitHub Actions, delete the `.github` directory.
- [ ] Clean up the `cypress/integration/index.spec.ts` file.
- [ ] Change the `favicon.png`, `apple-touch-icon.png`, `android-chrome-192x192.png` and `android-chrome-512x512.png`. [favicon.io](https://favicon.io) is a cool tool for generating these assets.
- [ ] If you don't plan to use `react-query`, remove the query client logic in the `main.tsx` file.
- [ ] Change the title, description and theme color in the `index.html` and `vite.config.ts`. [Inter font](https://rsms.me/inter/) is included, so remove it if you want.
- [ ] Modify or delete the `LICENSE` file.
- [ ] Change the `name` field in package.json.

### Development

Just run `npm dev`.

### Production

Run `npm build`. The generated files will be on the `dist` folder.

### Testing

Run `npm test`. Tests are performed on production build, so be sure to build your app first.

## Development Questions, Answers, and Ideas

### Q & A

#### Q: CSS is present in both index.css and App.css. Why? How should CSS be organized?

A: index.css is global CSS, and App.css is component-specific CSS. This is a good pattern to follow.

---

#### Q: In this React project, how do we get the CSS to be applied to the HTML?

A: The CSS is imported into the JS, and the JS is imported into the HTML.

---

#### Q: This project does not currently produce a site that renders on a Kindle e-reader. How can we fix this?

A: We can add a `viewport` meta tag to the HTML.

---

#### Q: Why do we have both a main.tsx and an App.tsx? Should they be consolidated? Why or why not?

A: The main.tsx is the entry point for the app, and the App.tsx is the root component.

---

#### Q: What are some examples of what should be in the main.tsx and what should be in the App.tsx?

A: The main.tsx should contain the router, the query client, and the theme provider. The App.tsx should contain the header, footer, and main content.

---

#### Q: Please enumerate the options for adding a Google font to the project

A: We can add a `link` tag to the HTML, or we can import the font in the JS.

---

#### Q: What is the difference between a `link` tag and an `import` statement when adding a Google font to the project?

A: The `link` tag is added to the HTML, and the `import` statement is added to the JS.

---

#### Q: We are using some Google fonts in this project. How do we ensure the fonts are properly cached by the PWA service worker in order to be available offline?

A: We can add a `link` tag to the HTML, and we can add a `cache.match` to the service worker.

The `cache.match` looks like this:

```js
const cache = await caches.open('google-fonts-webfonts-v1')
const cachedResponse = await cache.match(event.request)
```

---

### Ideas
