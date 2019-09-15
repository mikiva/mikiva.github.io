

export default {
    methods: {
        focused: function (inp) {
            console.log("inp", inp + '  ' + this.focusedInput);
            console.log(this.focusedInput);

            this.focusedInput = inp;

            let docSelection = inp;

            /*
            switch (inp) {
                case 'firstName':
                    docSelection = 'lastName';
                    break;
                case 'lastName':
                    docSelection = 'firstName';
                    break;
            }

             */


            if (docSelection !== '') {
                console.log('focus', docSelection);
                this.$refs[docSelection].focus();
                //document.getElementById(docSelection).focus();
            }
        },
        blurred: function (inp) {
            if (this.focusedInput === inp) {
                this.focusedInput = '';
            }

        },
    }
}