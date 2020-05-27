import { UserActionType } from './user.type';

const setCurrentUser = user => ({
type: UserActionType.SET_CURRENT_USER,
payload: user
});

export default setCurrentUser;