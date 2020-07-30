import { combineReducers } from 'redux';
import MenuRedusers from './menu';
import UserProfileRedusers from './userProfile';
import HomeRedusers from './home';

const allReducers = combineReducers({
   menu: MenuRedusers,
   userProfile: UserProfileRedusers,
   home: HomeRedusers
})

export default allReducers