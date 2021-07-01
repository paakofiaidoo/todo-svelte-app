<script>
  import Collection from "./components/Collection.svelte";
  import SideMenu from "./components/SideMenu.svelte";

  export let collections;
</script>

<div class="content">
  <SideMenu {collections} />
  <main>
    <h1>My ToDO List</h1>
    {#each collections as collection}
      <Collection {...collection} />
    {/each}
  </main>
</div>

<style>
  .content {
    display: flex;
  }
  main {
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin: 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
