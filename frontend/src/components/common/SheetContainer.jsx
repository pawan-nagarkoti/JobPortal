import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import React from "react";

export default function SheetContainer({ open, setOpen, children }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <div>{children}</div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
