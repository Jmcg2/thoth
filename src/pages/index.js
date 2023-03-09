import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>HOMEPAGE</h1>
      <button
        className="btn"
        onClick={() => {
          router.push("/shops");
        }}
      >
        Shoops
      </button>
    </>
  );
}
