let gcd = (x:number, y:number):number => y === 0? x: gcd(y, x % y);  
