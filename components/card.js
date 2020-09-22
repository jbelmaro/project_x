import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { i18n, withTranslation } from "../i18next.config";
const Card = ({ t, name, responsible }) => {
  return (
    <>
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div class="px-5 py-3">
          <h3 class="text-gray-700 uppercase">{t("name")}</h3>
          <h3 class="text-gray-700 uppercase">{name}</h3>
          <span class="text-gray-500 mt-2">{t("responsible")}</span>
          <span class="text-gray-500 mt-2">{responsible}</span>
        </div>
      </div>
    </>
  );
};
Card.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

Card.propTypes = {
  t: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
  responsible: PropTypes.func.isRequired
};

export default withTranslation("common")(Card);
