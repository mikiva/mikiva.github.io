<template>
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-contaler">

                    <h1>Modal!!</h1>
                    <button @click="close">Stäng</button>
                </div>
            </div>
        </transition>
</template>

<script>
    export default {
        name: "Modal",
        methods: {
            close: function() {
                this.$emit('closeModal');
            }
        }
    }
</script>

<style scoped>

</style>