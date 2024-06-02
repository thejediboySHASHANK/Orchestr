'use client'

import {useState} from "react";
import {toast} from "sonner";
import axios from "axios";

type Props = {};
const GoogleDriveFiles = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);

    const reqGoogle = async () => {
        setLoading(false);
        const response = await axios.get('/api/drive-activity');
        if (response) {
            toast.message(response.data);
            setLoading(false);
            setIsListening(true);
        }
    }

    return (
        <div>GoogleDriveFiles</div>
    );
};
export default GoogleDriveFiles;
