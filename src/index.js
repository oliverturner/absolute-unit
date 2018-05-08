// The absolute cheek of it!
// Yeah... more useful things coming
const absolute = x => Math.abs(x);

// A rounding function that actually handles floating points properly 🙄
export const round = (number, precision = 0) => {
  const shift = (number, precision) => {
    const [a, b] = ("" + number).split("e");
    const exp = b ? +b + precision : precision;

    return +`${a}e${exp}`;
  };

  return shift(Math.round(shift(number, +precision)), -precision);
};

export default absolute;
