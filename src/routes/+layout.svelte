<script>
  import "/src/app.css";
</script>

<div id="navbar" class="flex justify-center">
  <nav class="flex justify-between items-center bg-white py-5 w-[910px]">
    <div class="">
      <a href="/"
        ><img class="w-[200px]" alt="Logo clement.sh" src="/logo.png" /></a
      >
    </div>
    <div class="flex space-x-32 items-center">
      <a href="/blog"
        ><button
          class="bg-black text-white py-4 px-8 text-sm hover:font-extrabold"
          >SEE MY POSTS</button
        ></a
      >
    </div>
  </nav>
</div>

<slot />

<div
  id="foooter"
  class="flex justify-center border-t-2 border-t-gray-100 pt-12 "
>
  <div class="w-[910px] text-sm">
    <div
      class="flex justify-between pb-8 border-b border-t-gray-100 mb-12 items-center"
    >
      <p><a href="##">Donate</a></p>
      <div id="links" class="flex space-x-2">
        <a href="https://www.linkedin.com/in/cl%C3%A9ment-barbet/"
          ><img
            class="w-6"
            alt="Linkedin icon"
            src="icons/linkedin-icon.png"
          /></a
        >
        <a href="##"
          ><img
            class="w-6"
            alt="Twitter icon"
            src="icons/twitter-icon.svg"
          /></a
        >
      </div>
    </div>
    <div class="flex justify-between pb-4">
      <p>© 2023 Clément Barbet. All rights reserved</p>
      <div id="links" class="flex space-x-4">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
    </div>

    <br />
  </div>
</div>
