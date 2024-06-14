import { Icon } from "@iconify/react";

export const COMPANY_YEAR = String(new Date().getFullYear());

const celular = "525549295294";

export const WHATS_INFO = {
  icon: <Icon icon="basil:whatsapp-outline" />,
  channelName: "55 49 29 52 94",
  desktopUrl: `https://web.whatsapp.com/send?phone=${celular}`,
  mobileUrl: `https://api.whatsapp.com/send?phone=${celular}`,
};
