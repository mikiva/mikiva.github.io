<template>
    <div class="cookies">
        <div class="align align--fluid">

            <div class="align__cell">
                <p class="cookies__message">Den här sidan använder kakor och glass. Har du något problem med det?</p>
            </div>
            <div class="align__cell">
                <div class="align u-right">
                    <div class="align__cell">
                        <button class="button button--cookie button--transparent" @click="hideBanner">Egentligen inte</button>
                    </div>
                    <div class="align__cell">
                        <button class="button button--cookie button--solid button--white">JA</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "CookieWarning",
        methods: {
            hideBanner: function()
            {
               this.$emit('hideBanner');
            }
        }
    }
</script>

<style scoped>

</style>