import { openApp } from 'actions';
import store from 'store';

// eslint-disable-next-line no-shadow
export const applyCommand = (action) => {
    if(action){
        const command = action.split(' ');
        switch(command[0]){
            case 'help':
                return (
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        list of available commands: <br/>
                        <div style={{display: 'flex', marginBottom: '8px'}}>
                            <div style={{width: '64px'}}>
                                help
                            </div> 
                            Displays list of available commands
                        </div>
                        <div style={{display: 'flex', marginBottom: '8px'}}>
                            <div style={{width: '64px'}}>
                                clear
                            </div> 
                            Clears the console logs
                        </div>
                        <div style={{display: 'flex', marginBottom: '8px'}}>
                            <div style={{width: '64px'}}>
                                run
                            </div> 
                            Opens/closes the app passed in second parameter example: `run files`<br/>available parameters: -v
                        </div>
                        <div style={{display: 'flex', marginBottom: '8px'}}>
                            <div style={{width: '64px'}}>
                                style
                            </div> 
                            Changes the style of this website, try typing `style help` to display possible changes
                        </div>
                    </div>
                );
            case 'clear':
                return null;
            case 'run':
                switch(command[1]){
                    case 'files':
                        if(command[2]){
                            switch(command[2]){
                                case '-v':
                                    return store.getState()[command[1].toString()].version;
                                default:
                                    return `parameter not recognized`;
                            }
                        } else {
                            store.dispatch(openApp(command[1]))
                            if(!store.getState()[command[1].toString()].isOpen){
                                return `Closing ${command[1]}...`;
                            }
                                return `Opening ${command[1]}...`;
                        }
                    case 'console':
                        if(command[2]){
                            switch(command[2]){
                                case '-v':
                                    return store.getState()[command[1].toString()].version;
                                default:
                                    return `parameter not recognized`;
                            }
                        } else {
                            store.dispatch(openApp(command[1]))
                            if(!store.getState()[command[1].toString()].isOpen){
                                return `Closing ${command[1]}...`;
                            }
                                return `Opening ${command[1]}...`;
                        }
                    case 'settings':
                        if(command[2]){
                            switch(command[2]){
                                case '-v':
                                    return store.getState()[command[1].toString()].version;
                                default:
                                    return `parameter not recognized`;
                            }
                        } else {
                            store.dispatch(openApp(command[1]))
                            if(!store.getState()[command[1].toString()].isOpen){
                                return `Closing ${command[1]}...`;
                            }
                                return `Opening ${command[1]}...`;
                        }
                    case 'mailbox':
                        if(command[2]){
                            switch(command[2]){
                                case '-v':
                                    return store.getState()[command[1].toString()].version;
                                default:
                                    return `parameter not recognized`;
                            }
                        } else {
                            store.dispatch(openApp(command[1]))
                            if(!store.getState()[command[1].toString()].isOpen){
                                return `Closing ${command[1]}...`;
                            }
                                return `Opening ${command[1]}...`;
                        }
                    case 'help':
                        return `run [app-name]`
                    default:
                        return `app not found: '${command[1]}'`;
                }
            case 'style':
                return 'Stylig through the console is not ready yet';
            case 'pope':
                return 'John Paul the Second ';
            case 'jd':
                return 'Confirmed!';
            default:
                return `${command[0]} is not recognized as internal command`;
        }
    }
    return null;
}