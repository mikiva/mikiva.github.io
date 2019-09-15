<template>
    <div class="start view view--center">
        <div class="view__content">

            <div class="view__row">

                <logo-stuff/>
                <p class="start__paragraph">Vill du köpa märken?</p>
            </div>

            <div class="view__row">
                <button class="start__button" type="button">NO</button>
            </div>

            <div class="view__row">
                <p>
                    Please
                    <u>click</u>
                    <router-link class="start__link" :to="{name: 'one'}"> HERE</router-link>
                    to GO to the
                    <span class="start__highlight">next page</span>
                </p>
            </div>
        </div>

    </div>
</template>

<script>

    import LogoStuff from "../components/LogoStuff";

    export default {
        name: 'home',
        components: {LogoStuff}
    }
</script>
<style>


</style>