import { createHashHistory, createBrowserHistory } from "history";
import { env } from "../env";
// const hashHistory = createHashHistory();
// export default hashHistory;

export const browserHistory = createBrowserHistory({basename: env.approot});
