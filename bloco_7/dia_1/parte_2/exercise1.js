const fatorial = x => ((x > 0) ? x*fatorial(x-1) : 1 );
console.log(fatorial(5));