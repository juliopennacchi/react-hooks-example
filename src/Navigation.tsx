import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem onClick={() => handleNavigate("/useState")}>
          UseState
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/useEffect")}>
          Use Effect
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/useRef")}>
          Use Ref
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/useReducer")}>
          Use Reducer
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/useContext")}>
          Use Context
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/useMemo")}>
          Use Memo
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/useCallback")}>
          Use Callback
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/useLayoutEffect")}>
          Use Layout Effect
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
