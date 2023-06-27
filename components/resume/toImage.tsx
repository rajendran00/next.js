import { log } from 'console';
import htmlToImage, { toPng } from 'html-to-image';
import { useState } from 'react';

interface ImageProps {

}
const CreateImage: React.FC<ImageProps> = () => {
    const [newImage, setNewImage] = useState("")
    const convertToImage = (): void => {
        const element: HTMLElement | null = document.getElementById('htmlElementId');
        if (element) {
            toPng(element)
                .then((dataUrl: string) => {
                    const img: HTMLImageElement = new Image();
                    setNewImage(dataUrl)
                    img.src = dataUrl;
                    console.log(dataUrl, "dataUrl");

                    document.body.appendChild(img);
                    console.log("Conversion success", document.body);

                })
                .catch((error: Error) => {
                    console.error('Conversion failed:', error);
                });
        }
    };
    console.log(newImage, "newImage");

    return (
        <>
            {newImage == "" ? (
                <div>
                    <div id="htmlElementId">
                        welcome 123
                    </div>
                    <button onClick={convertToImage}>Convert to Image</button>
                </div>
            ) : (
                <div>
                </div>
            )
            }

        </>
    )
}
export default CreateImage