import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-pink-300">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div>
          <p>LOGO</p>
        </div>
        <div className="my-5">
          <p className="text-lg font-semibold">Contacto</p>
          <ul>
            <li>
              <Link
                href={"https://www.instagram.com/tartas_ymas/"}
                target="_blank"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link href={""} target="_blank">
                Whatsapp
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-5">
          <p className="text-lg font-semibold">Secciones</p>
          <ul>
            <li>
              <Link href={""}>Inicio</Link>
            </li>

            <li>
              <Link href={""}>productos</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="pb-5 text-center text-sm">
        desarrollador por{" "}
        <Link
          href={"https://github.com/giannidona"}
          target="_blank"
          className="underline"
        >
          gianluca donato
        </Link>
        🖤
      </div>
    </footer>
  );
};
