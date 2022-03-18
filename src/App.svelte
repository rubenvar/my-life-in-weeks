<script lang="ts">
  // TODO lower font-size as there are more yearsToLive so the boxes don't go out of ViewPort...
  import GitHubCorner from "./GitHubCorner.svelte";
  import Life from "./Life.svelte";
  import Menu from "./Menu.svelte";
  import MenuToggler from "./MenuToggler.svelte";
  import { yearsToLive } from "./stores/years";
  import { dateString } from "./stores/date";

  // TODO improve these (limits for years input):
  $: if ($yearsToLive < 1) $yearsToLive = 1;
  $: if ($yearsToLive > 100) $yearsToLive = 100;

  $: dateOfBirth = new Date($dateString);
</script>

<MenuToggler />
<Menu />
<Life {dateOfBirth} />
<GitHubCorner />
