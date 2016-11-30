import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('render comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});
