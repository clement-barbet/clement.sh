<script>
  export let data;

  const orderByDate = (posts) => {
    if (posts.length <= 1) return posts;

    return posts
      .sort((a, b) => a.post.date - b.post.date) // Will return an error if posts.length <= 1
      .reverse();
  };
</script>

<div class="flex justify-center mb-16">
  <div class="w-[910px] px-6">
    <div class="flex flex-col space-y-8">
      {#each orderByDate(data.summaries) as summary}
        <div id="card">
          <div id="author" class="flex items-center space-x-2">
            <img
              class=" w-8 rounded-md"
              src="avatar.png"
              alt="Avatar de Clément Barbet"
            />
            <h4 class=" text-xs">
              {summary.post.author}, <strong>{summary.post.author_job}</strong>
            </h4>
          </div>
          <div class="flex  items-center  space-x-6">
            <div id="left-part" class="w-[500px]">
              <div id="post-title" class="text-xl font-bold mt-2">
                <h1>
                  <a href="blog/{summary.post.slug}">{summary.post.title}</a>
                </h1>
              </div>
              <div id="post-description" class=" text-base text-gray-500">
                <h2>{summary.post.description}</h2>
              </div>
            </div>
            <div class="" id="post-image">
              <img
                class=" rounded-md"
                src="blog_thumbnail/{summary.post.slug}.png"
                alt="Miniature"
              />
            </div>
          </div>
          <div
            id="post-date"
            class="flex items-center text-sm  text-slate-700 space-x-2"
          >
            <h5 class="">{summary.post.formated_date} ·</h5>
            {#each summary.post.tags as tag}
              <h5
                class="  px-1 bg-gray-200 text-sm rounded-md text-gray-600 hover:bg-black hover:text-white"
              >
                <a href="#top">{tag}</a>
              </h5>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
