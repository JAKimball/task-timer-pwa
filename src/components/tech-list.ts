import babelLogo from '../assets/babel.svg'
import bashLogo from '../assets/bash-icon.svg'
import cloudflareLogo from '../assets/cloudflare.svg'
import cloudflareWorkersLogo from '../assets/cloudflare-workers.svg'
import css3Logo from '../assets/css-3.svg'
import esbuildLogo from '../assets/esbuild.svg'
import eslintLogo from '../assets/eslint.svg'
import figmaLogo from '../assets/figma.svg'
import githubLogo from '../assets/github-icon.svg'
import gitLogo from '../assets/git-icon.svg'
import html5Logo from '../assets/html-5.svg'
import javascriptLogo from '../assets/javascript.svg'
import jestLogo from '../assets/jest.svg'
import markdownLogo from '../assets/markdown.svg'
import mdxLogo from '../assets/mdx.svg'
import mongodbLogo from '../assets/mongodb.svg'
// import netlifyLogo from '../assets/netlify.svg'
import nodejsLogo from '../assets/nodejs-icon.svg'
import npmLogo from '../assets/npm.svg'
import pnpmLogo from '../assets/pnpm.svg'
import postcssLogo from '../assets/postcss.svg'
import postgresqlLogo from '../assets/postgresql.svg'
import prettierLogo from '../assets/prettier.svg'
import reactLogo from '../assets/react.svg'
import renderLogo from '../assets/render.svg'
import rollupLogo from '../assets/rollup.svg'
import rustLogo from '../assets/rust.svg'
import swcLogo from '../assets/swc-bw.svg'
import tailwindcssLogo from '../assets/tailwindcss-icon.svg'
import typescriptLogo from '../assets/typescript-icon.svg'
import ubuntuLogo from '../assets/ubuntu.svg'
import v8Logo from '../assets/v8.svg'
// import vercelLogo from '../assets/vercel.svg'
import vscodeLogo from '../assets/visual-studio-code.svg'
import viteLogo from '../assets/vite.svg'
import vitestLogo from '../assets/vitest.svg'
import wasmLogo from '../assets/webassembly.svg'
import webpackLogo from '../assets/webpack.svg'
import windicssLogo from '../assets/windicss.svg'
import workboxLogo from '../assets/workbox-color.svg'
import yarnLogo from '../assets/yarn.svg'

/**
 * Structure of the tech list
 *
 * @interface TechProps
 *
 */
export interface TechProps {
  title: string
  imageUrl: string
  imageAlt: string
  description: string
  introUrl?: string // optional front page url for the tech
  docsUrl?: string // optional docs/getting started url for the tech
}

