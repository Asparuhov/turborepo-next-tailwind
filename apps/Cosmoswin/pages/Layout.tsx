import  React  from 'react';
import { ReactNode, useState } from 'react';
import { Header } from "ui";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState<any>(false);
  const [_document, set_document] = React.useState(null)

  React.useEffect(() => {
      set_document(document)
  }, [])
  return (
    
    <>
      <Header operatorName='Cosmoswin' mainColorNav='bg-teal-300' colorLetters='text-white'document={_document}  menuOpener={{value: menuOpen, func: setMenuOpen}}/>
      <main>{children}</main>
    </>
  );
}