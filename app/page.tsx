"use client";

import MaintenanceMode from "@/components/MaintenanceMode";

export default function Home() {
  return (
    <main className="pageContainer relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <MaintenanceMode />
    </main>
  );
}
