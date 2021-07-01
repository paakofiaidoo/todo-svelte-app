<script>
  export let collections, active;
  let isActive = false;
  
</script>

<nav class={`navbar ${isActive ? "isActive" : ""}`}>
  <button on:click={() => (isActive = !isActive)} class={`arrow `} />
  <p>Collections</p>
  {#each collections as { name, color }, i}
    <div class="menu">
      <span style={`background-color: ${color}`} />
      <li
        class={`menuItem`}
        on:click={() => {
          active = i;
        }}
      >
        {name}
      </li>
    </div>
  {/each}
</nav>

<style>
  .navbar {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    width: 10rem;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 250ms ease-in-out;
  }
  .navbar.isActive {
    width: 3rem;
  }
  .menuItem {
    height: 2rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 0.5rem;
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
  .navbar.isActive .menuItem,
  .navbar.isActive p {
    display: none;
  }

  .menuItem:hover {
    font-weight: bolder;
  }
  .menu {
    display: flex;
  }
  .arrow {
    height: 1rem;
    width: 1rem;
    border: 1px solid #000;
    border-left: 0px;
    border-bottom: 0px;
    transform: rotate(45deg);
    margin: 1rem;
    background-color: transparent;
    align-self: flex-end;
  }
  .navbar.isActive .arrow {
    transform: rotate(225deg);
  }
  span {
    height: 1rem;
    width: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    padding: auto;
    background-color: #ff3e00;
  }
</style>
