<template lang="pug">
  picture(v-if='src')
    source(
      :srcset='require(`@/assets/images/sp/${src}.${type}?webp`)',
      type='image/webp',
      :media='`(max-width: ${SP_WIDTH}px)`'
    )
    source(
      :srcset='require(`@/assets/images/sp/${src}.${type}`)',
      :alt='alt',
      :media='`(max-width: ${SP_WIDTH}px)`'
    )
    source(
      :srcset='require(`@/assets/images/pc/${src}.${type}?webp`)',
      type='image/webp'
    )
    img.image(
      :src='require(`@/assets/images/pc/${src}.${type}`)',
      :alt='alt',
      decoding='async'
    )
</template>

<script lang="ts">
import Vue from 'vue'
import { SP_WIDTH } from '~/assets/scripts/variables'

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
  data() {
    return {
      SP_WIDTH,
    }
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
  display: block;
}
</style>
