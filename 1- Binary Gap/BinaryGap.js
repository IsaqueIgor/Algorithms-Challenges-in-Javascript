function solution( N ) {
    let str = N.toString( 2 ), //Base 2, Convert an integer into binary representation
        zeroCount = 0,
        result = 0;
    //console.log(str);
    for ( let digit of str ) {
        if ( digit === '0' ) {
            zeroCount += 1;
        } else /* if ( digit === '1' ) */ {
            result = Math.max( result, zeroCount );
            zeroCount = 0;
        }
    }
 
    return result;
}

console.log(solution(545));

if(3==3){
    console.log(666);
}