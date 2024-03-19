export default function getFileContents(filePath) {
  const parts = filePath.split("/");
  const filename = parts[parts.length - 1];
  return filename;
}
