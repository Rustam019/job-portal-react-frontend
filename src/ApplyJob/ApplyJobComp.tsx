import { Button, CheckIcon, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core"
import { IconPaperclip } from "@tabler/icons-react"
import { useState } from "react";
import { Notification } from '@mantine/core';
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {

    const checkIcon = <CheckIcon size={20} />;

    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5)
    const navigate = useNavigate();

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleSubmit = () => {
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x);
            if (x == 0) {
                navigate('/find-jobs');
            }

        }, 1000)
    }

    return (
        <>
            <div className='w-2/3 mx-auto'>
                <LoadingOverlay className="!flexed"
                    visible={submit}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2 }}
                    loaderProps={{ color: 'yellow', type: 'bars' }}
                />
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-14" src={`/Icons/Meta.png`} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className="font-semibold text-2xl">Software Engineer 3</div>
                            <div className="text-lg text-mine-shaft-300">Google &#x2022; 3 days ago &#x2022; 48 Applicants </div>
                        </div>
                    </div>

                </div>
                <Divider my="xl" />
                <div className="text-xl font-semibold mb-5">Submit Your Application</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <TextInput className={`${preview ? 'text-mine-shaft-400 font-semibold' : ''}`} readOnly={preview} variant={preview ? "unstyled" : "default"} label="Full Name" withAsterisk placeholder="Enter Name" />
                        <TextInput className={`${preview ? 'text-mine-shaft-400 font-semibold' : -''}`} readOnly={preview} variant={preview ? "unstyled" : "default"} label="Email" withAsterisk placeholder="Enter Email" />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <NumberInput className={`${preview ? 'text-mine-shaft-400 font-semibold' : ''}`} readOnly={preview} variant={preview ? "unstyled" : "default"} label="Phone Number" withAsterisk placeholder="Enter Phone Number" hideControls clampBehavior='strict' min={0} max={9999999999} />
                        <TextInput className={`${preview ? 'text-mine-shaft-400 font-semibold' : ''}`} readOnly={preview} variant={preview ? "unstyled" : "default"} label="Personal Website" withAsterisk placeholder="Enter URL" />
                    </div>
                    <FileInput className={`${preview ? 'text-mine-shaft-400 font-semibold' : ''}`} readOnly={preview} variant={preview ? "unstyled" : "default"} leftSection={<IconPaperclip />} label="Attach your CV" placeholder="Your CV" leftSectionPointerEvents="none" />
                    <Textarea className={`${preview ? 'text-mine-shaft-400 font-semibold' : ''}`} readOnly={preview} variant={preview ? "unstyled" : "default"} withAsterisk placeholder="Type SomeThing about yourself....." label="Cover Letter" autosize minRows={4} />
                    {!preview && <Button onClick={handlePreview} className="!text-bright-sun-400 " variant="light" >Preview</Button>}
                    {preview &&
                        <div className="flex gap-10">
                            <Button fullWidth onClick={handlePreview} className="!text-bright-sun-400 " variant="outline" >Edit</Button>
                            <Button fullWidth onClick={handleSubmit} className="!text-bright-sun-400 " variant="light" >Submit</Button>
                        </div>
                    }
                </div>
            </div>
            <Notification className={`!border-bright-sun-400 !fixed top-0 z-[1001] left-[35%] ${submit ? 'translate-y-0' : '-translate-y-25'} transition easy-in-out duration-300`} withBorder icon={checkIcon} color="teal" title="Application Submitted!" mt="md" withCloseButton={false}>
                Redirecting to the find Jobs in {sec} Seconds...
            </Notification>
        </>
    )
}

export default ApplyJobComp
