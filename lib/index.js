/***
 * DiSi
 *
 * Created by:
 *      Christian Dallago
 *      code@dallago.us
 *
 * Created on:
 *      18 Jan 2017
 */



/**
 * Check that two vectors have equal length.
 *
 * @param A - A vector such as [1,2,3]
 * @param B - A vector such as [1,2,3]
 * @returns {boolean}
 */
let checkLength = function(A,B) {
    if(A.length === B.length){
        return true
    } else if(A.length < 1){
        throw "Null vectors";
    } else {
        throw "Vectors of different lengths";
    }
};

let Math = require('mathjs');

/**
 * Class Disi. This class is exported and all of its static functions can be used to calculate distances, similaruty and much more.
 */
class Disi {

    /**
     * Euclidian distance between two vectors, a special case of Minkowski distance.
     *
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @returns {number}
     */
    static euclidian(A,B) {
        checkLength(A,B);

        let sum = 0.0;

        for(let i=0; i<A.length; i++){
            sum += Math.pow(A[i] - B[i], 2);
        }
        return Math.sqrt(sum);
    }

    /**
     * Manhattan distance between two vectors, a special case of Minkowski distance.
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @returns {number}
     */
    static manhattan(A,B) {
        checkLength(A,B);

        let sum = 0.0;

        for(let i=0; i<A.length; i++){
            sum += Math.abs(A[i] - B[i]);
        }
        return sum;
    }

    /**
     * Supremum distance between two vectors, a special case of Minkowski distance.
     *
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @returns {number}
     */
    static supremum(A,B) {
        checkLength(A,B);

        let result = 0.0;

        for(let i=0; i<A.length; i++){
            let current = Math.abs(A[i] - B[i]);
            result = current > result ? current : result;
        }
        return result;
    }

    /**
     * Naïve implementation of the data-independent Minkowski distance.
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @param r - The r degree
     * @returns {number}
     */
    static minkowski(A,B,r) {
        if(r === Infinity){
            return this.supremum(A,B);
        }

        checkLength(A,B);

        let sum = 0.0;

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

    /**
     * Simple matching coefficients implementation
     * @param A - A binary vector of the form [1, 1, 0,..]
     * @param B - A binary vector of the form [0, 1, 0,..]
     * @returns {number}
     */
    static smc(A,B){
        checkLength(A,B);

        let sum = 0.0;

        for(let i=0; i<A.length; i++){
            if((A[i] === 1 && B[i] === 1) || (A[i] === 0 && B[i] === 0)){
                sum++;
            }
        }

        return sum / A.length;
    }

    /**
     * Jaccard coefficient
     *
     * @param A - A binary vector of the form [0, 1, 0,..]
     * @param B - A binary vector of the form [1, 1, 0,..]
     * @returns {number}
     */
    static jc(A,B){
        checkLength(A,B);

        let nom = 0.0;
        let denom = 0.0;

        for(let i=0; i<A.length; i++){
            if((A[i] === 1 && B[i] === 1)){
                nom++;
                denom++;
            } else if(A[i] !== 0 || B[i] !== 0){
                denom++;
            }
        }

        return nom / denom;
    }

    // TODO - is EJC == Tanimoto?
    /**
     * Extended Jaccard coefficient
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @returns {number}
     */
    static ejc(A,B){
        return this.tanimoto(A,B);
    }

    /**
     * Generalized Jaccard coefficient ( https://en.wikipedia.org/wiki/Jaccard_index#Generalized_Jaccard_similarity_and_distance )
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @returns {number}
     */
    static gjc(A,B){
        checkLength(A,B);

        let nom = 0.0;
        let denom = 0.0;

        for(let i=0; i<A.length; i++){
            if(A[i] > B[i]){
                nom += B[i];
                denom += A[i];
            } else {
                nom += A[i];
                denom += B[i];
            }
        }
        return nom / denom;
    }

    /**
     * Dice coefficient
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @returns {number}
     */
    static dice(A,B) {
        checkLength(A,B);

        let dotProduct = Math.dot(A,B);
        let AA = Math.dot(A,A);
        let BB = Math.dot(B,B);

        return (2* dotProduct) / (AA + BB);
    }

    /**
     * Tanimoto coefficient ( Same as Extended Jaccard coefficient)
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @returns {number}
     */
    static tanimoto(A,B) {
        checkLength(A,B);

        let dotProduct = Math.dot(A,B);
        let AA = Math.dot(A,A);
        let BB = Math.dot(B,B);

        return dotProduct / ((AA + BB) - dotProduct);
    }

    /**
     * Cosine similarity
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @returns {number}
     */
    static cosine(A,B){
        checkLength(A,B);

        let dotProduct = Math.dot(A,B);
        let AAsq = Math.sqrt(Math.dot(A,A));
        let BBsq = Math.sqrt(Math.dot(B,B));

        return dotProduct / (AAsq * BBsq);
    }

    /**
     * Person correlation coefficient
     *
     * @param A - A vector of the form [1,2.3,4]
     * @param B - A vector of the form [1,2.3,4]
     * @returns {number}
     */
    // TODO - should be in [-1,1] boundary but occasionally spawns high numbers --> Why?
    static person(A,B){
        checkLength(A,B);

        let nom = 0.0;

        let avgA = Math.mean(A);
        let avgB = Math.mean(B);

        let stdA = Math.std(A);
        let stdB = Math.std(B);

        for(let i=0; i<A.length; i++){
            nom += (A[i] - avgA) * (B[i] - avgB);
        }

        return nom / (stdA * stdB);
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
}

module.exports = Disi;