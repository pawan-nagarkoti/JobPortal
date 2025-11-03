import { Spinner } from "@/components/ui/spinner";

export default function Loader(size = "size-3") {
  return <Spinner className={`${size}`} />;
}
