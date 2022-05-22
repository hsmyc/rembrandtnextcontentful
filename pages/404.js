import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops</h1>
      <h3>Not found</h3>
      <p>
        Redirecting to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>

      <style jsx>{`
        .not-found {
          background: #ffff00;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  );
}
