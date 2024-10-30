"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

export const NavbarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Productos", href: "#productos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Ubicación", href: "#ubicacion" },
  ];

  // Effect to observe sections
  useEffect(() => {
    const handleScroll = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.6, // Adjust as needed for better activation control
    });

    // Observe each section
    menuItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Navbar
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-8",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
        base: ["py-4"],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="justify-end sm:justify-start">
          <Image
            src="/img/logo/logo.png"
            alt="Logo de Juanes Barber's"
            width={80}
            height={80}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        {menuItems.map(({ href, label }, index) => (
          <NavbarItem
            key={`${href}-${index}`}
            isActive={activeSection === href.slice(1)} // Check if the section is active
          >
            <Link color="foreground" href={`${href}`}>
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ href, label }, index) => (
          <NavbarItem
            key={`${href}-${index}`}
            isActive={activeSection === href.slice(1)}
          >
            <Link color="foreground" href={`${href}`}>
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
