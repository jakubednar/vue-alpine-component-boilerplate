export default String.raw`
<div x-data="testData" class="w-screen h-screen flex items-center justify-center">
    <button 
        @click="count++" 
        x-text="'Increment '+count" 
        class="px-4 py-2 rounded-md bg-pink-400 text-white">
    </button>
</div>
`;
