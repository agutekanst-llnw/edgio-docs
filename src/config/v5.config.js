import {default as base} from './base.config';

const APP_DOMAIN = `app.${DOMAIN_LEGACY}`;
const NODE_VERSION = '14.x';

const SYSTEM_REQUIREMENTS = `## System Requirements {/*system-requirements*/}

- [Install Node.js 14.19.0](/guides/install_nodejs)`;

const SYSTEM_REQUIREMENTS_H3 = `### System Requirements {/*system-requirements*/}

- [Install Node.js 14.19.0](/guides/install_nodejs)`;

const PREREQ = `
${SYSTEM_REQUIREMENTS}

${base.SIGN_UP}

${base.INSTALL_CLI}
  `.trim();

export default {
  APP_DOMAIN,
  NODE_VERSION,
  SYSTEM_REQUIREMENTS,
  SYSTEM_REQUIREMENTS_H3,
  PREREQ,
};
