<template>
  <div class="home">
    <Tweet-item 
    v-for="content in tweets"
        :key="content._id"
        :content="content"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import mocktweets from '../mocks/tweets.mock';
import TweetItem from '../components/tweet.vue';

export default defineComponent({
    name: "HomeView",
    components:{
      TweetItem
    },
    setup() {
        const tweets = ref(mocktweets);
        return {
            tweets,
        };
    },
});
</script>
