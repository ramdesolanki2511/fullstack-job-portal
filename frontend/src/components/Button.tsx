export default function Button({ title, loading }: any) {
  return <button disabled={loading}>{loading ? "Loading..." : title}</button>;
}
