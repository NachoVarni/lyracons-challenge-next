import Head from "next/head";
import styles from "../styles/Home.module.css";
import Offer from "../components/Offer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { FieldProvider } from "../context/fieldContext";
import { useState } from "react";
import OpenedFilter from "../components/OpenedFilter";

export default function Home() {
  const [showGrid, setShowGrid] = useState(true);
  const [title, setTitle] = useState(false);
  const [newProducts, setNewProducts] = useState(false);
  const [showTalle, setShowTalle] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showPrecio, setShowPrecio] = useState(false);
  const [showTemporada, setShowTemporada] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);
  const [showResponsiveFilter, setShowResponsiveFilter] = useState(false);

  function handleShowGrid() {
    setShowGrid((prevState) => !prevState);
  }

  function handleTitle() {
    setTitle((prevState) => !prevState);
  }

  function handleNewProducts() {
    setNewProducts((prevState) => !prevState);
  }

  function handleShowTalle() {
    setShowTalle((prevState) => !prevState);
  }

  function handleShowColor() {
    setShowColor((prevState) => !prevState);
  }

  function handleShowPrecio() {
    setShowPrecio((prevState) => !prevState);
  }

  function handleShowTemporada() {
    setShowTemporada((prevState) => !prevState);
  }

  function handleShowMaterial() {
    setShowMaterial((prevState) => !prevState);
  }

  function handleResponsiveFilter() {
    setShowResponsiveFilter((prevState) => !prevState);
  }

  const data = {
    handleShowGrid,
    showGrid,
    handleTitle,
    title,
    handleNewProducts,
    newProducts,
    handleShowTalle,
    handleShowColor,
    handleShowPrecio,
    handleShowTemporada,
    handleShowMaterial,
    showTalle,
    showColor,
    showPrecio,
    showTemporada,
    showMaterial,
    handleResponsiveFilter,
    showResponsiveFilter,
  };

  return (
    <FieldProvider value={data}>
      <div className={styles.wrapper}>
        <Head>
          <title>Lyracons challenge</title>
          <meta name="description" content="Ecommere website" />
          <link rel="icon" href="/lyracons-logo.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        {!showResponsiveFilter ? (
          <>
            <Offer />
            <Navbar />
            <Hero />
            <Footer />
          </>
        ) : (
          <OpenedFilter
            showResponsiveFilter={showResponsiveFilter}
            handleResponsiveFilter={handleResponsiveFilter}
          />
        )}
      </div>
    </FieldProvider>
  );
}
