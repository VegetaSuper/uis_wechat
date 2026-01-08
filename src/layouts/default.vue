<script lang="ts" setup>
// import { getLastPage } from '@/utils'
// import { LOGIN_PAGE } from '@/router/config'

// const show = computed(() => {
//     let { route } = getLastPage()
//     route = '/' + route
//     return !([LOGIN_PAGE].includes(route))
// })
</script>

<template>
  <slot />
  <!-- <wd-watermark v-if="show" content="嘉盛石化" :opacity="0.3">
    </wd-watermark> -->
</template>
