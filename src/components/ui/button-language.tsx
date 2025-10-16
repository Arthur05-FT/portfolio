import React from "react";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Franceflag } from "../icon/french-icon";
import { FlagForFlagUnitedKingdom } from "../icon/english-icon";
import { FlagGermany } from "../icon/deutsch-icon";

const ButtonLanguage = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Franceflag />
          French
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FlagForFlagUnitedKingdom />
          English
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FlagGermany />
          Deutsch
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ButtonLanguage;
