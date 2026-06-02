import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  navigation: {
    enabled: true,
  },
  'populate-all': {
    enabled: true,
  },
});

export default config;
