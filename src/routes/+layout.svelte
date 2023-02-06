<script>
  import "/src/app.css";
</script>

<div class="flex justify-center">
  <nav class="flex justify-between items-center bg-white py-5 w-[910px]">
    <div class=""><a href="/"><img class="w-[200px]" alt="Logo clement.sh" src="/logo.png"></a></div>
    <div class="flex space-x-32 items-center">
      <h6>My projects</h6>
      <a href="/blog"><button class="bg-black text-white py-4 px-8 text-sm hover:font-extrabold">SEE MY POSTS</button></a>
    </div>
  </nav>
</div>

<slot />

