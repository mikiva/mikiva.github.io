<template>
    <div class="game view">

        <cookie-warning v-if="cookieBanner" @hideBanner="hideBanner"/>
        <div class="view__content">
            <div class="view__row">
                <logo-stuff/>
            </div>
            <div class="view__row">
                <p class="start__paragraph">VAR ÄR LISTAN??</p>
            </div>
            <div class="view__row">
                <name/>
            </div>

        </div>
    </div>

</template>

<script>
    import CookieWarning from "@/components/CookieWarning";
    import LogoStuff from "../components/LogoStuff";
    import Name from "../components/Forms/Name";

    export default {
        name: "Game",
        components: {Name, LogoStuff, CookieWarning},
        data() {
            return {
                cookieBanner: false,
                waitForCookieBanner: 1500
            }
        },
        mounted() {
            if (!this.cookieBanner) {
                this.showBanner();
            }
        },
        methods: {
            showBanner: function () {
                console.log("show");
                const self = this;
                setTimeout(function () {
                    self.cookieBanner = true;
                }, self.waitForCookieBanner);
            },
            hideBanner: function () {
                this.cookieBanner = false;
            }

        }
    }
</script>

<style scoped>

</style>