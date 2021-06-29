<script>
  export let title, isComplete, i;
</script>

<div>
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
    justify-content: center;
  }
</style>
