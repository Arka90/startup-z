import Navigation from "../../routes/navigation/navigation.component";
import MobileNav from "../mobile-navigation/mobile-navigation.component";
import { useMediaQuery } from "@mui/material";
function Header() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1290px)");

  return isNonMobileScreens ? <Navigation /> : <MobileNav />;
}

export default Header;
