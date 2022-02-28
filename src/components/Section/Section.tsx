import React, { ReactNode } from 'react';
import { Text } from '@nextui-org/react';

interface Props {
  title: string;
  children: ReactNode;
}

export const Section: React.VFC<Props> = ({ title, children }) => {
  return (
    <section>
      <Text h3 weight="bold">
        {title}
      </Text>
      {children}
    </section>
  );
};
