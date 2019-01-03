<template>
  <div class="slot-machine background" :class="`background__${type}`">
    <div class="slot-machine__btn-group">
      <button class="btn-large btn-success" @click="go" v-if="!rolling">Go~</button>

      <button class="btn-large btn-danger" @click="stop" v-if="rolling">Stop!</button>
    </div>

    <div class="child-borders slot-machine__text">
      <div class="border-dashed slot-machine__text-span">
        {{ (type === 'green') ? 'Whose :' : 'is the most . . . (est)' }}
      </div>
    </div>

    <div class="row flex-center slot-machine__image">
      <div class="md-12 col" v-for="(item, index) in items" :key="index" v-show="item.id === currentNumber">
        <img :src="getImage(item.body)" alt="" class="no-border">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotMachine',
  props: {
    type: String,
    items: Array
  },
  data () {
    return {
      rolling: false,
      currentNumber: 1,
      currentItem: {}
    }
  },
  methods: {
    getImage (number) {
      return require(`@/assets/images/item_${this.type}_${number}.png`)
    },
    go () {
      this.rolling = true

      setTimeout(() => {
        if (this.rolling) {
          let number = this.countNumber()

          this.getItem(number)

          if (number === this.items.length) {
            this.resetNumber()
          }

          this.go()
        }
      }, 10);
    },
    stop () {
      return this.rolling = false
    },
    countNumber () {
      return this.currentNumber++
    },
    resetNumber () {
      return this.currentNumber = 1
    },
    getItem (number) {
      let item = this.items.find(element => {
        return element.id === number
      })

      return this.currentItem = item
    }
  },
  mounted () {
    this.getItem(1)
  }
}
</script>

<style lang="sass">
.background
  height: 100vh
  &__green
    background-color: green
  &__red
    background-color: red

.slot-machine
  padding-top: 50px
  &__btn-group
    text-align: center
  &__text
    color: white
    margin-top: 50px
    font-size: 2rem
  &__text-span
    display: inline-block
    padding: 10px 20px
    border-color: white !important
  &__image
    margin-bottom: 0

.item
  margin-top: 30px
  &__number
    display: inline-block
    font-size: 15rem

button + button
  margin-left: 20px
</style>
