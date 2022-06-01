declare const optionalNumber: number | null;

const sign = (num: number): optionalNumber => {
  switch (num) {
    case num < 0:
      return -1;
    case num > 0:
      return 1;
    case num == 0: // absolute equal, meaning eval(num) === 0, or in other words "0" == false == 0
      return 0;
    default:
      return null;
  }
}
