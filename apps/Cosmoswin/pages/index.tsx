
import { Header } from "ui";

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../routes/routes'),
  { ssr: false }
);


export default function App() {
  return (

    <DynamicComponentWithNoSSR/>

  );
}
