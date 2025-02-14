import { Action, Color, Icon } from "@raycast/api";
import { useSession } from "~/context/session";
import { useVault } from "~/context/vault";

const SearchCommonActions = () => {
  const vault = useVault();
  const session = useSession();

  return (
    <>
      <Action
        title="Sync Vault"
        shortcut={{ modifiers: ["cmd"], key: "r" }}
        icon={Icon.ArrowClockwise}
        onAction={vault.syncItems}
      />
      <Action
        icon={{ source: "sf_symbols_lock.svg", tintColor: Color.PrimaryText }} // Does not immediately follow theme
        title="Lock Vault"
        shortcut={{ modifiers: ["cmd", "shift"], key: "l" }}
        onAction={session.lock}
      />
      <Action title="Logout" icon={Icon.XMarkCircle} onAction={session.logout} />
    </>
  );
};
export default SearchCommonActions;
