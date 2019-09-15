<template>


    <div class="txtb">
        <input type="text" :class="isFocused">
        <span :placeholder="'Förnamnss'"></span>
    </div>


</template>

<script>
    export default {
        name: "NameInput",
        data() {
            return {
                doc: document.querySelector(".txtb input")
            }
        },
        computed: {
            isFocused: function () {

                let foc = false;

                if (this.doc === null) {
                    foc = false;
                } else {
                    console.log(this.doc);
                    foc = (this.doc === document.activeElement);

                }

                return {
                    focus: foc
                }


            }

        },
        watch: {
            document: function(){

                this.isFocused;
            }
        }

    }
</script>

<style scoped>

</style>