<script>
  export let author;
  export let author_job;
  export let slug;
  export let title;
  export let description;
  export let formated_date;
  export let tags;
</script>

<div id="card">
  <div id="author" class="flex items-center space-x-2">
    <img
      class=" w-8 rounded-md"
      src="avatar.png"
      alt="Avatar de Clément Barbet"
    />
    <h4 class=" text-xs">
      {author}, <strong>{author_job}</strong>
    </h4>
  </div>
  <div class="flex  items-center  space-x-6">
    <div id="left-part" class="w-[500px]">
      <div id="post-title" class="text-xl font-bold mt-2">
        <h1>
          <a href="blog/{slug}">{title}</a>
        </h1>
      </div>
      <div id="post-description" class=" text-base text-gray-500">
        <h2>{description}</h2>
      </div>
    </div>
    <div class="" id="post-image">
      <img
        class=" rounded-md"
        src="blog_thumbnail/{slug}.png"
        alt="Miniature"
      />
    </div>
  </div>
  <div
    id="post-date"
    class="flex items-center text-sm  text-slate-700 space-x-2"
  >
    <h5 class="">{formated_date} ·</h5>
    {#each tags as tag}
      <h5
        class="  px-1 bg-gray-200 text-sm rounded-md text-gray-600 hover:bg-black hover:text-white"
      >
        <a href="#top">{tag}</a>
      </h5>
    {/each}
  </div>
</div>
