let qdf = (a:number, b:number, c:number) =>{
  let x = (-b + Math.sqrt( Math.pow(b, 2) - (4 * (a) * (c)) )) / (2 * a), 
  y = (-b - Math.sqrt( Math.pow(b, 2) - (4 * (a) * (c)) )) / (2 * a)
  return [x, y]; 
}
