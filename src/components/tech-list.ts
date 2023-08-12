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
import reactRouterLogo from '../assets/react-router.svg'
import reactSpringLogo from '../assets/react-spring.svg'
// import reactThreeFiberLogo from '../assets/react-three-fiber.svg'
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
import threeJsLogo from '../assets/threejs.svg'

/**
 * Tech list categories
 *
 * @export
 * @enum {number}
 */
export enum TechCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Edge = 'Edge',
  DevOps = 'DevOps',
  Design = 'Design',
  Database = 'Database',
  Other = 'Other',
}

/**
 * Structure of the tech list
 *
 * @interface TechProps
 *
 */
export interface TechProps {
  title: string
  category?: TechCategory
  imageUrl: string
  imageAlt: string
  description: string
  introUrl?: string // optional front page url for the tech
  docsUrl?: string // optional docs/getting started url for the tech
}

export const techList: TechProps[] = [
  {
    title: 'Babel',
    category: TechCategory.Frontend,
    imageUrl: babelLogo,
    imageAlt: 'Babel logo',
    description: 'The compiler for writing next generation JavaScript',
    introUrl: 'https://babeljs.io/',
    docsUrl: 'https://babeljs.io/docs/en/',
  },
  {
    title: 'Bash',
    category: TechCategory.DevOps,
    imageUrl: bashLogo,
    imageAlt: 'Bash logo',
    description: 'A Unix shell and command language written by Brian Fox',
    introUrl: 'https://www.gnu.org/software/bash/',
    docsUrl: 'https://www.gnu.org/software/bash/manual/bash.html',
  },
  {
    title: 'Cloudflare',
    category: TechCategory.Edge,
    imageUrl: cloudflareLogo,
    imageAlt: 'Cloudflare logo',
    description: 'A web infrastructure and website security company',
    introUrl: 'https://www.cloudflare.com/',
    docsUrl: 'https://www.cloudflare.com/learning/',
  },
  {
    title: 'Cloudflare Workers',
    category: TechCategory.Edge,
    imageUrl: cloudflareWorkersLogo,
    imageAlt: 'Cloudflare Workers logo',
    description: 'A serverless platform for creating entirely new applications',
    introUrl: 'https://workers.cloudflare.com/',
    docsUrl: 'https://developers.cloudflare.com/workers/',
  },
  {
    title: 'CSS3',
    category: TechCategory.Frontend,
    imageUrl: css3Logo,
    imageAlt: 'CSS3 logo',
    description:
      'A style sheet language used for describing the presentation of a document written in a markup language',
    introUrl: 'https://www.w3.org/Style/CSS/Overview.en.html',
    docsUrl: 'https://www.w3.org/Style/CSS/learning',
  },
  {
    title: 'esbuild',
    category: TechCategory.Frontend,
    imageUrl: esbuildLogo,
    imageAlt: 'esbuild logo',
    description: 'An extremely fast JavaScript bundler',
    introUrl: 'https://esbuild.github.io/',
    docsUrl: 'https://esbuild.github.io/getting-started/',
  },
  {
    title: 'ESLint',
    category: TechCategory.Frontend,
    imageUrl: eslintLogo,
    imageAlt: 'ESLint logo',
    description:
      'A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript',
    introUrl: 'https://eslint.org/',
    docsUrl: 'https://eslint.org/docs/user-guide/getting-started',
  },
  {
    title: 'Figma',
    category: TechCategory.Design,
    imageUrl: figmaLogo,
    imageAlt: 'Figma logo',
    description: 'A collaborative interface design tool',
    introUrl: 'https://www.figma.com/',
    docsUrl: 'https://www.figma.com/developers/docs',
  },
  {
    title: 'Git',
    category: TechCategory.DevOps,
    imageUrl: gitLogo,
    imageAlt: 'Git logo',
    description: 'A free and open source distributed version control system',
    introUrl: 'https://git-scm.com/',
    docsUrl: 'https://git-scm.com/doc',
  },
  {
    title: 'GitHub',
    category: TechCategory.DevOps,
    imageUrl: githubLogo,
    imageAlt: 'GitHub logo',
    description: 'A code hosting platform for version control and collaboration',
    introUrl: 'https://github.com/about',
    docsUrl: 'https://docs.github.com',
  },
  {
    title: 'HTML5',
    category: TechCategory.Frontend,
    imageUrl: html5Logo,
    imageAlt: 'HTML5 logo',
    description:
      'A markup language used for structuring and presenting content on the World Wide Web',
    introUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    title: 'JavaScript',
    category: TechCategory.Frontend,
    imageUrl: javascriptLogo,
    imageAlt: 'JavaScript logo',
    description:
      'A high-level, interpreted programming language conforming to the ECMAScript specification',
    introUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
  },
  {
    title: 'Jest',
    category: TechCategory.DevOps,
    imageUrl: jestLogo,
    imageAlt: 'Jest logo',
    description: 'A delightful JavaScript Testing Framework with a focus on simplicity',
    introUrl: 'https://jestjs.io/',
    docsUrl: 'https://jestjs.io/docs/getting-started',
  },
  {
    title: 'Markdown',
    category: TechCategory.Other,
    imageUrl: markdownLogo,
    imageAlt: 'Markdown logo',
    description: 'A lightweight markup language with plain text formatting syntax',
    introUrl: 'https://daringfireball.net/projects/markdown/',
    docsUrl: 'https://www.markdownguide.org/getting-started/',
  },
  {
    title: 'MDX',
    category: TechCategory.Frontend,
    imageUrl: mdxLogo,
    imageAlt: 'MDX logo',
    description: 'A JSX in Markdown for ambitious projects',
    introUrl: 'https://mdxjs.com/',
    docsUrl: 'https://mdxjs.com/getting-started',
  },
  {
    title: 'MongoDB',
    category: TechCategory.Database,
    imageUrl: mongodbLogo,
    imageAlt: 'MongoDB logo',
    description: 'A cross-platform document-oriented database program',
    introUrl: 'https://www.mongodb.com/',
    docsUrl: 'https://docs.mongodb.com/',
  },
  {
    title: 'Node.js',
    category: TechCategory.Backend,
    imageUrl: nodejsLogo,
    imageAlt: 'Node.js logo',
    description: 'A JavaScript runtime built on Chrome’s V8 JavaScript engine',
    introUrl: 'https://nodejs.org/en/',
    docsUrl: 'https://nodejs.org/en/docs/',
  },
  {
    title: 'npm',
    category: TechCategory.DevOps,
    imageUrl: npmLogo,
    imageAlt: 'npm logo',
    description: 'A package manager for the JavaScript programming language',
    introUrl: 'https://www.npmjs.com/',
    docsUrl: 'https://docs.npmjs.com/',
  },
  {
    title: 'pnpm',
    category: TechCategory.DevOps,
    imageUrl: pnpmLogo,
    imageAlt: 'pnpm logo',
    description: 'A fast, disk space efficient package manager',
    introUrl: 'https://pnpm.io/',
    docsUrl: 'https://pnpm.io/motivation',
  },
  {
    title: 'PostCSS',
    category: TechCategory.Frontend,
    imageUrl: postcssLogo,
    imageAlt: 'PostCSS logo',
    description: 'A tool for transforming CSS with JavaScript',
    introUrl: 'https://postcss.org/',
    docsUrl: 'https://github.com/postcss/postcss#usage',
  },
  {
    title: 'PostgreSQL',
    category: TechCategory.Database,
    imageUrl: postgresqlLogo,
    imageAlt: 'PostgreSQL logo',
    description: 'A powerful, open source object-relational database system',
    introUrl: 'https://www.postgresql.org/',
    docsUrl: 'https://www.postgresql.org/docs/',
  },
  {
    title: 'Prettier',
    category: TechCategory.DevOps,
    imageUrl: prettierLogo,
    imageAlt: 'Prettier logo',
    description: 'An opinionated code formatter',
    introUrl: 'https://prettier.io/',
    docsUrl: 'https://prettier.io/docs/en/index.html',
  },
  {
    title: 'React',
    category: TechCategory.Frontend,
    imageUrl: reactLogo,
    imageAlt: 'React logo',
    description: 'A JavaScript library for building user interfaces',
    introUrl: 'https://react.dev/',
    docsUrl: 'https://react.dev/learn',
  },
  {
    title: 'React Router',
    category: TechCategory.Frontend,
    imageUrl: reactRouterLogo,
    imageAlt: 'React Router logo',
    description:
      'A collection of navigational components to declaratively enable client side routing',
    introUrl: 'https://reactrouter.com/',
    docsUrl: 'https://reactrouter.com/en/main/start/tutorial',
  },
  {
    title: 'React Spring',
    category: TechCategory.Frontend,
    imageUrl: reactSpringLogo,
    imageAlt: 'React Spring logo',
    description: 'A spring-physics based animation library for React',
    introUrl: 'https://www.react-spring.io/',
    docsUrl: 'https://www.react-spring.io/docs',
  },
  // {
  //   title: 'React Three Fiber',
  //   category: TechCategory.Frontend,
  //   imageUrl: reactThreeFiberLogo,
  //   imageAlt: 'React Three Fiber logo',
  //   description: 'A React renderer for Three.js',
  //   introUrl: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
  //   docsUrl: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
  // },
  {
    title: 'Render',
    category: TechCategory.Backend,
    imageUrl: renderLogo,
    imageAlt: 'Render logo',
    description: 'A cloud platform for building, deploying, and automating modern web projects',
    introUrl: 'https://render.com/',
    docsUrl: 'https://render.com/docs',
  },
  {
    title: 'Rollup',
    category: TechCategory.Frontend,
    imageUrl: rollupLogo,
    imageAlt: 'Rollup logo',
    description: 'A module bundler for JavaScript',
    introUrl: 'https://rollupjs.org',
    docsUrl: 'https://rollupjs.org/introduction',
  },
  {
    title: 'Rust',
    category: TechCategory.Other,
    imageUrl: rustLogo,
    imageAlt: 'Rust logo',
    description:
      'A systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety',
    introUrl: 'https://www.rust-lang.org/',
    docsUrl: 'https://doc.rust-lang.org/book/',
  },
  {
    title: 'SWC',
    category: TechCategory.Frontend,
    imageUrl: swcLogo,
    imageAlt: 'SWC logo',
    description: 'A super-fast JavaScript and TypeScript compiler',
    introUrl: 'https://swc.rs/',
    docsUrl: 'https://swc.rs/docs/',
  },
  {
    title: 'Tailwind CSS',
    category: TechCategory.Frontend,
    imageUrl: tailwindcssLogo,
    imageAlt: 'Tailwind CSS logo',
    description: 'A utility-first CSS framework for rapidly building custom designs',
    introUrl: 'https://tailwindcss.com/',
    docsUrl: 'https://tailwindcss.com/docs',
  },
  {
    title: 'three.js',
    category: TechCategory.Frontend,
    imageUrl: threeJsLogo,
    imageAlt: 'three.js logo',
    description:
      'A cross-browser JavaScript library to create and display animated 3D computer graphics in a web browser',
    introUrl: 'https://threejs.org/',
    docsUrl: 'https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene',
  },
  {
    title: 'TypeScript',
    category: TechCategory.Frontend,
    imageUrl: typescriptLogo,
    imageAlt: 'TypeScript logo',
    description: 'An open-source language which builds on JavaScript',
    introUrl: 'https://www.typescriptlang.org/',
    docsUrl: 'https://www.typescriptlang.org/docs/',
  },
  {
    title: 'Ubuntu',
    category: TechCategory.DevOps,
    imageUrl: ubuntuLogo,
    imageAlt: 'Ubuntu logo',
    description:
      'An open source software operating system that runs from the desktop, to the cloud, to all your internet connected things',
    introUrl: 'https://ubuntu.com/',
    docsUrl: 'https://ubuntu.com/tutorials',
  },
  {
    title: 'V8',
    category: TechCategory.Other,
    imageUrl: v8Logo,
    imageAlt: 'V8 logo',
    description: 'Google’s open source high-performance JavaScript and WebAssembly engine',
    introUrl: 'https://v8.dev/',
    docsUrl: 'https://v8.dev/docs',
  },
  {
    title: 'Visual Studio Code',
    category: TechCategory.DevOps,
    imageUrl: vscodeLogo,
    imageAlt: 'Visual Studio Code logo',
    description:
      'A code editor redefined and optimized for building and debugging modern web and cloud applications',
    introUrl: 'https://code.visualstudio.com/',
    docsUrl: 'https://code.visualstudio.com/docs',
  },
  {
    title: 'Vite',
    category: TechCategory.Frontend,
    imageUrl: viteLogo,
    imageAlt: 'Vite logo',
    // eslint-disable-next-line quotes
    description: "Next generation frontend tooling. It's fast!",
    introUrl: 'https://vitejs.dev/',
    docsUrl: 'https://vitejs.dev/guide/',
  },
  {
    title: 'Vitest',
    category: TechCategory.DevOps,
    imageUrl: vitestLogo,
    imageAlt: 'Vitest logo',
    // eslint-disable-next-line quotes
    description: "A Vite-native unit test framework. It's fast!",
    introUrl: 'https://vitest.dev/',
    docsUrl: 'https://vitest.dev/guide/',
  },
  {
    title: 'WebAssembly',
    category: TechCategory.Other,
    imageUrl: wasmLogo,
    imageAlt: 'WebAssembly logo',
    description: 'A binary instruction format for a stack-based virtual machine',
    introUrl: 'https://webassembly.org/',
    docsUrl: 'https://webassembly.org/getting-started/developers-guide/',
  },
  {
    title: 'Webpack',
    category: TechCategory.Frontend,
    imageUrl: webpackLogo,
    imageAlt: 'Webpack logo',
    description: 'A static module bundler for modern JavaScript applications',
    introUrl: 'https://webpack.js.org/',
    docsUrl: 'https://webpack.js.org/concepts/',
  },
  {
    title: 'Windi CSS',
    category: TechCategory.Frontend,
    imageUrl: windicssLogo,
    imageAlt: 'Windi CSS logo',
    description: 'A utility-first CSS framework for rapid UI development',
    introUrl: 'https://windicss.org/',
    docsUrl: 'https://windicss.org/guide/',
  },
  {
    title: 'Workbox',
    category: TechCategory.Frontend,
    imageUrl: workboxLogo,
    imageAlt: 'Workbox logo',
    description: 'A set of libraries and Node modules to help you build PWAs',
    introUrl: 'https://developers.google.com/web/tools/workbox',
    docsUrl: 'https://developers.google.com/web/tools/workbox/modules',
  },
  {
    title: 'Yarn',
    category: TechCategory.DevOps,
    imageUrl: yarnLogo,
    imageAlt: 'Yarn logo',
    description: 'A package manager that doubles down as project manager',
    introUrl: 'https://yarnpkg.com/',
    docsUrl: 'https://yarnpkg.com/getting-started',
  },
]
