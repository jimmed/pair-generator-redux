import shuffle from "lodash.shuffle";
import chunk from "lodash.chunk";
import initialStudents from "../students";

const initialState = {
  students: initialStudents,
  done: true,
  pairs: []
};

function pairsReducer(state = initialState, action) {
  switch (action.type) {
    case "GENERATE_PAIRS":
      const shuffledStudents = shuffle(state.students);
      const pairs = chunk(shuffledStudents, 2);
      return Object.assign({}, state, { done: false, pairs });

    case "DONE":
      return Object.assign({}, state, { done: true });

    default:
      return state;
  }
}

export default pairsReducer;
