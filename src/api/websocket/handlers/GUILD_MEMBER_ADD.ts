import { Client } from "../../";
import ClientUser from "../../utils/Client/User";
import { GatewayPayload } from "../../utils/GatewayPayload";

export default function (client: Client, payload: GatewayPayload) {
  client.emit("guildMemberAdd", payload.d);
}
