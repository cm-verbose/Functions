let lcm = (x:number, y:number):any => Math.abs(x * y)/(y === 0? x: gcd(y, x % y)); 
