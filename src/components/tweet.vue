<template>
    <article class="tweet border-b border-gray-600">
        <router-link to="#" class="flex p-4">
            <div class="text-white">
                <figure class="w-16 mr-3">
                    <img class="rounded-full w-full object-cover" :src="content.author.profile_img_url"
                        :alt="content.author.display_name">
                </figure>
            </div>
            <section class="tweet-body flex-1">
                <div class="tweet-author">
                    <samp class="text-white font-bold">
                        {{content.author.display_name}}
                    </samp>
                    <samp class="text-gray-500 ml-2 font-normal">
                        {{content.author.username}}
                    </samp>
                </div>
                <div :class="['tweet-contet' ,{'mb-3': content.image }]">
                    <p class="text-white" v-html="content.body"></p>
                </div>
                <figure v-if="content.image" class="rounded-xl border border-gray-600 overflow-hidden">
                    <img class="w-full h-44 object-cover" 
                    :src="content.image.url"
                    :alt="content.image.alt">
                </figure>
                <div class="tweet-actions mt-2 flex items-center justify-between">
                    <div class="text-gray-500">
                        <i class="fas fa-comment 
                        p-2 mr-1 rounded-full
                         hover:bg-green-900 hover:text-green-500"></i>
                         <span>{{content.stats.comments.length}}</span>
                    </div>
                    <div class="text-gray-500">
                        <i class="fas fa-retweet 
                        p-2 mr-1 rounded-full
                         hover:bg-green-900 hover:text-green-500"></i>
                         <span>{{content.stats.retweets.length}}</span>
                    </div>
                    <div class="text-gray-500">
                        <i class="fas fa-heart 
                        p-2 mr-1 rounded-full
                         hover:bg-green-900 hover:text-green-500"></i>
                         <span>{{content.stats.likes.length}}</span>
                    </div>
                    <div class="text-gray-500">
                        <i class="fas fa-share 
                        p-2 mr-1 rounded-full
                         hover:bg-green-900 hover:text-green-500"></i>
                    </div>
                </div>
            </section>
        </router-link>

    </article>
</template>
<script lang="ts">import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TweetItem',
    props: ['content'],
    setup() {
        return {}
    }
})
</script>