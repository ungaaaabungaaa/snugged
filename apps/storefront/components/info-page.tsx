export function InfoPage({
  title,
  intro,
  items
}: {
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black tracking-normal">{title}</h1>
      <p className="mt-4 text-lg text-muted">{intro}</p>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item} className="rounded-[8px] border border-line p-4">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
