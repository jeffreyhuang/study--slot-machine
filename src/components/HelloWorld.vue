<template>
  <div>
    <h2>
      <span class="badge secondary">SC</span> Random Test
    </h2>

    <button class="btn-large btn-success" @click="go">Go~</button>
    <button class="btn-large btn-danger" @click="stop">Stop!</button>

    <div class="item" v-if="currentItem">
      <div class="item__number">{{ currentItem.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      continue: true,
      currentNumber: 1,
      currentItem: {},
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
body
  // background-color: red
h1
  // color: #ddd
#app
  text-align: center

.item
  margin-top: 30px
  &__number
    display: inline-block
    font-size: 15rem
    // color: white

button + button
  margin-left: 20px

</style>
