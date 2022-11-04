import {EventArg} from '@react-navigation/native';
import {ROUTE_NAME} from './Constant';

export const onRouteFocus = ({target}: EventArg<'focus', any, unknown>) => {
  const focusRouteName = target?.split('-')[0];
  switch (focusRouteName) {
    case ROUTE_NAME.HOME:
      break;

    default:
      break;
  }
};
