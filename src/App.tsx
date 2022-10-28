import React from 'react';
import Layout from "./UI/Layout";
import Header from "./components/Header";
import Inscription from "./components/Inscription";
import Presentation from "./components/Presentation";
import Witness from "./components/Witness";
import Access from "./components/Access";
import Contact from "./components/Contact";

function App() {
  return (
<Layout>
  <Header />
  <Inscription />
  <Presentation />
  <Access />
  <Contact />

</Layout>
  );
}

export default App;
