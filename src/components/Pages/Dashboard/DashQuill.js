import React from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
Quill.register("modules/imageResize", ImageResize);
const ImageFormatAttributesList = [
    'alt',
    'height',
    'width',
    'style'
];

const BaseImageFormat = Quill.import('formats/image');
class ImageFormat extends BaseImageFormat {
    static formats(domNode) {
        return ImageFormatAttributesList.reduce(function (formats, attribute) {
            if (domNode.hasAttribute(attribute)) {
                formats[attribute] = domNode.getAttribute(attribute);
            }
            return formats;
        }, {});
    }
    format(name, value) {
        if (ImageFormatAttributesList.indexOf(name) > -1) {
            if (value) {
                this.domNode.setAttribute(name, value);
            } else {
                this.domNode.removeAttribute(name);
            }
        } else {
            super.format(name, value);
        }
    }
}

Quill.register(ImageFormat, true);

export default function DashQuill({ text, setText, id }) {
    return (
        <div
            className='mb-3'
            onClick={(e) => {
                setText(
                    document
                        .getElementById(`my-editor-${id}`)
                        .getElementsByClassName("ql-container")[0]
                        .getElementsByClassName("ql-editor")[0].innerHTML
                );
            }}
        >
            <ReactQuill
                id={`my-editor-${id}`}
                theme="snow"
                modules={{
                    toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ size: ["small", false, "large", "huge"] }],
                        [{ font: [] }],
                        [{ color: [] }, { background: [] }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ script: "sub" }, { script: "super" }],
                        ["blockquote", "code-block"],
                        [{ indent: "-1" }, { indent: "+1" }],
                        [{ direction: "rtl" }],
                        [{ align: [] }],
                        ["link", "video"],
                        ["clean"],
                    ],
                    imageResize: {
                        displayStyles: {
                            backgroundColor: "black",
                            border: "none",
                            color: "white",
                        },
                        modules: ["Resize", "DisplaySize", "Toolbar"],
                    },
                }}
                onChange={(content, delta, source, editor) => {
                    setText(editor.getHTML());
                }}
                value={text || ''}
            />
        </div>
    );
}
