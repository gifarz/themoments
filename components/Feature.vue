<template>
    <div class="feature my-20 mx-2 lg:mx-10 xl:mx-20">
        <h1 class="text-center text-2xl font-bold mb-8 underline decoration-sage underline-offset-8">FEATURES</h1>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div class="group">
                <div class="block p-6 rounded-lg shadow-lg bg-white group-hover:bg-sage">
                    <h5 class="text-gray-900 text-lg leading-tight font-bold mb-2 group-hover:text-white">Create Moments</h5>
                    <p class="text-gray-700 text-base mb-4 group-hover:text-white">
                        Let's create moments to know each other with your future partner that you choose and he/she also choose you.
                    </p>
                </div>
            </div>

            <div class="group">
                <div class="block p-6 rounded-lg shadow-lg bg-white group-hover:bg-sage">
                    <h5 class="text-gray-900 text-lg leading-tight font-bold mb-2 group-hover:text-white">Save Moments</h5>
                    <p class="text-gray-700 text-base mb-4 group-hover:text-white">
                        Save your happy moments with your partner to be remembered someday. You can choose for over 20 photos to save!
                    </p>
                </div>
            </div>
    
            <div class="group sm:col-span-2 sm:w-1/2 sm:justify-self-center xl:col-span-1 xl:w-full">
                <div class="block p-6 rounded-lg shadow-lg bg-white group-hover:bg-sage
                "
                >
                    <h5 class="text-gray-900 text-lg leading-tight font-bold mb-2 group-hover:text-white">Share Moments</h5>
                    <p class="text-gray-700 text-base mb-4 group-hover:text-white">
                        You can share moments which consist of engagement day, wedding day or just want to share your happy moments.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Feature",
    }
</script>