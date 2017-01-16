let checkLength = function(A,B) {
    if(A.length === B.length){
        return true
    } else if(A.length < 1){
        throw "Null vectors";
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

    static minkowski(A,B, r) {
        if(r === Infinity){
            return this.supremum(A,B);
        }

        checkLength(A,B);

        let sum = 0;

        for(let i=0; i<A.length; i++){
            sum += Math.abs(Math.pow(A[i] - B[i], r));
        }
        return Math.pow(sum, 1/r);
    }

    // TODO - Implement mahalanobis and covariance
    // static mahalanobis(A,B){
    //     checkLength(A,B);
    //
    //     let length = A.length;
    //     let avgA = A.reduce(function(a,b){return a+b})/length;
    //     let avgB = B.reduce(function(a,b){return a+b})/length;
    //
    //     let covariance = [];
    //     for(let i=0; i<A.length; i++){
    //         let row  = [];
    //         for(let j=0; i<j; j++){
    //
    //         }
    //         for(let j=i+1; j<A.length; j++){
    //
    //         }
    //     }
    // }
    //
    // static covariance(A,B){
    //     checkLength(A,B);
    //
    //     let length = A.length;
    //     let avgA = A.reduce(function(a,b){return a+b})/length;
    //     let avgB = B.reduce(function(a,b){return a+b})/length;
    //
    //     let covariance = [];
    //     for(let i=0; i<A.length; i++){
    //         let row  = [];
    //         for(let j=0; i<j; j++){
    //
    //         }
    //         for(let j=i+1; j<A.length; j++){
    //
    //         }
    //     }
    // }

    static smc(A,B){
        checkLength(A,B);

        let sum = 0;

        for(let i=0; i<A.length; i++){
            if((A[i] === 1 && B[i] === 1) || (A[i] === 0 && B[i] === 0)){
                sum++;
            }
        }

        return sum/A.length;
    }

    static jc(A,B){
        checkLength(A,B);

        let nom = 0;
        let denom = 0;

        for(let i=0; i<A.length; i++){
            if((A[i] === 1 && B[i] === 1)){
                nom++;
                denom++;
            } else if(A[i] !== 0 || B[i] !== 0){
                denom++;
            }
        }

        return nom/denom;
    }


    static ejc(A,B){
        checkLength(A,B);

        let length = A.length;

        // TODO - check if the following is the correct definition of ||A||2
        let distA = A.reduce(function(a,b){return Math.pow(b,2)+a});
        let distB = B.reduce(function(a,b){return Math.pow(b,2)+a});

        let product = 0;

        for(let i=0; i<A.length; i++){
            product += A[i]*B[i];
        }

        return product / ( ( distA + distB ) - product );
    }

    // TODO - check if the following is the correct implementation of chi-square
    static chi(A,B){
        checkLength(A,B);

        let sum = 0;

        for(let i=0; i<A.length; i++){
            for(let j=0; j<A.length; j++){
                let o = 0.0;
                let e = 0.0;

                for(let k = 0; k<A.length; k++){
                    if(A[i] === A[k] && B[j] === B[k]){
                        o++;
                    } else if(A[i] === A[k] || B[j] === B[k]){
                        e++;
                    }
                }

                e = e/A.length;

                sum += Math.pow(o-e,2) / e;
            }
        }

        return sum;
    }

    static person(A,B){
        checkLength(A,B);

        let nom = 0;

        let avgA = A.reduce(function(a,b){return a+b})/A.length;
        let avgB = B.reduce(function(a,b){return a+b})/B.length;

        let stdA = Math.sqrt(A.map(function(a) {return Math.pow(a,2) - parseFloat(avgA)}).reduce(function(a,b){return a+b}));
        let stdB = Math.sqrt(B.map(function(a) {return Math.pow(a,2) - parseFloat(avgB)}).reduce(function(a,b){return a+b}));

        for(let i=0; i<A.length; i++){
            nom += (A[i] - avgA) * ( B[i] - avgB);
        }

        return nom / (stdA * stdB);
    }

}

module.exports = Disi;