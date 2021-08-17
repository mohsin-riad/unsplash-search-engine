<template>
    <div>
        <div class="text-center shadow-xl mt-2 bg-white opacity-50 rounded-xl mx-auto max-w-screen-sm">
            <h2 class="font-semibold text-2xl text-gray-600 p-3">Unsplash Engine</h2>
            <hr>
            <input 
                class="mt-2 mb-2 border font-serif rounded-r-none text-gray-500 border-gray-300 bg-white opacity-100 rounded-lg mx-auto max-w-xs p-1 text-center" 
                placeholder="Search Photos"
                type="text"
                v-model="search"
            />
            <button class="mt-2 mb-2 absolute border rounded-l-none text-gray-500 border-gray-300 bg-gray-300 opacity-100 rounded-lg mx-auto max-w-screen-sm p-1.5 hover:bg-white cursor-pointer" type="submit" @click="onClick">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clip-rule="evenodd" />
                    </svg>
            </button>
        </div>

        <div v-if="total" class="text-center shadow-xl mt-2 bg-white opacity-70 rounded-xl mx-auto max-w-screen-sm">
            <h2 class="font-semibold text-2xl text-gray-600 p-3">Results for {{ search }} <p class="rounded-md max-w-min relative p-0.5 w-min text-xs bg-gray-200">{{ total }}</p></h2>
            <div class="flex flex-wrap justify-start">
                <div v-for="pc in results" :key="pc" class="w-6/12 sm:w-4/12 px-4 mb-2">
                    <img :src="pc.urls.thumb" :alt="results.description" class="shadow-3xl drop-shadow-2xl rounded max-w-full h-auto align-middle" :title=" results.description" />
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
            AuthId: "nutTYrbG4S6IaEJfnzrC5TikeJxGt5Wrg_bnEj-Nqq8",
            search : "",
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
        async onClick() {
            const BaseURL = "https://api.unsplash.com/search/photos?query="+this.search+"&client_id="+this.AuthId;
            const response = await axios.get(BaseURL);
            const res = response.data;
            this.results = res.results;
            this.total = res.total;
        }
    }
}
</script>