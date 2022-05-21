import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>The art works of</span>
              <span>Rembrandt</span>
            </h1>
            <h2>van Rijn</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2022 DroidBlog</p>
      </footer>
    </div>
  );
}
