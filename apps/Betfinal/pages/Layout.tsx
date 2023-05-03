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
      <Header operatorName='Betfinal' mainColorNav='bg-yellow-400' document={_document} colorLetters='text-white' menuOpener={{value: menuOpen, func: setMenuOpen}}/>
      <main>{children}</main>
    </>
  );
}