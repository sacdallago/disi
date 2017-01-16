let checkLength = function(A,B) {
    if(A.length === B.length){
        return true
    } else {
        throw "Vectors of different lengths";
    }
}


class Disi {

    static euclidian(A,B) {
        checkLength(A,B);

        let sum = 0;

        for(let i=0; i<A.length; i++){
            sum += Math.pow(A[i] - B[i], 2);
        }
        return Math.sqrt(sum);
    }

    static manhattan(A,B) {
        checkLength(A,B);

        let sum = 0;

        for(let i=0; i<A.length; i++){
            sum += Math.abs(A[i] - B[i]);
        }
        return sum;
    }

    static supremum(A,B) {
        checkLength(A,B);

        let result = 0;

        for(let i=0; i<A.length; i++){
            let current = Math.abs(A[i] - B[i]);
            result = current > result ? current : result;
        }
        return result;
    }

    static mikowski(A,B, r) {
        checkLength(A,B);

        let sum = 0;

        for(let i=0; i<A.length; i++){
            sum += Math.abs(Math.pow(A[i] - B[i], r));
        }
        return Math.pow(sum, 1/r);
    }

    static chi(A,B){
        checkLength(A,B);


    }

}

module.exports = Disi;