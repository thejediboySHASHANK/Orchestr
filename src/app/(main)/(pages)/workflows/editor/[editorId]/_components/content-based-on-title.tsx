import {ConnectionProviderProps} from "@/providers/connections-providers";
import {EditorState, useEditor} from "@/providers/editor-provider";
import {nodeMapper} from "@/lib/types";
import {AccordionContent} from "@/components/ui/accordion";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {onContentChange} from "@/lib/editor-utils";
import GoogleFileDetails from "@/app/(main)/(pages)/workflows/editor/[editorId]/_components/google-file-details";
import GoogleDriveFiles from "@/app/(main)/(pages)/workflows/editor/[editorId]/_components/google-drive-files";
import ActionButton from "@/app/(main)/(pages)/workflows/editor/[editorId]/_components/action-button";

export interface Option {
    value: string
    label: string
    disable?: boolean
    /** fixed option that can't be removed. */
    fixed?: boolean

    /** Group the options by providing key. */
    [key: string]: string | boolean | undefined
}

interface GroupOption {
    [key: string]: Option[]
}

type Props = {
    nodeConnection: ConnectionProviderProps
    newState: EditorState
    file: any
    setFile: (file: any) => void
    selectedSlackChannels: Option[]
    setSelectedSlackChannels: (value: Option[]) => void
};
const ContentBasedOnTitle = ({
                                 nodeConnection,
                                 newState,
                                 file,
                                 setFile,
                                 selectedSlackChannels,
                                 setSelectedSlackChannels
                             }: Props) => {
    const {selectedNode} = newState.editor;
    const title = selectedNode.data.title;
    //@ts-ignore
    const nodeConnectionType: any = nodeConnection[nodeMapper[title]];

    if (!nodeConnectionType) return <p>Not connected</p>

    const isConnected =
        title === 'Google Drive'
            ? !nodeConnection.isLoading
            : !!nodeConnectionType[
                `${
                    title === 'Slack'
                        ? 'slackAccessToken'
                        : title === 'Discord'
                            ? 'webhookURL'
                            : title === 'Notion'
                                ? 'accessToken'
                                : ''
                }`
                ]

    return (
        <AccordionContent>
            <Card>
                {title === 'Discord' && (
                    <CardHeader>
                        <CardTitle>{nodeConnectionType.webhookName}</CardTitle>
                        <CardDescription>{nodeConnectionType.guildName}</CardDescription>
                    </CardHeader>
                )}
                <div className="flex flex-col gap-3 px-6 py-3 pb-20">
                    <p>{title === 'Notion' ? 'Values to be stored' : 'Message'}</p>

                    <Input
                        type="text"
                        value={nodeConnectionType.content}
                        onChange={(event) => onContentChange(nodeConnection, title, event)}
                    />

                    {JSON.stringify(file) !== '{}' && title !== 'Google Drive' && (
                        <Card className="w-full">
                            <CardContent className="px-2 py-3">
                                <div className="flex flex-col gap-4">
                                    <CardDescription>Drive File</CardDescription>
                                    <div className="flex flex-wrap gap-2">
                                        <GoogleFileDetails
                                            nodeConnection={nodeConnection}
                                            title={title}
                                            gFile={file}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    {title === 'Google Drive' && <GoogleDriveFiles />}
                    <ActionButton
                        currentService={title}
                        nodeConnection={nodeConnection}
                        channels={selectedSlackChannels}
                        setChannels={setSelectedSlackChannels}
                    />
                </div>
            </Card>
        </AccordionContent>
    );
};
export default ContentBasedOnTitle;
