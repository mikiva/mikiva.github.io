<template>
    <div class="form">
        <div class="form__container">
            <div class="form--name">
                <form>
                    <div class="form__row">
                        <p>Den kommer. Först måste jag få lite information som ska skrivas på listan.</p>
                    </div>
                    <div class="form__row">
                        <p>Var vänlig fyll i ett namn</p>
                    </div>
                    <div class="form__row">
                        <name-input/>

                        <!--
                        <div class="align align--fluid">
                            <div class="align__cell">
                                <label for="efternamn">Efternamn</label>
                                <input class="input input--gray" placeholder="Efternamn" id="efternamn"
                                       type="text"
                                       v-model="q.lastname">
                            </div>
                            <div class="align__cell">
                                <div class="align align--fluid">
                                    <div class="align__cell txtb">
                                        <label for="fornamn">Förnamn</label>
                                        <input class="input input--gray" id="fornamn" placeholder="Förnamn"
                                               type="text"
                                               v-model="q.firstname">
                                    </div>
                                </div>
                            </div>
                        </div>
                        -->
                    </div>
                    <div class="form__row">


                    </div>

                    <div class="form__row">
                        <div class="align align--fluid">
                            <div class="align__cell">
                                <div class="godkann-check">
                                    <span class="checkbox">

                                        <input class="checking" type="checkbox" id="checking" v-model="checked">
                                        <label for="checking"><span class="checkbox__box">
                                        <span class="icon icon-check " :class="{'checkbox__check' : isChecked}">
                                        </span>
                                    </span></label>
                                    </span>
                                    <div class="checkbox__label">
                                        Jag godkänner härmed inte att jag inte godkänt det som står i
                                        <a>ToS</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form__row">
                        <div class=" align align--fluid align--even">
                            <div class="align__cell">
                                <button class="button button--transparent" type="button" @click="nextPage">Nästa
                                </button>
                            </div>
                            <div class="align__cell">
                                <button class="button" type="button" @click="clearAll">Börja om</button>
                            </div>
                            <div class="align__cell">
                                <button class="button button--transparent" type="button" @click="clearAll">Återställ
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import NameInput from "./NameInput";
    export default {
        name: "Name",
        components: {NameInput},
        data() {
            return {
                firstnameSelected: 'A',
                q: {
                    firstname: "",
                    lastname: "",
                },
                lettersInAlphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'],
                checked: true
            }
        },
        computed: {
            surname: function () {
                let prefix = this.q.surnameStart.join(',').replace(/,/g, '');
                return prefix + this.q.surnameEnd;
            },
            isChecked: function () {
                return this.checked;
            }
        },
        methods: {

            addSurnameLetter: function () {
                this.q.surname.push('A');
            },
            addFirstnameLetter: function () {

                this.q.firstname += this.firstnameSelected;
            },
            clearAll: function () {
                this.clearFirstName();
                this.clearLastName();
            },
            clearFirstName: function () {
                this.q.firstname = "";
            },
            clearLastName: function () {
                this.q.surnameStart = ['J', 'A', 'N'];
                this.q.surnameEnd = 'SSON';
            },
            check: function () {
                console.log("check");
                this.checked = !this.checked;

            },
            nextPage: function () {
                this.$router.push({name: "two"});
            }
        }
    }
</script>

<style scoped>

</style>