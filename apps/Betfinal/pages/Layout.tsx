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
        operatorName="Betfinal"
        mainColorNav="yellow-400"
        secondaryColor="gray-800"
        document={_document}
        colorLetters="text-303030"
        menuOpener={{ value: menuOpen, func: setMenuOpen }}
        sidebarRef={sidebarRef}
        sidebarButtonRef={sidebarButtonRef}
      />
      <main style={{ backgroundColor: "#27272A" }}>{children}</main>
    </>
  );
}
