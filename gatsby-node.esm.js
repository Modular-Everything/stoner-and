import path from 'path';

//

async function turnFineprintIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/templates/Fineprint.js');

  const { data } = await graphql(`
    {
      pages: allSanityGeneric {
        nodes {
          title
          slug {
            current
          }
          _id
        }
      }
    }
  `);

  data.pages.nodes.forEach((page) => {
    console.info(`🤔 Reading the fineprint on: "${page.title}"...`);

    const slug = page.slug.current;

    actions.createPage({
      path: slug,
      component: template,
      context: {
        id: page._id,
        slug,
      },
    });
  });
}

//

export async function createPages(params) {
  await turnFineprintIntoPages(params);
}
