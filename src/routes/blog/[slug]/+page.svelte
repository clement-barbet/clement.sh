<script>
    export let data;
</script>

<main class="blog">
    <div class="blog-content mt-[40px]">

        <div class="flex space-x-4 mb-2">
            <img class="w-[50px] rounded-full" src="/avatar.png" alt="Avatar">
            <div>
                <h6 class="font-sans ">By <strong class="">Clément Barbet</strong></h6>
                <h6 class="text-gray-500 text-base font-semibold">DevOps engineer</h6>
            </div>
            
        </div>
        <h1 class="main-title">{data.post.title}</h1>
        <h6 class="mb-4 text-lg text-gray-600">Published on February 3, 2023</h6>
        <div class="flex space-x-4 mb-6">
        <h6 class=" py-1 px-2 bg-gray-200 text-sm font-medium rounded-md text-gray-600 hover:bg-black hover:text-white"><a href="#top">DevOps</a></h6>
            <h6 class=" py-1 px-2 bg-gray-200  text-sm font-medium rounded-md text-gray-600 hover:bg-black hover:text-white"><a href="#top">GCP</a></h6>
        </div>

        <div>
            <img class="  rounded-3xl" src="/post_img/{data.post.slug}.png" alt="Main img">
        </div>

        
        <div>{@html data.post.body}</div>
    </div>
</main>

<!-- 
    # - H1
    ## - H2
    ### - H3

    ##### - title of file

-->

<style>
    :global(main.blog) { /* */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
    :global(div.blog-content) {
        width: 900px;
        padding-left: 1em;
        padding-right: 1em;
    }

    :global(div.blog-content h1.main-title) {
        margin-top: 0.4em;
        line-height: 1em;
        font-size: 2.2em;
        margin-bottom: 0.4em;
    }

    :global(div.blog-content h1) {
        font-size: 1.6em;
        font-weight: bold;
        margin-top: 2em;
        margin-bottom: 0.6em;
    }

    :global(div.blog-content h2) {
        font-size: 1.4em;
        font-weight: bold;
        margin-top: 1em;
        margin-bottom: 0.6em;
    }

    :global(div.blog-content h3) {
        font-size: 1.25em;
        font-weight: 600;
        margin-top: 1em;
        margin-bottom: 0.4em;
    }
    :global(div.blog-content p) {
        font-size: 1.2em;
        margin-bottom: 1em;
    }

    :global(div.blog-content pre) {
        font-size: small;
        color: #334155;
        background-color: #f1f5f9;
        padding-left: 1em;
        padding-top: 1em;
        padding-bottom: 0.5em;
        margin-bottom: 40px;
    }

    :global(div.blog-content p code) {
        font-weight: 500;
        font-size: medium;
        color: #f87171;
        border-radius: 5px;
        background-color: #f1f5f9;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;

    }

    :global(div.blog-content h5) {
        margin-top: 20px;
        font-weight: 700;
        font-size: 1.2em;
        color: #6b7280;
        
    }


</style>


