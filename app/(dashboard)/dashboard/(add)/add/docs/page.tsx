import Header from "@/container/dashboard/docs/create/header";
import DocsMainBody from "@/container/dashboard/docs/create/main-body";

export default function Page() {
  return (
    <div className="container-wrapper">
      <div className="container w-full rounded-[0.5rem] border bg-background shadow">
        <Header />
        <DocsMainBody />
      </div>
    </div>
  );
}
