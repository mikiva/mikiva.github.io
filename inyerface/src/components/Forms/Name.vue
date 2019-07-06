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
                        <div class="align align--fluid">
                            <div class="align__cell">
                                <div class="align align--fluid">
                                    <div class="align__cell">
                                        <select class="name__dropdown" v-model="firstnameSelected">
                                            <option v-for="letter in lettersInAlphabet">{{letter}}</option>
                                        </select>
                                    </div>
                                    <div class="align__cell">
                                        <button class="button button--right button--transparent" type="button"
                                                @click="addFirstnameLetter"></button>
                                    </div>
                                </div>
                            </div>
                            <div class="align__cell">
                                <input class="input input--gray" disabled placeholder="Förnamn" type="text"
                                       v-model="q.firstname">
                            </div>

                        </div>
                    </div>
                    <div class="form__row">
                        <div class="align align--fluid surname">
                            <div class="align__cell" v-for="(part, index) in q.surnameStart">
                                <select class="name__dropdown align__cell" v-model="q.surnameStart[index]">
                                    <option v-for="letter in lettersInAlphabet">{{letter}}
                                    </option>
                                </select>
                            </div>
                            <input class="align__cell name__end input input--gray" type="text"
                                   v-model="q.surnameEnd"/>
                        </div>

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
                                <button class="button button--transparent" type="button" @click="nextPage">Nästa</button>
                            </div>
                            <div class="align__cell">
                                <button class="button" type="button"  @click="clearAll">Börja om</button>
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
    export default {
        name: "Name",
        data() {
            return {
                firstnameSelected: 'A',
                q: {
                    firstname: "",
                    surnameStart: ['J', 'A', 'N'],
                    surnameEnd: "SSON"
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
            nextPage: function()
            {
                this.$router.push({name: "finished"});
            }
        }
    }
</script>

<style scoped>

</style>