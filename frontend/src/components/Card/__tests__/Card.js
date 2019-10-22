import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Card from '../';
import { showModal as showModalAction } from '../../../redux/common/common-actions';
import { setSelectedPhone as setSelectedPhoneAction } from '../../../redux/phones/phones-actions';

const mockStore = configureStore([]);

const phoneDetails = {
  imageFileName: 'IPhone_7.png',
  name: 'iPhone 7',
  price: 769,
};

describe('Card component test', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <Card phoneDetails={phoneDetails} />
      </Provider>
    );
  })

  it('should render with given phoneDetails prop', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(2);

    expect(store.dispatch).toHaveBeenCalledWith(
      showModalAction(),
    );
  });
});