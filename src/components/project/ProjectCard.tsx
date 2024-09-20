/* eslint-disable max-lines-per-function */

import { ProjectType } from "@/lib/types/Timeline"
import Image from "next/image"
import { FunctionComponent } from "react"
import {
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog"
import { DialogHeader, DialogFooter } from "../ui/dialog"
import { Button } from "../ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import ClientDialog from "./ClientDialog"
import SimpleProject from "./SImpleProject"

type ProjectCardProps = {
  project: ProjectType
  expanded: boolean
  id: string
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project,
  expanded,
  id,
}) => (
  <ClientDialog id={id}>
    <DialogTrigger asChild>
      <SimpleProject project={project} expanded={expanded} />
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] w-[800px]">
      <DialogHeader>
        <div className="relative w-full h-[200px] mb-4">
          <Image src={project.image} alt="img" width={500} height={500} />

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogTitle>Modal Title</DialogTitle>
        <div className="flex space-x-2 mt-2">
          <Button variant="default">Button 1</Button>
          <Button variant="secondary">Button 2</Button>
        </div>
      </DialogHeader>
      <DialogDescription>
        This is a description of the modal content. You can add more details or
        instructions here.
      </DialogDescription>
      <DialogFooter>
        <p className="text-sm text-muted-foreground">This is a footer</p>
      </DialogFooter>
    </DialogContent>
  </ClientDialog>
)

export default ProjectCard
