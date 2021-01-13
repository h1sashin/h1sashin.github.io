import { addNotification, removeNotification } from 'actions';
import store from 'store';
import { v4 as uuidv4 } from 'uuid';

const display = (title, message) => {
    const id = uuidv4();
    store.dispatch(addNotification(title, message, id));
    setTimeout(() => {
        store.dispatch(removeNotification(id));
    }, 10000);
}

export { display };
