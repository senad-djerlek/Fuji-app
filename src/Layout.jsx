import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

import Sidebar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Anime from "./pages/AnimePage/Anime";
import Manga from "./pages/MangaPage/Manga";
import About from "./pages/AboutPage/About";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 150, lg: 150 }}
        >
          <Sidebar/>
        </Navbar>
      }
      header={
        <Header height={70}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
            className='bg-dark'
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <h1 className="text-white text-3xl font-bold pl-3">Fuji</h1>
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/anime" element={<Anime/>} />
        <Route path="/manga" element={<Manga/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AppShell>
  );
}
