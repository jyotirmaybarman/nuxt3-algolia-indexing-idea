// const algoliasearch = require('algoliasearch');
import algoliasearch from 'algoliasearch';

export default function algoliaIndexer(appId, apiKey, indexName, objects){

    const client = algoliasearch(appId, apiKey);
    const index = client.initIndex(indexName);
    objects.forEach(obj => obj.objectID = obj._id)
    index.saveObjects(objects);
    
    console.log("Algolia indexed all the local contents");
}

