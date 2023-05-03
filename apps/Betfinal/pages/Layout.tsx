import { ReactNode } from 'react';
import { Header } from "ui";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header operatorName='Betfinal' mainColorNav='bg-yellow-400' colorLetters='text-white'/>
      <main>{children}</main>
    </>
  );
}