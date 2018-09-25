// redux
import { connect } from 'react-redux';

// component
import Component, { Props } from './Component';

// reducer type
import { Dispatch, RouterState, RouterType } from '../../actions';
import { ReduxState } from '../../reducers';

// action
import { push } from 'connected-react-router';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({});

const mapDispatchToProps = (dispatch: Dispatch<RouterType, RouterState>): Partial<Props> => {
  return {
    push: (to: string) => dispatch(push(to)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);