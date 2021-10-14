import { RocketChatLogo } from '@rocket.chat/logo';
import type { ReactElement, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Aside,
  Description,
  Content,
  Logo,
  Subtitle,
  Title,
  Wrapper,
} from './FormPageLayout.styles';

type FormPageLayoutProps = {
  logo?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  subTitleColor?: string;
  justifyContent?: string;
  paddingEnd?: string;
  tag?: string;
};

const FormPageLayout = ({
  logo,
  title,
  subtitle,
  description,
  subTitleColor,
  justifyContent,
  paddingEnd,
  children,
}: FormPageLayoutProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Aside justifyContent={justifyContent} paddingEnd={paddingEnd}>
        <Logo>{logo ?? <RocketChatLogo />}</Logo>
        <Title>{title ?? t('page.form.title')}</Title>
        {subtitle && (
          <Subtitle fontColor={subTitleColor || ''}>{subtitle}</Subtitle>
        )}
        <Description>{description}</Description>
      </Aside>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default FormPageLayout;
