import {getPageProperties} from './connectNotion.jsx'

export function replaceSpacesWithHyphens(text) {
  const hyphenatedText = text.replace(/\s+/g, '-');
  return hyphenatedText;
}

function MyComponent() {
  const myText = "This is some text with spaces.";
  const hyphenatedText = replaceSpacesWithHyphens(myText);
  return (
    <div>
      <p>{hyphenatedText}</p>
    </div>
  );
}


export async function getTechs(database){
    if(database){
      const pageIds = database.results.map((page)=>page.id)
      const techId = database.results[1].properties.Tech.id
      const techs = await Promise.all(pageIds.map(async (pageId) => {
        const tech = await getPageProperties(pageId, techId)
        const techTags = tech.response.multi_select;
        if (techTags.length>0){
          return (techTags.map((techTag)=> [techTag.name, techTag.id]));
        }else{
          return []
        }
        
      }));
      return techs
    }else{
      return []
    }
  }
  
  export async function getSummaries(database){
    if(database){
      const pageIds = database.results.map((page)=>page.id)
      const summaryId = database.results[1].properties.Summary.id
      const summaries = await Promise.all(pageIds.map(async (pageId) => {
        const summary = await getPageProperties(pageId, summaryId)
        if (summary.response.results.length>0){
          return (summary.response.results[0].rich_text.plain_text);
        }else{
          return ""
        }
        
      }));
      return summaries
    }else{
      return []
    }
  }