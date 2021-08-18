<template>
    <div>
        <div class="text-center shadow-xl mt-2 bg-white opacity-50 rounded-xl p-4 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-sm mx-auto">
            <h2 class="font-semibold text-2xl text-gray-600 p-3">Search Engine</h2>
            <hr>
            <input 
                class="mt-2 mb-2 border font-serif rounded-r-none text-gray-500 border-gray-300 bg-white opacity-100 rounded-lg mx-auto max-w-xs p-1 text-center" 
                placeholder="Search Photos"
                type="text"
                v-model="search"
            />
            <button class="mt-2 mb-2 absolute border rounded-l-none text-gray-500 border-gray-300 bg-gray-300 opacity-100 rounded-lg mx-auto max-w-screen-sm p-1.5 hover:bg-white cursor-pointer" type="submit" @click="onClick('0')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clip-rule="evenodd" />
                    </svg>
            </button>
        </div>
        <div v-if="!total" class="text-center shadow-xl mt-2 bg-white opacity-30 rounded-xl p-4 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-sm mx-auto">
            <div class="w-6/12 p-2 xl:w-full 2xl:w-full lg:w-full md:w-full sm:w-full shadow-3xl">
                <div class="animate-pulse bg-gray-300 h-full rounded-md p-2 flex space-x-4">
                    <div class="flex-1 space-y-4 py-1">
                        <div class="h-4 bg-gray-400 dark:bg-red-400 rounded w-3/4"></div>
                        <div class="space-y-2">
                            <div class="h-4 bg-gray-400 dark:bg-red-400 rounded"></div>
                            <div class="h-4 bg-gray-400 dark:bg-red-400 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>                    
            </div>
        </div>
        <div v-if="total" class="text-center shadow-xl mt-2 bg-white opacity-70 rounded-xl p-4 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-sm mx-auto">
            <h2 class="font-semibold text-sm text-gray-600 p-3">{{ total }} Results for `{{ search }}` </h2>
            <div class="mb-2">
                <button :disabled="pageNo == String(1)" @click="onClick('prev')" class="rounded-md bg-gray-300 text-gray-600 mr-1 mx-auto hover:bg-white hover:border-gray-400 border">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button :disabled="pageNo == String(3)" @click="onClick('next')" class="rounded-md bg-gray-300 text-gray-600 ml-1 mx-auto hover:bg-white hover:border-gray-400 border">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button >
            </div>
            <div class="flex flex-wrap justify-start">
                <div v-for="pc in results" :key="pc" class="w-6/12  p-2">
                    <img :src="pc.urls.regular" :alt="results.description" class="rounded-xl shadow-xl max-w-full  h-full w-full align-middle" :title=" results.description" />
                </div>
                <div class="w-6/12 p-2 xl:w-full 2xl:w-full lg:w-full md:w-full sm:w-full opacity-60 shadow-3xl">
                    <div class="animate-pulse bg-gray-300 h-full rounded-md p-2 flex space-x-4">
                        <div class="flex-1 space-y-4 py-1">
                            <div class="h-4 bg-gray-400 dark:bg-red-400 rounded w-3/4"></div>
                            <div class="space-y-2">
                                <div class="h-4 bg-gray-400 dark:bg-red-400 rounded"></div>
                                <div class="h-4 bg-gray-400 dark:bg-red-400 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            accessKey: "nutTYrbG4S6IaEJfnzrC5TikeJxGt5Wrg_bnEj-Nqq8",
            search : "",
            pageNo : "1",
            total : '',
            results: [{
                id: "",
                created_at: "",
                updated_at: "",
                promoted_at: "",
                width: '',
                height: '',
                color: "",
                blur_hash: "",
                description: "",
                alt_description: "",
                urls: {
                    raw: '',
                    full: '',
                    regular: '',
                    small: '',
                    thumb: '',
                }
            }],
        }
    },
    methods: {
        async onClick(x) {
            if(String(x) == 'next'){
                this.pageNo++;
            }
            else if(String(x) == 'prev'){
                this.pageNo--;
            }
            // console.log(this.pageNo);
            const BaseURL = "https://api.unsplash.com/search/photos?page="+this.pageNo+"&query="+this.search+"&client_id="+this.accessKey;
            const response = await axios.get(BaseURL);
            const res = response.data;
            this.results = res.results;
            this.total = res.total;
        }
    }
}
</script>