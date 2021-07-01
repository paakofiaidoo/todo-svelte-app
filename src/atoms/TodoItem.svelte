<script>
  export let title, isComplete, i;
</script>

<div class="listItem">
  <input type="checkbox" id={i} name={i} bind:value={isComplete} />
  <label for={i}> {title}</label>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    height: 2rem;
    background-color: #999;
    margin: 0.5rem;
    width: 95%;
    padding: 0.2rem;
    border-radius: 0.2rem;
  }
</style>
