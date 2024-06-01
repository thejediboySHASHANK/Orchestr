import Workflow from "@/app/(main)/(pages)/workflows/_components/workflow";

type Props = {};
const Workflows = (props: Props) => {
    return (
        <div className="relative flex flex-col gap-4">
            <section className="flex flex-col m-2">
                <Workflow
                    description={"Test Workflow"}
                    id="2837283738"
                    name="E-Com Automation"
                    publish={false}
                />
            </section>
        </div>
    );
};
export default Workflows;
