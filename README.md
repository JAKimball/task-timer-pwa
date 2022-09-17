# A visual task timer for corner-of-the-eye time awareness

## Todo

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
