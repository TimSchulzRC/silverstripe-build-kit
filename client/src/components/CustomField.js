import React, { useEffect, useState } from "react";
import fieldHolder from "components/FieldHolder/FieldHolder";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupButtonDropdown,
} from "reactstrap";

const CustomField = () => <div>Hello World</div>;

export default fieldHolder(CustomField);
