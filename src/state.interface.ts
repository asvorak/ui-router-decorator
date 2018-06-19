import {IState as IStateAngular} from '@types/angular-ui-router';

/**
 * A controller class with the state config applied as a property
 */
export interface IStateController {
    $uiStateConfig: any;
}

/**
 * Angular UI IState interface with the name parameter being required
 */
export interface IState extends IStateAngular {
    name: string;
}