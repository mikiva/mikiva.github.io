<template>
    <div class="game view">

        <modal v-if="show" @closeModal="closeModal"/>




        <cookie-warning v-if="cookieBanner" @hideBanner="hideBanner"/>

        <router-view/>

        <!--
        <button type="button" @click="showModal">Click modal</button>
        <div class="view__content">
            <div class="view__row">
                <logo-stuff/>
            </div>
            <div class="view__row">
                <p class="start__paragraph">VAR ÄR LISTAN??</p>
            </div>
            <div class="view__row">
                <router-view/>
            </div>

        </div>
        -->

    </div>

</template>

<script>
    import CookieWarning from "@/components/CookieWarning";
    import LogoStuff from "../components/LogoStuff";
    import Name from "../components/Forms/Name";
    import Modal from "../components/Modal";

    export default {
        name: "Game",
        components: {Modal, Name, LogoStuff, CookieWarning},
        data() {
            return {
                cookieBanner: false,
                waitForCookieBanner: 1500,
                show : false
            }
        },
        mounted() {
            if (!this.cookieBanner) {
                this.showBanner();
            }
            this.show = false;
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
            },
            showModal: function()
            {
                this.show = true;
            },
            closeModal: function() {
                this.show = false;
            }

        }
    }
</script>

<style scoped>

</style>