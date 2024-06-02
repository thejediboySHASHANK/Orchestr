import {EditorState} from "@/providers/editor-provider";
import {ConnectionProviderProps} from "@/providers/connections-providers";
import {useOrchestrStore} from "@/store";
import ContentBasedOnTitle from "@/app/(main)/(pages)/workflows/editor/[editorId]/_components/content-based-on-title";

type Props = {
    state: EditorState;
    nodeConnection: ConnectionProviderProps
};
const RenderOutputAccordion = ({state, nodeConnection}: Props) => {
    const {
        googleFile,
        setGoogleFile,
        selectedSlackChannels,
        setSelectedSlackChannels,
    } = useOrchestrStore();
    return (
        <ContentBasedOnTitle
            nodeConnection={nodeConnection}
            newState={state}
            file={googleFile}
            setFile={setGoogleFile}
            selectedSlackChannels={selectedSlackChannels}
            setSelectedSlackChannels={setSelectedSlackChannels}
        />
    );
};
export default RenderOutputAccordion;
