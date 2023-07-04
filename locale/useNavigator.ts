export const useNavigator = () => {
  const { locale } = useI18n();

  const localPath = (to: string) =>
    locale.value === "en" ? to : `/${locale.value}${to}`;
  const navigateTo = (to: string) => {
    navigateTo(localPath(to));
  };

  // { path: `/${locale.value}${to}`, name: locale.value }

  return { navigateTo, localPath };
};