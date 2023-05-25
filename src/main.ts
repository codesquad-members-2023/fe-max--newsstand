import { RollerModel } from "./Model/RollerModel";
import { RollerIntent } from "./Intent/RollerIntent";
import { bannerInitialize } from "./View/header/NewsBanner";
import { Roller } from "./View/header/Roller";
// import { NewsRoller } from "./View/components/NewsRoller/NewsRoller";
// import { TotalMedia } from "./View/components/TotalMedia/TotalMedia";
import "./css/index.css";

// new NewsBanner();
bannerInitialize();

const rollerModel = new RollerModel();
await rollerModel.initState();
const rollerIntent = new RollerIntent(rollerModel);
new Roller(rollerModel, rollerIntent);
