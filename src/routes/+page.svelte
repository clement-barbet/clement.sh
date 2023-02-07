<script>
  export let data;

  const orderByDate = (posts) => {
    if (posts.length <= 1) return posts;

    return posts
      .sort((a, b) => a.post.date - b.post.date) // Will return an error if posts.length <= 1
      .reverse()
      .slice(0, 3);
  };
</script>

<div id="hero-banner" class=" bg-slate-50 flex justify-center">
  <div class="py-28">
    <h1 id="hero-banner-title" class="text-4xl  font-semibold text-center">
      I am Clément
    </h1>
    <div class="flex mt-5 space-x-24 items-center ">
      <div>
        <p class="max-w-[500px]">
          Hi, my name is Clément and I am a DevOps engineer from France. I have
          been working in the field for about a year, and have a strong
          background in cloud computing technologies like GCP, Terraform, and
          Kubernetes. As a DevOps engineer, I have a wealth of experience to
          share. Thank you for passing and I hope you'll find value in my blog
          posts.
        </p>
        <!-- <a href="/blog"
          ><button
            class="bg-black text-white py-4 px-8 mt-6 font-sans text-sm hover:shadow-md hover:font-extrabold"
            >SEE MY POSTS</button
          ></a
        > -->
      </div>

      <div class="flex ">
        <img alt="Avatar" src="/avatar.png" />
      </div>
    </div>
  </div>
</div>

<!-- <div class="flex justify-center py-12"> Icons
    <div class="w-[910px]">
        <h1 class="text-3xl font-semibold text-center">Current stack</h1>
        <div class="flex justify-around mt-5 py-2 items-center">
            <div class="w-[85px]"><img alt="GCP" class="transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer filter hover:brightness-125" src="GCP.png"></div>
            <div class="w-[85px]"><img alt="Kubernetes" class="transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer filter hover:brightness-125" src="Kubernetes.png"></div>
            <div class="w-[85px]"><img alt="Terraform" class="transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer filter hover:brightness-125" src="Terraform.png"></div>
            <div class="w-[85px]"><img alt="GoLang" class="transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer filter hover:brightness-125" src="golang.png"></div>
        </div>
    </div>
</div> -->

<div id="latest-blog-post" class="flex justify-center items-center">
  <div class="py-8">
    <h1 class="text-center text-3xl font-bold mb-16">My latests blog posts</h1>
    {#each orderByDate(data.summaries) as summary}
      <div id="card">
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
    <div class="flex justify-center mt-8">
      <a href="/blog">
        <button
          class="bg-gray-200 text-gray-600 py-4 px-8 mt-6 font-sans text-sm shadow-md hover:font-extrabolitems-center hover:bg-black hover:text-white rounded-lg"
          >SEE MORE POSTS</button
        >
      </a>
    </div>
  </div>
</div>
