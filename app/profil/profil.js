"use client";
import React from "react";
import { AlleAnsatte } from "@/app/components/alleAnsatte";
import AnsattForm from "@/app/components/ansattForm";
import { useRouter } from "next/router";

const Profil = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>{ansatt.Navn}</h1>
    </div>
  );
};

export default Profil;
