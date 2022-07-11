<template>
    <div>
        <ul>
            <li v-for="p in content" :key="p._id">
                <nuxt-link :to="p._path">{{ p.title }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import algoliaIndexer from '~~/utils/algoliaIndex';
const content = await queryContent('/').where({'_draft': false}).only(['_id','_path','author','title','description','createdAt']).find();
if(process.server && process.env.NODE_ENV == 'development'){
    console.log(process.env.NODE_ENV);
    algoliaIndexer(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY,'developerzilla',content);
}
</script>