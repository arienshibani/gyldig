module.exports = {
    /**
     * Validates wether a given input is a valid Norwegian birth number.
     * 
     * @param {*} input - The fødselsnummer to validate. Could be a string or an integer. 
     * @returns {Boolean} - Returns true, if the input is a valid Norwegian birth number.
     */
    fodselsNr: (input) => {
        // Assign weights to each digit of the id #
        var weightsChecksumOne = [3, 7, 6, 1, 8, 9, 4, 5, 2];
        var weightsChecksumTwo = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

        const checkSumFodselsNr = (fodselsnummer, factors) => {
            let sum = 0;

            // Each digit in the id # is multiplied by its weight. 
            [...fodselsnummer].forEach((digit, index) => { (factors.length > index ? sum += parseInt(digit, 10) * factors[index] : null) })

            // The results of the multiplication are added together, and returned.
            return sum
        };

        const sanitizedInput = input.toString().replace(/[,.\s]/g, '');

        if (!sanitizedInput || sanitizedInput.length !== 11) { return false; }

        // The remainder is subtracted from the modulus number 11 giving the check digit.
        const checkSumOne = 11 - (checkSumFodselsNr(sanitizedInput, weightsChecksumOne) % 11);
        const checkSumTwo = 11 - (checkSumFodselsNr(sanitizedInput, weightsChecksumTwo) % 11);

        if (checkSumOne === 11) {
            checkSumOne = 0;
        }


        if (checkSumTwo === 11) {
            checkSumTwo = 0;
        }

        return checkSumOne === parseInt(sanitizedInput.charAt(9), 10) && checkSumTwo === parseInt(sanitizedInput.charAt(10), 10);
    },

    /**
     * Validates wether a given input is a valid Norwegian organization number.
     * 
     * @param {*} input - The organization number to validate. Could be a string or an integer. 
     * @returns {Boolean} - Returns true, if the input is a valid Norwegian organization number.
     */
    orgNr: (input) => {
        /**
         * Calculates the checkDigit of an orgNr
         * 
         * @param {Integer} input  
         * @returns {Integer} - The checkDigit of a given orgNr
         */
        const checkSumOrgNo = (input) => {
            let weight = 2;
            let sum = 0;

            for (let i = input.length - 2; i >= 0; --i) {
                // Each digit, of the orgNr (from right to left) gets multiplied by it's weight.
                sum += input.charAt(i) * weight;

                // For each sequential digit, we increment the weight by one.
                weight += 1;
                // And we reset the weight back to 2 once we hit 7.
                if (weight > 7) { weight = 2; }
            }

            // Then we divide the product by 11.
            const result = 11 - (sum % 11); // The remainder returned is the check digit.   
            return result === 11 ? 0 : result;
        };

        const sanitizedInput = input.toString().replace(/[,.\s]/g, '');
        if (!sanitizedInput || sanitizedInput.length !== 9) { return false; }

        return parseInt(sanitizedInput.charAt(sanitizedInput.length - 1), 10) === checkSumOrgNo(sanitizedInput)
    },
}
