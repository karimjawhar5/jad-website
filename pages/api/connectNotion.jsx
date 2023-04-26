const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_KEY });

export async function getDatabasePages() {
    const databaseId = process.env.DATABASE_ID;
    const response = await notion.databases.query({ database_id: databaseId});
    return {response};
}

export async function getPageProperties(pageId, propertyId) {
    const response = await notion.pages.properties.retrieve({ page_id: pageId, property_id: propertyId });
    return {response};
}

export async function getPageContent(notion2,pageId){
  const recordMap = await notion2.getPage(pageId)
  return {recordMap}
}