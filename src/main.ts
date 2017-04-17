import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import AppModule from "./app/app.module";

import '!style-loader!css-loader!less-loader!./less/index.less';

platformBrowserDynamic().bootstrapModule(AppModule);