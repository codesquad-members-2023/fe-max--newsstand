import { Store } from "../core/Store";
import { rollingService } from "../services/rollingService";

export async function initRolling() {
  Store.state.rolling = await rollingService();
  Store.state.rollingIndex = 0;
}
