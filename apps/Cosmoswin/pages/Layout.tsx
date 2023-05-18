import React, { ReactNode, useState } from "react";
import { Header } from "ui";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState<any>(false);
  const [_document, set_document] = React.useState(null);

  React.useEffect(() => {
    set_document(document);
  }, []);
  return (
    <>
      <Header
        operatorName="Cosmoswin"
        mainColorNav="bg-teal-300"
        colorLetters="text-303030"
        document={_document}
        menuOpener={{ value: menuOpen, func: setMenuOpen }}
      />
      <main style={{ backgroundColor: "#27273F", paddingBottom:"15px"}}>{children}</main>
    </>
  );
}
