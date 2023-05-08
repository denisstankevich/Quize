import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ColorModeToggle() {
  const { toggleColorMode } = useColorMode();

  const labelBasedOnColorMode = useColorModeValue(
    "Switch to dark mode",
    "Switch to light mode"
  );

  return (
    <Tooltip label={labelBasedOnColorMode}>
      <IconButton
        onClick={toggleColorMode}
        aria-label={labelBasedOnColorMode}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        size="md"
      />
    </Tooltip>
  );
}
