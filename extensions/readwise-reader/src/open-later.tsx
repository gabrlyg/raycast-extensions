import { open, closeMainWindow } from "@raycast/api";
import { BASE_URL } from "./utils";

export default async function Later() {
  await open(BASE_URL + "later");
  await closeMainWindow();
}
