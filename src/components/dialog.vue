Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ door }}來客+1 ( {{ counter }} )</button>',
    props: ['door'],
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        /* 來客+1 */
        increment: function () {
            this.counter += 1
            /* 通知主任，多了一人來客 */
            this.$emit('increment')
        }
    },
})