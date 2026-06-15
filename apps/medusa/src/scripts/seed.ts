import { sampleProducts, categoryGroups, collections } from "@snugged/config";

export default async function seed() {
  console.log("Seeding Snugged.Shop fashion catalog");
  console.log(`Categories: ${categoryGroups.length} groups`);
  console.log(`Collections: ${collections.map((collection) => collection.slug).join(", ")}`);

  for (const product of sampleProducts) {
    const oneOfOne = product.metadata.one_of_one ? "one-of-one" : "standard";
    console.log(
      `- ${product.title} (${product.handle}) ${oneOfOne}, variants=${product.variants.length}`,
    );
  }

  console.log(
    "This seed script currently documents the catalog payload. Wire it to Medusa product workflows after the local database is running.",
  );
}
