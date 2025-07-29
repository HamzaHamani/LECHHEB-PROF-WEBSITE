import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Not Found</h2>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        Could not find requested resource
      </p>
      <Link href="/">
        <Button variant="outline" size="lg">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
