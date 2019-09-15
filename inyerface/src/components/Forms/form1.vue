<template>

    <div class="form">
        <h1>Namn</h1>
        <div class="txtb">
            <input type="text" id="firstName"
                   @focus="focused('firstName')"
                   @blur="blurred('firstName')"
                   v-model="q.firstname"
                   :class="{focus :focusedClass === 'lastName'}">
            <span data-placeholder="Förnamn"></span>
        </div>
        <div class="txtb">
            <input type="text" id="lastName"
                   @focus="focused('lastName')"
                   @blur="blurred('lastName')"
                   v-model="q.lastname"
                   :class="{focus :focusedClass === 'firstName'}">
            <span data-placeholder="Efternamn"></span>
        </div>

        <div class="subb">
            <button class="btn btn--primary btn--solid" @click="clear">Rensa</button>
        </div>
        <div class="subb">
            <button class="btn btn--secondary" @click="next">Nästa</button>
        </div>

    </div>


</template>

<script>
    export default {
        name: "form1.vue",
        data() {
            return {
                focusedInput: '',
                q: {
                    firstname: '',
                    lastname: ''
                }
            }
        },
        methods: {
            focused: function (inp) {
                this.focusedInput = inp;
            },
            blurred: function (inp) {
                if (this.focusedInput === inp) {
                    this.focusedInput = '';
                }

            },
            next: function () {

                this.$router.push({name: 'two'});
            },
            clear: function () {
                this.q = {
                    firstname: '',
                    lastname: ''
                }
            }

        },
        computed: {
            focusedClass: function () {

                return this.focusedInput;

            }
        },

    }
</script>

<style scoped>

</style>