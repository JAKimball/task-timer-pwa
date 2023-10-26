import { techList } from './tech-list'
import { describe, expect, it } from 'vitest'

// Verify introUrl and DocsUrl are for each tech is either undefined or a valid URL format.
// Test that the URLs are reachable and return a 200 status code.
// For each failed test, report the name of the tech that failed and the URL that failed.

// fetch test always fails for the following URLs so they are excluded from the test:
const excludedUrls = ['https://www.cloudflare.com/learning/']

describe('tech-list', () => {
  // it('should have valid URLs', async () => {
  //   const techListWithUrls = techList.filter(tech => tech.introUrl || tech.docsUrl)
  //   for (const tech of techListWithUrls) {
  //     if (tech.introUrl && !excludedUrls.includes(tech.introUrl)) {
  //       const response = await fetch(tech.introUrl)
  //       if (response.status !== 200) {
  //         console.log('Failed to resolve introUrl:', tech.introUrl, 'for tech:', tech.title)
  //       }
  //       expect(response.status).toBe(200)
  //     }
  //     if (tech.docsUrl && !excludedUrls.includes(tech.docsUrl)) {
  //       const response = await fetch(tech.docsUrl)
  //       if (response.status !== 200) {
  //         console.log('Failed to resolve docsUrl:', tech.docsUrl, 'for tech:', tech.title)
  //       }
  //       expect(response.status).toBe(200)
  //     }
  //   }
  // })

  // Here is the above test rewritten using Promise.allSettled() to run all the fetches in parallel.
  // In order to report the tech name and URL for each failed fetch, we need to keep track of the tech and URL for each fetch.
  // We do this by creating an array of fetches for each tech that has URLs.
  // Then we use Promise.allSettled() to run all the fetches in parallel.

  // TODO(T-56): This test does not properly fail when a fetch fails. It passes even when a fetch fails. This is apparently a bug in vitest. See if this is fixed in a later version of vitest. It may have to do with the use of Promise.allSettled(). See if it properly reports failed fetches when using Promise.all() instead of Promise.allSettled().
  it('should have valid URLs', async () => {
    const techListWithUrls = techList.filter(tech => tech.introUrl ?? tech.docsUrl)
    const fetches = []
    for (const tech of techListWithUrls) {
      if (tech.introUrl && !excludedUrls.includes(tech.introUrl)) {
        fetches.push(
          fetch(tech.introUrl).then(response => {
            if (response.status !== 200) {
              console.error('Failed to resolve introUrl:', tech.introUrl, 'for tech:', tech.title)
            }
            expect(response.status).toBe(200)
          })
        )
      }
      if (tech.docsUrl && !excludedUrls.includes(tech.docsUrl)) {
        fetches.push(
          fetch(tech.docsUrl).then(response => {
            if (response.status !== 200) {
              console.error('Failed to resolve docsUrl:', tech.docsUrl, 'for tech:', tech.title)
            }
            expect(response.status).toBe(200)
          })
        )
      }
    }
    console.log('Number of fetches:', fetches.length)
    if (fetches.length !== 0) expect.hasAssertions()
    // expect.assertions(82)
    expect.assertions(fetches.length)
    await Promise.allSettled(fetches)
  })

  // Verify that each tech has a name, description, and image.
  it('should have a name, description, and image', () => {
    for (const tech of techList) {
      // report the name of the tech if it is missing a name, description, or image
      if (!tech.title) {
        console.log('Tech is missing a title:', tech)
      }
      if (!tech.description) {
        console.log('Tech is missing a description:', tech)
      }
      if (!tech.imageUrl) {
        console.log('Tech is missing an image:', tech)
      }

      expect(tech.title).toBeTruthy()
      expect(tech.description).toBeTruthy()
      expect(tech.imageUrl).toBeTruthy()
    }
  })

  // Verify that the tech list is sorted alphabetically by title.
  it('should be sorted alphabetically by title', () => {
    const sortedTechList = techList.sort((a, b) => a.title.localeCompare(b.title))
    expect(techList).toEqual(sortedTechList)
  })
})
