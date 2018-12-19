<template>
  <div class="slot-machine">
    <div class="slot-machine__btn-group">
      <button class="btn-large btn-success" @click="go">Go~</button>
      <button class="btn-large btn-danger" @click="stop">Stop!</button>
    </div>

    <div class="slot-machine__text child-borders">
      <div v-if="type === 'green'" class="slot-machine__text-inner border-dashed">
        Whose :
      </div>

      <div v-else class="slot-machine__text-inner border-dashed">
        is the most . . .
      </div>
    </div>

    <div class="row flex-center">
      <div class="md-12 col">
        <div class="item" v-if="currentItem">
          <div>
            <img :src="image" alt="item" class="no-border">
          </div>
          <!-- <div class="item__number">{{ currentItem.body }}</div> -->
        </div>
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
  computed: {
    image () {
      return require(`@/assets/images/item_${this.type}_${this.currentNumber}.png`)
    }
  },
  data () {
    return {
      continue: true,
      currentNumber: 1,
      currentItem: {}
    }
  },
  methods: {
    go () {
      this.continue = true

      setTimeout(() => {
        if (this.continue) {
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
      return this.continue = false
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
.slot-machine
  margin-top: 50px
  &__btn-group
    text-align: center
  &__text
    color: white
    margin-top: 50px
    font-size: 2rem
  &__text-inner
    display: inline-block
    padding: 10px 20px
    border-color: white

.item
  margin-top: 30px
  &__number
    display: inline-block
    font-size: 15rem

button + button
  margin-left: 20px

</style>
