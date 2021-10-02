import React, { FC, memo } from "react";
import { useTranslation } from "../../localization/hooks/useTranslation";
import { Container } from "../../components/layouts/Container";

interface IProps {}

export const About: FC<IProps> = memo(({}) => {
  const { t } = useTranslation();

  return <Container title={t("navigation.about")} />;
});
