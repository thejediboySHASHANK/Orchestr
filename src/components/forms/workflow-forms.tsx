import {useForm} from "react-hook-form";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {WorkflowFormSchema} from "@/lib/types";
import {useRouter} from "next/navigation";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {toast} from "sonner";
import {onCreateWorkflow} from "@/app/(main)/(pages)/workflows/_actions/worflow-connections";
import {useModal} from "@/providers/modal-provider";

type Props = {
    title?: string;
    subTitle?: string;
};
const WorkflowForm = ({title, subTitle}: Props) => {
    const {setClose} = useModal();
    const form = useForm<z.infer<typeof WorkflowFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(WorkflowFormSchema),
        defaultValues: {
            name: '',
            description: '',
        },
    })

    const isLoading = form.formState.isLoading;
    const router = useRouter();

    const handleSubmit = async (values: z.infer<typeof WorkflowFormSchema>) => {
        const workflow = await onCreateWorkflow(values.name, values.description);
        if (workflow) {
            toast.message(workflow.message);
            // for refreshing the page to see the create result on the same page
            router.refresh();
        }
        setClose();
    };

    return (
        <Card className="w-full max-w-[650px] border-none">
            {title && subTitle && (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{subTitle}</CardDescription>
                </CardHeader>
            )}
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="flex flex-col gap-4 text-left mt-10"
                    >
                        <FormField
                            disabled={isLoading}
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name of the Workflow</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            disabled={isLoading}
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Description"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            className="mt-4"
                            disabled={isLoading}
                            type="submit"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-sping" /> Saving
                                </>
                            ) : (
                                'Save Settings'
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
export default WorkflowForm;
