const START_TICK_LENGTH = 1;
const MAX_TICK_LENGTH = 500;
const DECELERATION_RATE = 1.1;

export const generatePairs = () => ({ type: "GENERATE_PAIRS" });

export const done = () => ({ type: "DONE" });

export const generatePairsAnimation = () => dispatch =>
  tick(START_TICK_LENGTH, dispatch);

function tick(length, dispatch) {
  if (length < MAX_TICK_LENGTH) {
    setTimeout(() => {
      dispatch(generatePairs());
      tick(length * DECELERATION_RATE, dispatch);
    }, length);
  } else {
    dispatch(done());
  }
}
