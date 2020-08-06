import React from 'react';

import { withI18n } from 'gatsby-plugin-yaml-i18n';

import '../assets/sass/main.scss';

import Warning from './Warning';
import Seo from './Seo';
import DarkMode from './DarkMode';

const LayoutGlobal = ({ children, pageContext, pageContext: { i18n } }) => {
  return (
    <>
      <Seo {...pageContext} />
      {i18n && <DarkMode i18n={i18n.globals.ui} />}
      {i18n && <Warning i18n={i18n.globals.ui.warning} />}
      {children}
    </>
  );
};

export default withI18n()(LayoutGlobal);
