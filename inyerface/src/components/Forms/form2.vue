<template>


    <div class="form">
        <h1>Adress</h1>

        <div class="txtb">
            <input type="text"
                   @focus="focus('addr1')"
                   @blur="focus('')"
                   :class="{'focus--right' : focusedClass === 'addr1'}"
            >
            <span data-placeholder="Adress 1"></span>
        </div>
        <div class="txtb">
            <input type="text"
                   @focus="focus('addr2')"
                   @blur="focus('')"
                   :class="{'focus--right' : focusedClass === 'addr2'}">
            <span data-placeholder="Adress 2"></span>
        </div>
    </div>


</template>

<script>
    export default {
        name: "form2",
        data() {
            return {
                focused: ''
            }
        },
        computed: {
            focusedClass: function () {
                return this.focused;
            }
        },
        methods: {
            focus: function (inp) {
                this.focused = inp;
            }
        }
    }
</script>

<style scoped>

</style>