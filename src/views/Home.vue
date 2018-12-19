<template>
  <div class="challenge">
    <div class="row challenge__row">
      <div class="md-6">
        <SlotMachine :type="'green'" :items="items" />
      </div>

      <div class="md-6">
        <SlotMachine :type="'red'" :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import SlotMachine from '@/components/SlotMachine.vue'

export default {
  name: 'home',
  components: {
    SlotMachine
  },
  // computed: {
  // },
  data () {
    return {
      img () {
        return require('@/assets/images/background_red.jpg')
      },

      items: [
        { id: 1, body: '1' },
        { id: 2, body: '2' },
        { id: 3, body: '3' },
        { id: 4, body: '4' },
        { id: 5, body: '5' },
        { id: 6, body: '6' },
        { id: 7, body: '7' },
        { id: 8, body: '8' },
        { id: 9, body: '9' }
      ]
    }
  }
}
</script>

<style lang="sass">
#app
  text-align: center
.challenge
  &__row
    margin-bottom: 0
</style>
