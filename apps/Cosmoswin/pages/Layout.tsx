import { ReactNode } from 'react';
import { Header } from "ui";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header operatorName='Cosmoswin' mainColorNav='bg-teal-300' colorLetters='text-white'/>
      <main>{children}</main>
    </>
  );
}