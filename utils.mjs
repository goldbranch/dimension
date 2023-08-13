export function formatTable(rows) {
  const [maxKeyLength, maxValueLength] = rows.reduce(
    ([maxKeyLength, maxValueLength], [key, value]) => {
      const nextMaxKeyLength =
        key.length > maxKeyLength ? key.length : maxKeyLength;
      const nextMaxValueLength =
        value.length > maxValueLength ? value.length : maxValueLength;
      return [nextMaxKeyLength, nextMaxValueLength];
    },
    [0, 0]
  );
  const table = rows
    .map(
      ([key, value]) =>
        `${key.padEnd(maxKeyLength, " ")} : ${value.padStart(
          maxValueLength,
          " "
        )}`
    )
    .join("\n");
  return table;
}