export const techList: TechProps[] = [
  {
    title: 'Babel',
    imageUrl: babelLogo,
    imageAlt: 'Babel logo',
    description: 'The compiler for writing next generation JavaScript',
    introUrl: 'https://babeljs.io/',
    docsUrl: 'https://babeljs.io/docs/en/',
  },
  {
    title: 'Bash',
    imageUrl: bashLogo,
    imageAlt: 'Bash logo',
    description: 'A Unix shell and command language written by Brian Fox',
    introUrl: 'https://www.gnu.org/software/bash/',
    docsUrl: 'https://www.gnu.org/software/bash/manual/bash.html',
  },
  {
    title: 'Cloudflare',
    imageUrl: cloudflareLogo,
    imageAlt: 'Cloudflare logo',
    description: 'A web infrastructure and website security company',
    introUrl: 'https://www.cloudflare.com/',
    docsUrl: 'https://www.cloudflare.com/learning/',
  },
  {
    title: 'Cloudflare Workers',
    imageUrl: cloudflareWorkersLogo,
    imageAlt: 'Cloudflare Workers logo',
    description: 'A serverless platform for creating entirely new applications',
    introUrl: 'https://workers.cloudflare.com/',
    docsUrl: 'https://developers.cloudflare.com/workers/',
  },
  {
    title: 'CSS3',
    imageUrl: css3Logo,
    imageAlt: 'CSS3 logo',
    description:
      'A style sheet language used for describing the presentation of a document written in a markup language',
    introUrl: 'https://www.w3.org/Style/CSS/Overview.en.html',
    docsUrl: 'https://www.w3.org/Style/CSS/Overview.en.html',
  },
  {
    title: 'esbuild',
    imageUrl: esbuildLogo,
    imageAlt: 'esbuild logo',
    description: 'An extremely fast JavaScript bundler',
    introUrl: 'https://esbuild.github.io/',
    docsUrl: 'https://esbuild.github.io/getting-started/',
  },
  {
    title: 'ESLint',
    imageUrl: eslintLogo,
    imageAlt: 'ESLint logo',
    description:
      'A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript',
    introUrl: 'https://eslint.org/',
    docsUrl: 'https://eslint.org/docs/user-guide/getting-started',
  },
  {
    title: 'Figma',
    imageUrl: figmaLogo,
    imageAlt: 'Figma logo',
    description: 'A collaborative interface design tool',
    introUrl: 'https://www.figma.com/',
    docsUrl: 'https://www.figma.com/developers/docs',
  },
  {
    title: 'Git',
    imageUrl: gitLogo,
    imageAlt: 'Git logo',
    description: 'A free and open source distributed version control system',
    introUrl: 'https://git-scm.com/',
    docsUrl: 'https://git-scm.com/doc',
  },
  {
    title: 'GitHub',
    imageUrl: githubLogo,
    imageAlt: 'GitHub logo',
    description:
      'A code hosting platform for version control and collaboration',
    introUrl: 'https://github.com/about',
    docsUrl: 'https://docs.github.com',
  },
  {
    title: 'HTML5',
    imageUrl: html5Logo,
    imageAlt: 'HTML5 logo',
    description:
      'A markup language used for structuring and presenting content on the World Wide Web',
    introUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    title: 'JavaScript',
    imageUrl: javascriptLogo,
    imageAlt: 'JavaScript logo',
    description:
      'A high-level, interpreted programming language conforming to the ECMAScript specification',
    introUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
  },
  {
    title: 'Jest',
    imageUrl: jestLogo,
    imageAlt: 'Jest logo',
    description:
      'A delightful JavaScript Testing Framework with a focus on simplicity',
    introUrl: 'https://jestjs.io/',
    docsUrl: 'https://jestjs.io/docs/getting-started',
  },
  {
    title: 'Markdown',
    imageUrl: markdownLogo,
    imageAlt: 'Markdown logo',
    description:
      'A lightweight markup language with plain text formatting syntax',
    introUrl: 'https://daringfireball.net/projects/markdown/',
    docsUrl: 'https://www.markdownguide.org/getting-started/',
  },
  {
    title: 'MDX',
    imageUrl: mdxLogo,
    imageAlt: 'MDX logo',
    description: 'A JSX in Markdown for ambitious projects',
    introUrl: 'https://mdxjs.com/',
    docsUrl: 'https://mdxjs.com/getting-started',
  },
  {
    title: 'MongoDB',
    imageUrl: mongodbLogo,
    imageAlt: 'MongoDB logo',
    description: 'A cross-platform document-oriented database program',
    introUrl: 'https://www.mongodb.com/',
    docsUrl: 'https://docs.mongodb.com/',
  },
  {
    title: 'Node.js',
    imageUrl: nodejsLogo,
    imageAlt: 'Node.js logo',
    description: 'A JavaScript runtime built on Chrome’s V8 JavaScript engine',
    introUrl: 'https://nodejs.org/en/',
    docsUrl: 'https://nodejs.org/en/docs/',
  },
  {
    title: 'npm',
    imageUrl: npmLogo,
    imageAlt: 'npm logo',
    description: 'A package manager for the JavaScript programming language',
    introUrl: 'https://www.npmjs.com/',
    docsUrl: 'https://docs.npmjs.com/',
  },
  {
    title: 'pnpm',
    imageUrl: pnpmLogo,
    imageAlt: 'pnpm logo',
    description: 'A fast, disk space efficient package manager',
    introUrl: 'https://pnpm.io/',
    docsUrl: 'https://pnpm.io/motivation',
  },
  {
    title: 'PostCSS',
    imageUrl: postcssLogo,
    imageAlt: 'PostCSS logo',
    description: 'A tool for transforming CSS with JavaScript',
    introUrl: 'https://postcss.org/',
    docsUrl: 'https://github.com/postcss/postcss#usage',
  },
  {
    title: 'PostgreSQL',
    imageUrl: postgresqlLogo,
    imageAlt: 'PostgreSQL logo',
    description: 'A powerful, open source object-relational database system',
    introUrl: 'https://www.postgresql.org/',
    docsUrl: 'https://www.postgresql.org/docs/',
  },
  {
    title: 'Prettier',
    imageUrl: prettierLogo,
    imageAlt: 'Prettier logo',
    description: 'An opinionated code formatter',
    introUrl: 'https://prettier.io/',
    docsUrl: 'https://prettier.io/docs/en/index.html',
  },
  {
    title: 'React',
    imageUrl: reactLogo,
    imageAlt: 'React logo',
    description: 'A JavaScript library for building user interfaces',
    introUrl: 'https://reactjs.org/',
    docsUrl: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    title: 'Render',
    imageUrl: renderLogo,
    imageAlt: 'Render logo',
    description:
      'A cloud platform for building, deploying, and automating modern web projects',
    introUrl: 'https://render.com/',
    docsUrl: 'https://render.com/docs',
  },
  {
    title: 'Rollup',
    imageUrl: rollupLogo,
    imageAlt: 'Rollup logo',
    description: 'A module bundler for JavaScript',
    introUrl: 'https://rollupjs.org/guide/',
    docsUrl: 'https://rollupjs.org/guide/',
  },
  {
    title: 'Rust',
    imageUrl: rustLogo,
    imageAlt: 'Rust logo',
    description:
      'A systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety',
    introUrl: 'https://www.rust-lang.org/',
    docsUrl: 'https://doc.rust-lang.org/book/',
  },
  {
    title: 'SWC',
    imageUrl: swcLogo,
    imageAlt: 'SWC logo',
    description: 'A super-fast JavaScript and TypeScript compiler',
    introUrl: 'https://swc.rs/',
    docsUrl: 'https://swc.rs/docs/',
  },
  {
    title: 'Tailwind CSS',
    imageUrl: tailwindcssLogo,
    imageAlt: 'Tailwind CSS logo',
    description:
      'A utility-first CSS framework for rapidly building custom designs',
    introUrl: 'https://tailwindcss.com/',
    docsUrl: 'https://tailwindcss.com/docs',
  },
  {
    title: 'TypeScript',
    imageUrl: typescriptLogo,
    imageAlt: 'TypeScript logo',
    description: 'An open-source language which builds on JavaScript',
    introUrl: 'https://www.typescriptlang.org/',
    docsUrl: 'https://www.typescriptlang.org/docs/',
  },
  {
    title: 'Ubuntu',
    imageUrl: ubuntuLogo,
    imageAlt: 'Ubuntu logo',
    description:
      'An open source software operating system that runs from the desktop, to the cloud, to all your internet connected things',
    introUrl: 'https://ubuntu.com/',
    docsUrl: 'https://ubuntu.com/tutorials',
  },
  {
    title: 'V8',
    imageUrl: v8Logo,
    imageAlt: 'V8 logo',
    description:
      'Google’s open source high-performance JavaScript and WebAssembly engine',
    introUrl: 'https://v8.dev/',
    docsUrl: 'https://v8.dev/docs',
  },
  {
    title: 'Visual Studio Code',
    imageUrl: vscodeLogo,
    imageAlt: 'Visual Studio Code logo',
    description:
      'A code editor redefined and optimized for building and debugging modern web and cloud applications',
    introUrl: 'https://code.visualstudio.com/',
    docsUrl: 'https://code.visualstudio.com/docs',
  },
  {
    title: 'Vite',
    imageUrl: viteLogo,
    imageAlt: 'Vite logo',
    // eslint-disable-next-line quotes
    description: "Next generation frontend tooling. It's fast!",
    introUrl: 'https://vitejs.dev/',
    docsUrl: 'https://vitejs.dev/guide/',
  },
  {
    title: 'Vitest',
    imageUrl: vitestLogo,
    imageAlt: 'Vitest logo',
    // eslint-disable-next-line quotes
    description: "A Vite-native unit test framework. It's fast!",
    introUrl: 'https://vitest.dev/',
    docsUrl: 'https://vitest.dev/guide/',
  },
  {
    title: 'WebAssembly',
    imageUrl: wasmLogo,
    imageAlt: 'WebAssembly logo',
    description:
      'A binary instruction format for a stack-based virtual machine',
    introUrl: 'https://webassembly.org/',
    docsUrl: 'https://webassembly.org/getting-started/developers-guide/',
  },
  {
    title: 'Webpack',
    imageUrl: webpackLogo,
    imageAlt: 'Webpack logo',
    description: 'A static module bundler for modern JavaScript applications',
    introUrl: 'https://webpack.js.org/',
    docsUrl: 'https://webpack.js.org/concepts/',
  },
  {
    title: 'Windi CSS',
    imageUrl: windicssLogo,
    imageAlt: 'Windi CSS logo',
    description: 'A utility-first CSS framework for rapid UI development',
    introUrl: 'https://windicss.org/',
    docsUrl: 'https://windicss.org/guide/',
  },
  {
    title: 'Workbox',
    imageUrl: workboxLogo,
    imageAlt: 'Workbox logo',
    description: 'A set of libraries and Node modules to help you build PWAs',
    introUrl: 'https://developers.google.com/web/tools/workbox',
    docsUrl: 'https://developers.google.com/web/tools/workbox/modules',
  },
  {
    title: 'Yarn',
    imageUrl: yarnLogo,
    imageAlt: 'Yarn logo',
    description: 'A package manager that doubles down as project manager',
    introUrl: 'https://yarnpkg.com/',
    docsUrl: 'https://yarnpkg.com/getting-started',
  },
]
