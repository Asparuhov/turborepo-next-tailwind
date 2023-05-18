import React, { ReactNode, useState, useEffect, useRef } from "react";
import { Header } from "ui";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState<any>(false);
  const [_document, set_document] = React.useState(null);
  let sidebarRef: any = useRef();
  let sidebarButtonRef: any = useRef();
  useEffect(() => {
    set_document(document);
    let clickOutsideHandler = (e: any) => {
      if (
        !sidebarRef?.current?.contains(e.target) &&
        !sidebarButtonRef?.current?.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutsideHandler);
  }, []);
  return (
    <>
      <Header
        operatorName="Cosmoswin"
        mainColorNav="teal-300"
        secondaryColor="slate-800"
        colorLetters="text-303030"
        document={_document}
        menuOpener={{ value: menuOpen, func: setMenuOpen }}
        sidebarRef={sidebarRef}
        sidebarButtonRef={sidebarButtonRef}
      />
      <main style={{ backgroundColor: "#1e293b", paddingBottom: "15px" }}>
        {children}
      </main>
    </>
  );
}
