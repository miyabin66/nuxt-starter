<template lang="pug">
  picture(v-if='src')
    source(
      :srcset='require(`@/assets/images/sp/${src}.${type}?webp`)',
      type='image/webp'
    )
    img.image(
      :src='require(`@/assets/images/sp/${src}.${type}`)',
      :alt='alt',
      decoding='async'
    )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'png',
    },
  },
})
</script>

<style lang="scss" scoped>
picture {
  display: inline-block;
}
.image {
  width: 100%;
  height: 100%;
  @include pc-layout {
    display: none;
  }
  @include sp-layout {
    display: block;
  }
}
</style>
