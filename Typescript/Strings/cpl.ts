let cpl = (s:string) => s == ''? null : (s === s.split('').reverse().join(''))? true : false; 
