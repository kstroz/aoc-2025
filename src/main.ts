async function main() {
  const day = process.argv[2];

  if (!day) {
    console.error("Missing day arg. Usage: pnpm dev <day>");
    process.exit(1);
  }

  const dayPadded = day.padStart(2, "0");

  try {
    const module = await import(`./day${dayPadded}/index.ts`);

    if (typeof module.default === "function") {
      await module.default();
    } else {
      console.error(`Default export not found in src/day${dayPadded}/index.ts`);
    }
  } catch (err) {
    console.error(`Could not load: src/day${dayPadded}/index.ts`);
    console.error(err);
  }
}

main();
