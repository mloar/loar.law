import rss from '@astrojs/rss';

export function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: 'Loar Law',
    // `<description>` field in output xml
    description: 'The technology law firm',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: [],
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
