"use client"
import { parseAsString, useQueryState } from "nuqs"
import React, { FunctionComponent } from "react"
import { Dialog } from "../ui/dialog"

type ClientDialogProps = {
  id: string
  children: React.ReactNode
}

const ClientDialog: FunctionComponent<ClientDialogProps> = ({
  id,
  children,
}) => {
  const [projectId, setProjectId] = useQueryState(
    "projectId",
    parseAsString.withOptions({ scroll: false, shallow: false }),
  )

  return (
    <Dialog
      open={projectId === id}
      onOpenChange={(open) => {
        if (open) {
          void setProjectId(id)
        } else {
          void setProjectId(null)
        }
      }}
    >
      {children}
    </Dialog>
  )
}

export default ClientDialog
