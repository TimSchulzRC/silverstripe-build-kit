import Injector from "lib/Injector";
import CustomField from "../components/CustomField";

export default () => {
  Injector.component.registerMany({
    CustomField,
  });
};
