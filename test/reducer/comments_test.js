import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { ADD_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handle action with unknow type', ()=> {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('ADD_COMMENT', () => {
    const action = {type: ADD_COMMENT, payload: 'new comment' };
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
