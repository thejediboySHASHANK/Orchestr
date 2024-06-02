'use client'

import {EditorCanvasTypes, EditorNodeType} from "@/lib/types";
import {useEditor} from "@/providers/editor-provider";
import {useNodeConnections} from "@/providers/connections-providers";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Separator} from "@/components/ui/separator";
import {CONNECTIONS, EditorCanvasDefaultCardTypes} from "@/lib/constants";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import EditorCanvasIconHelper
    from "@/app/(main)/(pages)/workflows/editor/[editorId]/_components/editor-canvas-icon-helper";
import {onDragStart} from "@/lib/editor-utils";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import RenderConnectionAccordion
    from "@/app/(main)/(pages)/workflows/editor/[editorId]/_components/render-connection-accordion";
import RenderOutputAccordion
    from "@/app/(main)/(pages)/workflows/editor/[editorId]/_components/render-output-accordion";

type Props = {
    nodes: EditorNodeType[];

};
const EditorCanvasSidebar = ({nodes}: Props) => {
    //WIP: Connect DB stuff
    const {state} = useEditor();
    const {nodeConnection} = useNodeConnections();

    return (
        <aside>
            <Tabs
                defaultValue="actions"
                className="h-screen overflow-scroll pb-24"
            >
                <TabsList className="bg-transparent">
                    <TabsTrigger value="actions">Actions</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <Separator/>
                <TabsContent
                    value="actions"
                    className="flex flex-col gap-4 p-4 mb-16"
                >
                    {Object.entries(EditorCanvasDefaultCardTypes)
                        .filter(
                            ([_, cardType]) =>
                                (!nodes.length && cardType.type === 'Trigger') ||
                                (nodes.length && cardType.type === 'Action')
                        )
                        .map(([cardKey, cardValue]) => (
                            <Card
                                key={cardKey}
                                draggable
                                className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
                                onDragStart={(event) =>
                                    onDragStart(event, cardKey as EditorCanvasTypes)
                                }
                            >
                                <CardHeader className="flex flex-row items-center gap-4 p-4">
                                    <EditorCanvasIconHelper type={cardKey as EditorCanvasTypes}/>
                                    <CardTitle className="text-md">
                                        {cardKey}
                                        <CardDescription>{cardValue.description}</CardDescription>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                </TabsContent>
                <TabsContent
                    value="settings"
                    className="-mt-6"
                >
                    <div className="px-2 py-4 text-center text-xl font-bold">
                        {state.editor.selectedNode.data.title}
                    </div>

                    <Accordion type="multiple">
                        <AccordionItem
                            value="options"
                            className="border-y-[1px] px-2"
                        >
                            <AccordionTrigger className="!no-underline">
                                Account
                            </AccordionTrigger>
                            <AccordionContent>
                                {CONNECTIONS.map((connection) => (
                                    <RenderConnectionAccordion
                                        key={connection.title}
                                        state={state}
                                        connection={connection}
                                    />
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value="Expected Output"
                            className="px-2"
                        >
                            <AccordionTrigger className="!no-underline">
                                Action
                            </AccordionTrigger>
                            <RenderOutputAccordion
                                state={state}
                                nodeConnection={nodeConnection}
                            />
                        </AccordionItem>
                    </Accordion>
                </TabsContent>
            </Tabs>
        </aside>
    );
};
export default EditorCanvasSidebar;
