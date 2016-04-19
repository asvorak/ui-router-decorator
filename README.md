# ui-router-decorator
ES7 Decorator for angular-ui-router allowing placing state config on the state's controller rather
than in an Angular config function.

```TypeScript
import {StateConfig, registerState} from 'ui-router-decorator';

@StateConfig({
  name: 'home',
  url: '/home'
  controller: HomePageController,
  controllerAs: 'vm'
})
class HomePageController {

}

angular.module('myApp', ['ui.router'])
  .config(registerState(HomePageController));
```

# History
This project was inspired by a conversation in [ngParty/ng-metadata](https://github.com/ngParty/ng-metadata/issues/27).