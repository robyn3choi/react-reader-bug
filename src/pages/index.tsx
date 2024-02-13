import { ReactReader } from "react-reader";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState<string | number>(0);

  return (
    <main>
      <ReactReader
        url="https://react-reader.metabits.no/files/alice.epub"
        location={location}
        locationChanged={setLocation}
      />
    </main>
  );
}
