const average = (e:number[]) => {
 let t = 0;
 for (let i = 0; i < e.length; i++) t += e[i];
 return t / e.length;
};
