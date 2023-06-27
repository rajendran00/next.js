import { useRef, useState } from "react"
import UserContact from "../../components/resume/userContact"
import UserDetails from "../../components/resume/userDetails"
import UserExperience from "../../components/resume/userExperience"
import UserGraduation from "../../components/resume/userGraduation"
import UserProjects from "../../components/resume/userProjects"
import UserSkills from "../../components/resume/userSkills"
import domToImage from 'dom-to-image';
import jsPDF from "jspdf"
interface ResumeProps {
}
const Resume: React.FC<ResumeProps> = () => {
    const [newImage, setNewImage] = useState("")
    const componentRef = useRef(null)
    const [PdfDoc, setPdfDoc] = useState(null)
    const convertToPdf = () => {
        try {
            const element = document.getElementById('fixtures');
            if (element) {
                const pdfWidth = element.scrollWidth;
                const pdfHeight = element.scrollHeight;

                var scale = 2;

                domToImage.toPng(element, {
                    width: pdfWidth * scale, height: pdfHeight * scale,
                    style: {
                        transform: 'scale(' + scale + ')',
                        transformOrigin: 'top left',
                        scrollX: -window.scrollX,
                        scrollY: -window.scrollY
                    }
                }).then((imgData) => {
                    const pdf = new jsPDF('p', 'px', [pdfHeight, pdfWidth]);
                    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, null, "FAST");

                    const base64Pdf = pdf.output('datauristring');
                    // console.log(base64Pdf);

                    if ((window as any).messageData) {
                        let data = {
                            url: base64Pdf
                        };
                        (window as any).messageData.postMessage(JSON.stringify(data));
                    }
                    else {

                        setPdfDoc(pdf);
                        pdf.save('Rajendran.pdf');
                        console.log(base64Pdf, "base64Pdf");

                    }

                });

            } else {
                console.log("Unable to download Fixtures");
            }
        } catch (error) {
            console.log("Error generating PDF:", error);
        }
    };
    console.log(newImage == "", "emptystring");

    return (
        <>
            {newImage == "" ? (
                <div>
                    <div className="pb-6">
                        <div className="flex justify-center">
                            <div id="fixtures" className="flex w-[60%] p-4 ">
                                <div className="max-w-[75%]">
                                    <div className="max-w-[90%] mb-6">
                                        <UserDetails />
                                    </div>
                                    <div className="max-w-[90%] ">
                                        <div className="pb-2">
                                            <UserExperience />
                                        </div>
                                        <div className="pb-4">
                                            <UserProjects />
                                        </div>
                                        <div className="pb-8">
                                            <UserGraduation />
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33%]">
                                    <UserContact />
                                    <div className="mt-6">
                                        <UserSkills />
                                    </div>
                                </div>
                            </div>

                            {/* <div className="w-[75%] border p-4">
                                <div className="flex">
                                    <div className="max-w-[65%]">

                                    </div>
                                    <div className="w-[35%]">

                                    </div>
                                </div>
                                <div className="flex pt-8">

                                    <div className="w-[35%]">

                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className=" fixed w-[60%] z-10 bottom-0 p-2 bg-white commonBoxShadow">
                            <button className="w-full bg-green-500 text-white py-2 cursor-pointer" onClick={convertToPdf}>Download pdf</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>

                </div>
            )
            }

        </>

        // <div className="">
        //     <CreateImage />
        // </div>
    )
}
export default Resume