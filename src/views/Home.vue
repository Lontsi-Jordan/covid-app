<template>
  <div class="home">
    <GlobalCase/>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalCase from '@/components/GlobalCase.vue'

export default {
  name: 'Home',
  components: {
    GlobalCase
  }
}
</script>
