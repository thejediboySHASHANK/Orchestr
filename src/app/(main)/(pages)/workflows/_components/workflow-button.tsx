'use client'

import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {useModal} from "@/providers/modal-provider";
import CustomModal from "@/components/global/custom-modal";
import WorkflowForm from "@/components/forms/workflow-forms";

type Props = {};
const WorkflowButton = (props: Props) => {

    const {setOpen, setClose} = useModal();
    const handleClick = () => {
        setOpen(
            <CustomModal
                title="Create a Workflow Automation"
                subheading="Workflows are a powerful tool that help you automate tasks"
            >
                <WorkflowForm />
            </CustomModal>
        )
    }

    return (
        <Button size={"icon"} onClick={handleClick}>
            <Plus/>
        </Button>
    );
};
export default WorkflowButton;
