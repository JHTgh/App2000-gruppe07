"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { finnAnsatteBedrift } from "@/app/database/querys";
import { userUId } from "@/app/dashboard/layout";
import styles from "./page.module.css";

export default function Profil() {
  // const router = useRouter();
  // const pathname = usePathname();
  const params = useParams();
  const ansattId = params.ansattId;

  const [ansatt, setAnsatt] = useState();

  useEffect(function () {
    userUId().then((bedriftID) => {
      finnAnsatteBedrift(bedriftID).then((ansatteListe) => {
        const ansatt = ansatteListe.docs.find(
          (ansatt) => ansatt.id == ansattId
        );
        setAnsatt(ansatt.data());
      });
    });
  }, []);

  function formatName(name) {
    return name
      .split(/\s+/)
      .map((part) => part[0].toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <div className={styles.profilContainer}>
      <img
        className={styles.avatar}
        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg3MC1rYXRpZS0wOV8xLmpwZw.jpg"
        alt="avatar"
      ></img>
      <h1>{formatName(ansatt?.Navn ?? "Laster...")}</h1>
      <h5 className={styles.bfID}>BigFive ID: {ansatt?.testId}</h5>
      <h3 className={styles.ansattEpost}>
        {ansatt?.Epost ?? "Laster epost..."}
      </h3>
    </div>
  );
}
