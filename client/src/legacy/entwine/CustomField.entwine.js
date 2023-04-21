import jQuery from "jquery";
import { loadComponent } from "lib/Injector";
import React from "react";
import ReactDOM from "react-dom";

jQuery.entwine("ss", ($) => {
  $(".js-injector-boot .form__field-holder .custom-field").entwine({
    onmatch() {
      const Component = loadComponent("CustomField");

      ReactDOM.render(<Component />, this[0]);
    },

    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    },
  });
});
