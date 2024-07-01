import Link from "next/link";

const Index = () => {
  return (
    <main>
      <Link href="/late_ssr/10">late ssr (10s)</Link>
      <br />
      <Link href="/not_late_ssr">not late ssr</Link>
    </main>
  );
};

export default Index;
